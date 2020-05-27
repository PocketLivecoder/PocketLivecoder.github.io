var button = document.getElementById("button");
        var display = document.getElementById("display");
        var container = document.getElementById("container");
        var sliderElement = document.getElementById("slider");

        button.style.left = container.offsetLeft + 'px';
        display.style.left = container.offsetLeft + 'px';
        button.style.top = container.offsetTop + container.offsetHeight + 'px'
        display.style.top = container.offsetTop - container.offsetHeight + 'px'

        display.innerHTML = "C4";

        window.addEventListener("input", function () {

            display.innerHTML = sliderElement.value;

            if (sliderElement.value == 0) display.innerHTML = "C3"
            if (sliderElement.value == 1) display.innerHTML = "D3"
            if (sliderElement.value == 2) display.innerHTML = "E3"
            if (sliderElement.value == 3) display.innerHTML = "F3"
            if (sliderElement.value == 4) display.innerHTML = "G3"
            if (sliderElement.value == 5) display.innerHTML = "A3"
            if (sliderElement.value == 6) display.innerHTML = "B3"
            if (sliderElement.value == 7) display.innerHTML = "C4"
            if (sliderElement.value == 8) display.innerHTML = "D4"
            if (sliderElement.value == 9) display.innerHTML = "E4"
            if (sliderElement.value == 10) display.innerHTML = "F4"
            if (sliderElement.value == 11) display.innerHTML = "G4"
            if (sliderElement.value == 12) display.innerHTML = "A4"
        });

        window.addEventListener('resize', function () {
            button.style.left = container.offsetLeft + 'px';
            display.style.left = container.offsetLeft + 'px';
            button.style.top = container.offsetTop + container.offsetHeight + 'px'
            display.style.top = container.offsetTop - container.offsetHeight + 'px'
        });



var slider = {

    init: function () {

        button.onclick = ()=>{

        var sliderElement = document.getElementById("slider");

        var value = sliderElement.value;

        // console.log(value);

        // Put selected value to target field + close numpad
        // target.value = value;
        target.setValue(value);

        // numpad.hide();
        var sliderElement = document.getElementById("wrap");
        sliderElement.style.visibility = "hidden";
        sliderElement.style.opacity = "0";
        }

    },

    attach: function (opt) {
        target = opt;
        this.show();
    },

    target: null, // contains the current selected field
    show: function (evt) {

        var sliderElement = document.getElementById("wrap");
        sliderElement.style.visibility = "visible";
        sliderElement.style.opacity = "1";

    },

    hide: function () {
        // hide() : hide the number pad
        var sliderElement = document.getElementById("numpad-back");
        sliderElement.style.visibility = "hidden";
        sliderElement.style.opacity = "0";

    },

};

/* [INIT] */
window.addEventListener("load", slider.init);


