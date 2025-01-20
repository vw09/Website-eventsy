document.addEventListener("DOMContentLoaded", function() {
    // Features Tabs Interactivity
    const tabs = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            tabContents.forEach(content => {
                if(content.id === tab.getAttribute('data-target')) {
                    content.style.display = 'block';
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });

    // Accordion for FAQ
    const accordions = document.querySelectorAll('.accordion-button');
    accordions.forEach(accordion => {
        accordion.addEventListener('click', function() {
            const content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});

window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
        document.querySelector('.nav-menu').style.display = 'none';
    } else {
        document.querySelector('.nav-menu').style.display = 'flex';
    }
});