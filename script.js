
document.addEventListener("DOMContentLoaded", function() {
    var smallNav = document.getElementById('smallNav');

    var menuIcon = document.querySelector('.navbar-small .menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            toggleMenu(smallNav);
        });
    }
});

function toggleMenu(smallNav) {
    var currentDisplay = window.getComputedStyle(smallNav).getPropertyValue('display');

    if (currentDisplay === 'none') {
        smallNav.style.display = 'block';
    } else {
        smallNav.style.display = 'none';
    }
}


$(document).ready(function () {
    $(".service-item").click(function () {
        // Reset all tabs
        $(".service-item").removeClass("active");
        $(".tab-content").removeClass("active");

        // Activate the clicked tab
        $(this).addClass("active");
        var service = $(this).data("service");
        $("#" + service + "-content").addClass("active");
    });
});

