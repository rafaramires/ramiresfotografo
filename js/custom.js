// navigation  menu js
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");

}

// display current year on footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").textContent = currentYear;
}

getCurrentYear();

var liOne = $(".client_section .carousel-indicators li.li_one");
var liTwo = $(".client_section .carousel-indicators li.li_two");
var ulAfter = $(".client_section .carousel-indicators .ol_design");

if (liOne.length && liTwo.length && ulAfter.length) {
    $('#carouselExampleControls').on('slid.bs.carousel', function () {
        if (liOne.hasClass("active")) {
            ulAfter.css('left', 'calc(0% + 35px)');
        } else if (liTwo.hasClass("active")) {
            ulAfter.css('left', 'calc(100% - 45px)');
        }
    });
}

