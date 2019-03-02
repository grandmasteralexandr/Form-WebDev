$(document).ready(() => {
    /* Add Slider */
    const slider = $(".slider-container");
    slider.ikSlider(
        {
            responsive: false,
            pauseOnHover: false,
            delay: 5000,
            speed: 1000,
            touch: false,
            controls: false,
            arrows: false,
            infinite: false,
        }
    );
});