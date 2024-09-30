document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentPage = window.location.pathname.split('/').pop();
    
    // Select all dropdown items
    var menuItems = document.querySelectorAll('.dropdown-item');
    
    // Loop through each menu item and set active class if href matches the current page
    menuItems.forEach(function(item) {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});
