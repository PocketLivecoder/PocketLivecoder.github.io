//sliiiider in
var slider = {
    init: function () {
        // CREATE THE NUMPAD
        slider.selector = document.createElement("div");
        slider.selector.id = "slider-back";
        var wrap = document.createElement("div");
        wrap.id = "slider-wrap";
        slider.selector.appendChild(wrap);

        // ATTACH BUTTONS
        var buttons = document.createElement("div"),
            button = null,
            append = function (txt, fn, css) {
                button = document.createElement("div");
                button.innerHTML = txt;
                button.classList.add("numpad-btn");
                if (css) {
                    button.classList.add(css);
                }
                button.addEventListener("click", fn);
                buttons.appendChild(button);
            };
        buttons.id = "numpad-btns";

        append("&#10004;", numpad.select, "ok");

        // ATTACH THE NUMBER DISPLAY
        // slider.display = document.createElement("input");
        // slider.display.id = "slider-display";
        // slider.display.type = "text";
        // slider.display.readOnly = true;
        // wrap.appendChild(slider.display);
    },

    attach: function (opt) {
        target = opt;
        // console.log("attach")
        // var numpadElement = document.getElementById("numpad-back");
        this.show();
    },

    target: null, // contains the current selected field
    // dec: true, // allow decimals?
    // max: 10, // max allowed characters
    show: function (evt) {
        console.log("slider-back");
        var sliderElement = document.getElementById("slider-back");
        sliderElement.style.visibility = "visible";
        sliderElement.style.opacity = "1";
    },

    hide: function () {
        var sliderElement = document.getElementById("slider-back");
        sliderElement.style.visibility = "hidden";
        sliderElement.style.opacity = "0";
    },

    select: function () {
        // select() : select the current number

        var sliderElement = document.getElementById("slider-back");
        var value = sliderElement.value;
        // console.log(value);

        // Put selected value to target field + close numpad
        // target.value = value;
        target.setValue(value);

        // numpad.hide();
        var sliderElement = document.getElementById("slider-back");

        sliderElement.style.visibility = "hidden";
        sliderElement.style.opacity = "0";

        // reset the number pad
        // numpad.display.value = "";
    }
};

/* [INIT] */
window.addEventListener("load", slider.init);

// function hideNumpad() {
//     // console.log(document.getElementById("numpad-back"))

//     document.getElementById("numpad-back").onClick = function () {
//         console.log("now")
//         numpad.hide();
//     }
// }