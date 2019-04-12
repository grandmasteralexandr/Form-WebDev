$(document).ready(() => {
    const GREAT_HOUSES_LIST = [
        "Stark",
        "Arryn",
        "Baratheon",
        "Greyjoy",
        "Lannister",
        "Martell",
        "Targaryen",
        "Tully",
        "Tyrell",
    ];

    /* Add Slider */
    const slider = $(".slider-container");
    slider.ikSlider(
        {
            responsive: false,
            pauseOnHover: false,
            delay: 3500,
            speed: 1000,
            touch: false,
            controls: false,
            arrows: false,
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

    let firstChange = false;

    dropDown.change(() => {
        if (!firstChange) {
            /* Need to destroy in first change because need set autoPlay: false */
            slider.ikSlider("destroy");
            slider.ikSlider({
                autoPlay: false,
                responsive: false,
                pauseOnHover: false,
                touch: false,
                controls: false,
                arrows: false,
            });

            firstChange = true;
            $(".select2-container").removeClass("input-error");
        }

        /* Show specified slide */
        slider.ikSlider(GREAT_HOUSES_LIST.indexOf(dropDown.val()));
    });

    /* Add dropdown validation */
    const saveButton = $("#info-form-button");

    saveButton.click(() => {
        if (!firstChange) {
            $(".select2-container").addClass("input-error");
        }
    });
});