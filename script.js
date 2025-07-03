document.addEventListener('DOMContentLoaded', function() {
    let popupZIndex = 1; // Initialize the z-index counter

    function displayPopup(popup) {
        popup.style.display = 'block';
        popup.style.zIndex = popupZIndex++; // Increment and set z-index
    }

    const links = {
        crossyRoad: document.querySelector('.crossy-road-link'),
        overstimulation: document.querySelector('.overstimulation-link'),
        concentrate: document.querySelector('.concentrate-link'),
        earwax: document.querySelector('.earwax-link'),
        isolation: document.querySelectorAll('.isolation-link'),
        about: document.getElementById('about-link'),
        lipreading: document.querySelector('.lipreading-link'),
        websites: document.querySelector('.website-link'), // Add websites link
        guessthetone: document.querySelector('.guessthetone-link') // Add guessthetone link
    };

    const popups = {
        crossyRoad: document.getElementById('popup-crossy-road'),
        overstimulation: document.getElementById('popup-overstimulation'),
        concentrate: document.getElementById('popup-concentrate'),
        earwax: document.getElementById('popup-earwax'),
        isolation: document.getElementById('popup-isolation'),
        about: document.getElementById('popup-about'),
        lipreading: document.getElementById('popup-lipreading'),
        websites: document.getElementById('popup-websites'), // Add websites popup
        guessthetone: document.getElementById('popup-guessthetone') // Add guessthetone popup
    };

    const closeButtons = {
        crossyRoad: document.querySelector('#popup-crossy-road .close-button'),
        overstimulation: document.querySelector('#popup-overstimulation .close-button'),
        concentrate: document.querySelector('#popup-concentrate .close-button'),
        earwax: document.querySelector('#popup-earwax .close-button'),
        isolation: document.querySelector('#popup-isolation .close-button'),
        about: document.getElementById('close-button-about'),
        lipreading: document.querySelector('#popup-lipreading .close-button'),
        websites: document.querySelector('#popup-websites .close-button'), // Add close button for websites popup
        guessthetone: document.querySelector('#popup-guessthetone .close-button') // Add close button for guessthetone popup
    };

    const gridItems = document.querySelectorAll('.griditem');

    // Function to clear selected state from all grid items
    function clearSelectedState() {
        gridItems.forEach(item => item.classList.remove('selected'));
    }

    // Add event listeners for each grid item
    gridItems.forEach((item, index) => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            clearSelectedState();
            item.classList.add('selected');
            const link = item.querySelector('a');
            const popup = popups[link.className.split('-')[0]]; // Match class name prefix to popups object key
            displayPopup(popup);
        });
    });

    // Add event listeners for each close button to hide respective popups
    Object.values(closeButtons).forEach((button, index) => {
        const popupKeys = Object.keys(popups);
        button.addEventListener('click', function() {
            popups[popupKeys[index]].style.display = 'none';
        });
    });

    // Display about popup when the page is loaded
    displayPopup(popups.about);

    // Add event listeners for each link to display respective popups
    links.crossyRoad.addEventListener('click', function(event) {
        event.preventDefault();
        displayPopup(popups.crossyRoad);
    });

    links.overstimulation.addEventListener('click', function(event) {
        event.preventDefault();
        displayPopup(popups.overstimulation);
    });

    links.concentrate.addEventListener('click', function(event) {
        event.preventDefault();
        displayPopup(popups.concentrate);
    });

    links.earwax.addEventListener('click', function(event) {
        event.preventDefault();
        displayPopup(popups.earwax);
    });

    links.isolation.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            displayPopup(popups.isolation);
        });
    });

    links.about.addEventListener('click', function(event) {
        event.preventDefault();
        displayPopup(popups.about);
    });

    links.lipreading.addEventListener('click', function(event) {
        event.preventDefault();
        displayPopup(popups.lipreading);
    });

    // Add event listeners for websites and guessthetone links to display respective popups
    links.websites.addEventListener('click', function(event) {
        event.preventDefault();
        displayPopup(popups.websites);
    });

    links.guessthetone.addEventListener('click', function(event) {
        event.preventDefault();
        displayPopup(popups.guessthetone);
    });
});