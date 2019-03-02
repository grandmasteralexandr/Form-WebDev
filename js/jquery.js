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

    /* Add dropdown */
    const dropDown = $("#great-house");
    dropDown.select2({
        placeholder: 'Select House',
        minimumResultsForSearch: 'Infinity',
        containerCssClass: "form__select",
        dropdownCssClass: "form__option"
    });
});