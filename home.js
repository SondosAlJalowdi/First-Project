// loads the card template into the document body and appends the first four cards from the cardData array
document.addEventListener('DOMContentLoaded', function() {

    fetch('card-tmpl.html')
        .then(response => response.text())
        .then(templateHtml => {

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = templateHtml;
            const template = tempDiv.querySelector('template');
            document.body.appendChild(template);
            const container = document.getElementById('card-container');

            cardData.slice(0, 4).forEach(data => {
                const clone = document.importNode(template.content, true);
                clone.querySelector('img').src = data.imgSrc;
                clone.querySelector('.card-title').textContent = data.name;
                clone.querySelectorAll('.card-text p')[0].innerHTML += data.submittedOn;
                clone.querySelectorAll('.card-text p')[1].innerHTML += data.duration;
                clone.querySelectorAll('.card-text p')[2].innerHTML += data.salary;
                container.appendChild(clone);
            });
        })
        .catch(error => console.error('Error loading card template:', error));
});

// sets up the search input to filter the cards based on the user input
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            const query = searchInput.value.toLowerCase();
            const cards = document.querySelectorAll('#card-container .card');
            let visibleCount = 0;
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query) && visibleCount < 4) {
                    card.style.display = '';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});

