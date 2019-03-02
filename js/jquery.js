$(document).ready(() => {
    // $(".slider").slick();
    $(".slider-container").ikSlider(
        {
            responsive: false,
            pauseOnHover: false,
            delay: 3000,
            touch   : false,
            controls: false,
            arrows  : false,
            infinite: true,
        }
    );
});