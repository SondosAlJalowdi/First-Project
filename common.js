const cardData = [
    {
        imgSrc: "user.png",
        name: "John Doe",
        submittedOn: "20/7/2024",
        duration: "1 Weeks (6/7/2024 - 13/7/2024)",
        salary: "1980 JD",
        title: "Non Paid Vacation",
        dateRange: "12/5/2023 - 14/5/2023",
        days: "6 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user.png",
        name: "John Doe",
        submittedOn: "17/9/2023",
        duration: "1 Weeks (6/11/2024 - 13/11/2024)",
        salary: "734 JD",
        title: "Annual Vacation",
        dateRange: "4/1/2023 - 7/1/2023",
        days: "5 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user.png",
        name: "Michael Brown",
        submittedOn: "16/11/2023",
        duration: "3 Weeks (9/8/2024 - 30/8/2024)",
        salary: "2493 JD",
        title: "Sick Vacation",
        dateRange: "20/6/2023 - 29/6/2023",
        days: "6 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user2.png",
        name: "Jane Smith",
        submittedOn: "18/8/2024",
        duration: "3 Weeks (5/4/2024 - 26/4/2024)",
        salary: "2377 JD",
        title: "Annual Vacation",
        dateRange: "27/2/2023 - 28/2/2023",
        days: "2 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user.png",
        name: "John Doe",
        submittedOn: "8/11/2023",
        duration: "2 Weeks (15/2/2024 - 29/2/2024)",
        salary: "2450 JD",
        title: "Annual Vacation",
        dateRange: "30/4/2023 - 2/5/2023",
        days: "5 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user2.png",
        name: "Jane Smith",
        submittedOn: "6/2/2024",
        duration: "1 Weeks (12/12/2024 - 19/12/2024)",
        salary: "519 JD",
        title: "Annual Vacation",
        dateRange: "8/6/2023 - 16/6/2023",
        days: "2 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user2.png",
        name: "Emily Davis",
        submittedOn: "2/8/2023",
        duration: "4 Weeks (25/7/2024 - 22/8/2024)",
        salary: "2189 JD",
        title: "Sick Vacation",
        dateRange: "27/1/2023 - 5/2/2023",
        days: "4 days",
        approvedBy: "Sarah Connor"
    },
    {
        imgSrc: "user.png",
        name: "Michael Brown",
        submittedOn: "12/3/2024",
        duration: "3 Weeks (24/3/2024 - 14/4/2024)",
        salary: "1783 JD",
        title: "Sick Vacation",
        dateRange: "12/11/2023 - 15/11/2023",
        days: "7 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user2.png",
        name: "Jane Smith",
        submittedOn: "17/4/2024",
        duration: "2 Weeks (21/4/2024 - 5/5/2024)",
        salary: "961 JD",
        title: "Non Paid Vacation",
        dateRange: "15/9/2023 - 20/9/2023",
        days: "8 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user2.png",
        name: "Anna Michael",
        submittedOn: "27/6/2023",
        duration: "2 Weeks (22/4/2024 - 6/5/2024)",
        salary: "1198 JD",
        title: "Non Paid Vacation",
        dateRange: "24/7/2023 - 26/7/2023",
        days: "4 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user.png",
        name: "John Doe",
        submittedOn: "15/3/2024",
        duration: "1 Weeks (30/11/2024 - 7/12/2024)",
        salary: "962 JD",
        title: "Annual Vacation",
        dateRange: "17/12/2023 - 25/12/2023",
        days: "6 days",
        approvedBy: "Sarah Connor"
    },
    {
        imgSrc: "user2.png",
        name: "Emily Davis",
        submittedOn: "8/4/2024",
        duration: "1 Weeks (22/10/2024 - 29/10/2024)",
        salary: "572 JD",
        title: "Non Paid Vacation",
        dateRange: "21/7/2023 - 23/7/2023",
        days: "5 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user2.png",
        name: "Emily Davis",
        submittedOn: "7/10/2023",
        duration: "1 Weeks (18/2/2024 - 25/2/2024)",
        salary: "1825 JD",
        title: "Annual Vacation",
        dateRange: "26/12/2023 - 27/12/2023",
        days: "5 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user.png",
        name: "Michael Brown",
        submittedOn: "17/10/2023",
        duration: "3 Weeks (9/4/2024 - 30/4/2024)",
        salary: "586 JD",
        title: "Sick Vacation",
        dateRange: "26/2/2023 - 26/2/2023",
        days: "2 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user2.png",
        name: "Jane Smith",
        submittedOn: "2/5/2024",
        duration: "3 Weeks (25/11/2024 - 16/12/2024)",
        salary: "1311 JD",
        title: "Non Paid Vacation",
        dateRange: "30/9/2023 - 8/10/2023",
        days: "7 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user.png",
        name: "John Doe",
        submittedOn: "3/6/2023",
        duration: "3 Weeks (10/1/2024 - 31/1/2024)",
        salary: "2386 JD",
        title: "Sick Vacation",
        dateRange: "22/9/2023 - 24/9/2023",
        days: "3 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user.png",
        name: "Michael Brown",
        submittedOn: "5/7/2023",
        duration: "4 Weeks (29/6/2024 - 27/7/2024)",
        salary: "1074 JD",
        title: "Annual Vacation",
        dateRange: "5/6/2023 - 6/6/2023",
        days: "3 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user2.png",
        name: "Anna Michael",
        submittedOn: "19/7/2024",
        duration: "1 Weeks (15/2/2024 - 22/2/2024)",
        salary: "1037 JD",
        title: "Sick Vacation",
        dateRange: "18/6/2023 - 26/6/2023",
        days: "1 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user2.png",
        name: "Emily Davis",
        submittedOn: "7/7/2023",
        duration: "3 Weeks (23/6/2024 - 14/7/2024)",
        salary: "2124 JD",
        title: "Non Paid Vacation",
        dateRange: "8/6/2023 - 9/6/2023",
        days: "4 days",
        approvedBy: "Sarah Connor"
    },
    {
        imgSrc: "user2.png",
        name: "Jane Smith",
        submittedOn: "8/1/2024",
        duration: "2 Weeks (12/1/2024 - 26/1/2024)",
        salary: "2242 JD",
        title: "Sick Vacation",
        dateRange: "12/1/2023 - 19/1/2023",
        days: "4 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user2.png",
        name: "Anna Michael",
        submittedOn: "10/10/2023",
        duration: "3 Weeks (16/10/2024 - 6/11/2024)",
        salary: "906 JD",
        title: "Sick Vacation",
        dateRange: "16/12/2023 - 17/12/2023",
        days: "7 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user2.png",
        name: "Emily Davis",
        submittedOn: "10/2/2024",
        duration: "3 Weeks (2/4/2024 - 23/4/2024)",
        salary: "1986 JD",
        title: "Non Paid Vacation",
        dateRange: "2/10/2023 - 4/10/2023",
        days: "7 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user.png",
        name: "John Doe",
        submittedOn: "7/8/2023",
        duration: "2 Weeks (13/9/2024 - 27/9/2024)",
        salary: "1345 JD",
        title: "Sick Vacation",
        dateRange: "30/4/2023 - 5/5/2023",
        days: "4 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user2.png",
        name: "Jane Smith",
        submittedOn: "30/11/2024",
        duration: "4 Weeks (28/12/2024 - 25/1/2025)",
        salary: "1428 JD",
        title: "Sick Vacation",
        dateRange: "5/1/2023 - 10/1/2023",
        days: "2 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user2.png",
        name: "Anna Michael",
        submittedOn: "14/6/2024",
        duration: "3 Weeks (24/7/2024 - 14/8/2024)",
        salary: "2140 JD",
        title: "Sick Vacation",
        dateRange: "1/3/2023 - 2/3/2023",
        days: "7 days",
        approvedBy: "Sarah Connor"
    },
    {
        imgSrc: "user2.png",
        name: "Anna Michael",
        submittedOn: "18/10/2023",
        duration: "3 Weeks (24/11/2024 - 15/12/2024)",
        salary: "1497 JD",
        title: "Annual Vacation",
        dateRange: "11/1/2023 - 14/1/2023",
        days: "7 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user2.png",
        name: "Emily Davis",
        submittedOn: "2/6/2023",
        duration: "2 Weeks (30/10/2024 - 13/11/2024)",
        salary: "876 JD",
        title: "Sick Vacation",
        dateRange: "7/8/2023 - 13/8/2023",
        days: "6 days",
        approvedBy: "Sarah Connor"
    },
    {
        imgSrc: "user2.png",
        name: "Anna Michael",
        submittedOn: "10/12/2024",
        duration: "4 Weeks (22/9/2024 - 20/10/2024)",
        salary: "1395 JD",
        title: "Annual Vacation",
        dateRange: "27/9/2023 - 2/10/2023",
        days: "3 days",
        approvedBy: "Sarah Connor"
    },
    {
        imgSrc: "user.png",
        name: "John Doe",
        submittedOn: "16/1/2024",
        duration: "3 Weeks (20/8/2024 - 10/9/2024)",
        salary: "1506 JD",
        title: "Sick Vacation",
        dateRange: "17/6/2023 - 25/6/2023",
        days: "7 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user2.png",
        name: "Emily Davis",
        submittedOn: "24/9/2024",
        duration: "2 Weeks (17/5/2024 - 31/5/2024)",
        salary: "1257 JD",
        title: "Annual Vacation",
        dateRange: "12/10/2023 - 21/10/2023",
        days: "4 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user.png",
        name: "Michael Brown",
        submittedOn: "16/8/2023",
        duration: "2 Weeks (9/6/2024 - 23/6/2024)",
        salary: "1257 JD",
        title: "Non Paid Vacation",
        dateRange: "29/10/2023 - 4/11/2023",
        days: "1 days",
        approvedBy: "Sarah Connor"
    },
    {
        imgSrc: "user.png",
        name: "Michael Brown",
        submittedOn: "8/12/2024",
        duration: "1 Weeks (3/12/2024 - 10/12/2024)",
        salary: "1465 JD",
        title: "Sick Vacation",
        dateRange: "7/9/2023 - 11/9/2023",
        days: "9 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user2.png",
        name: "Anna Michael",
        submittedOn: "22/3/2023",
        duration: "3 Weeks (20/2/2024 - 12/3/2024)",
        salary: "780 JD",
        title: "Annual Vacation",
        dateRange: "13/9/2023 - 17/9/2023",
        days: "9 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user2.png",
        name: "Jane Smith",
        submittedOn: "16/11/2023",
        duration: "3 Weeks (9/2/2024 - 1/3/2024)",
        salary: "804 JD",
        title: "Sick Vacation",
        dateRange: "10/2/2023 - 14/2/2023",
        days: "1 days",
        approvedBy: "Sarah Connor"
    },
    {
        imgSrc: "user2.png",
        name: "Anna Michael",
        submittedOn: "30/6/2024",
        duration: "2 Weeks (27/7/2024 - 10/8/2024)",
        salary: "2077 JD",
        title: "Annual Vacation",
        dateRange: "27/9/2023 - 3/10/2023",
        days: "4 days",
        approvedBy: "James Smith"
    },
    {
        imgSrc: "user2.png",
        name: "Jane Smith",
        submittedOn: "7/9/2023",
        duration: "4 Weeks (7/12/2024 - 4/1/2025)",
        salary: "1830 JD",
        title: "Non Paid Vacation",
        dateRange: "15/3/2023 - 24/3/2023",
        days: "1 days",
        approvedBy: "Sarah Connor"
    },
    {
        imgSrc: "user2.png",
        name: "Anna Michael",
        submittedOn: "18/10/2023",
        duration: "4 Weeks (25/12/2024 - 22/1/2025)",
        salary: "1631 JD",
        title: "Non Paid Vacation",
        dateRange: "6/10/2023 - 8/10/2023",
        days: "8 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user.png",
        name: "Michael Brown",
        submittedOn: "17/2/2024",
        duration: "1 Weeks (1/8/2024 - 8/8/2024)",
        salary: "1838 JD",
        title: "Sick Vacation",
        dateRange: "5/10/2023 - 8/10/2023",
        days: "1 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user.png",
        name: "Michael Brown",
        submittedOn: "17/7/2024",
        duration: "3 Weeks (23/4/2024 - 14/5/2024)",
        salary: "1677 JD",
        title: "Non Paid Vacation",
        dateRange: "20/6/2023 - 21/6/2023",
        days: "7 days",
        approvedBy: "Daniel Doe"
    },
    {
        imgSrc: "user2.png",
        name: "Jane Smith",
        submittedOn: "10/4/2024",
        duration: "3 Weeks (23/5/2024 - 13/6/2024)",
        salary: "1678 JD",
        title: "Sick Vacation",
        dateRange: "12/12/2023 - 21/12/2023",
        days: "6 days",
        approvedBy: "Daniel Doe"
    }
]


// loads the navigation bar into the document body and sets the active page in the navbar based on the current page
document.addEventListener('DOMContentLoaded', function() {
    fetch('nav.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
            const currentPage = window.location.pathname.split('/').pop();
            const pageNavMap = {
                'Home.html': 'nav-home',
                'Profile.html': 'nav-profile',
            };
            if (pageNavMap[currentPage]) {
                document.getElementById(pageNavMap[currentPage]).classList.add('active', 'fw-bold');
            }

        })
        .catch(error => console.error('Error loading navigation:', error));
});
