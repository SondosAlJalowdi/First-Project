//loads the card template into the document body and appends the cards from the cardData array based on the current page
//and the number of items per page (12). It also sets up the pagination and filters the data based on the search input.
document.addEventListener('DOMContentLoaded', function() {
    const itemsPerPage = 12;
    let currentPage = 1;
    let filteredData = cardData;

    fetch('vacation-requests-card-tmpl.html')
        .then(response => response.text())
        .then(templateHtml => {

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = templateHtml;
            const template = tempDiv.querySelector('template');
            document.body.appendChild(template);
            const container = document.getElementById('card-container');

            //renders the cards based on the current page and the number of items per page
            function renderPage(page) {
                container.innerHTML = '';
                const start = (page - 1) * itemsPerPage;
                const end = start + itemsPerPage;
                const pageData = filteredData.slice(start, end);

                let rowContainer = null;
                pageData.forEach((data, index) => {
                    if (index % 3 === 0) {
                        rowContainer = document.createElement('div');
                        rowContainer.className = 'container row mt-5 ps-0 justify-content-between';
                        container.appendChild(rowContainer);
                    }

                    const clone = document.importNode(template.content, true);
                    clone.querySelector('img').src = data.imgSrc;
                    clone.querySelector('.card-title').textContent = data.name;
                    clone.querySelectorAll('.card-text p')[0].innerHTML += data.submittedOn;
                    clone.querySelectorAll('.card-text p')[1].innerHTML += data.duration;
                    clone.querySelectorAll('.card-text p')[2].innerHTML += data.salary;
                    const checkbox = clone.querySelector('input[type="checkbox"]');
                    checkbox.id = `box${start + index + 1}`;
                    checkbox.nextElementSibling.setAttribute('for', `box${start + index + 1}`);
                    rowContainer.appendChild(clone);
                });
            }

            //sets up the pagination based on the total number of items and the current page
            function setupPagination() {
                const totalPages = Math.ceil(filteredData.length / itemsPerPage);
                const paginationContainer = document.querySelector('.pagination');

                paginationContainer.innerHTML = '';

                const createPageItem = (page, label, isDisabled = false) => {
                    const li = document.createElement('li');
                    li.className = `page-item fw-bold ${isDisabled ? 'disabled' : ''}`;
                    const a = document.createElement('a');
                    a.className = `page-link fw-bold ${!isDisabled ? 'text-success' : ''}`;
                    a.href = '#';
                    a.textContent = label;
                    a.addEventListener('click', (e) => {
                        e.preventDefault();
                        if (!isDisabled) {
                            const allCheckbox = document.getElementById('all');
                            allCheckbox.checked = false;
                            currentPage = page;
                            renderPage(currentPage);
                            setupPagination();
                        }
                    });
                    li.appendChild(a);
                    return li;
                };

                paginationContainer.appendChild(createPageItem(currentPage - 1, '«', currentPage === 1));
                for (let i = 1; i <= totalPages; i++) {
                    paginationContainer.appendChild(createPageItem(i, i, currentPage === i));
                }
                paginationContainer.appendChild(createPageItem(currentPage + 1, '»', currentPage === totalPages));
            }

            //filters the data based on the user input
            function filterData(query) {
                filteredData = cardData.filter(data =>
                    data.name.toLowerCase().includes(query.toLowerCase()) ||
                    data.submittedOn.toLowerCase().includes(query.toLowerCase()) ||
                    data.duration.toLowerCase().includes(query.toLowerCase()) ||
                    data.salary.toLowerCase().includes(query.toLowerCase())
                );
                currentPage = 1;
                renderPage(currentPage);
                setupPagination();
            }

            const searchInput = document.querySelector('input[type="text"]');
            searchInput.addEventListener('input', (e) => {
                filterData(e.target.value);
            });


            renderPage(currentPage);
            setupPagination();
        })
        .catch(error => console.error('Error loading card template:', error));
});

//adds a change event listener to the checkbox with the id 'all' and toggles the checked state of all checkboxes in the document
document.addEventListener('DOMContentLoaded', function() {
    const allCheckbox = document.getElementById('all');
    allCheckbox.addEventListener('change', function(e) {
        const rows = document.querySelectorAll('.rows');
        rows.forEach(row => {
            const checkbox = row.querySelector('input[type="checkbox"]');
            checkbox.checked = e.currentTarget.checked;
            if (e.currentTarget.checked) {
                row.classList.remove('d-none');
            } else {
                row.classList.add('d-none');
            }
        });
    });
});