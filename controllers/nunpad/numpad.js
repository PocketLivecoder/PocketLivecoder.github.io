//numpad in
var numpad = {
    init: function () {
        // CREATE THE NUMPAD
        numpad.selector = document.createElement("div");
        numpad.selector.id = "numpad-back";
        var wrap = document.createElement("div");
        wrap.id = "numpad-wrap";
        numpad.selector.appendChild(wrap);

        // ATTACH THE NUMBER DISPLAY
        numpad.display = document.createElement("input");
        numpad.display.id = "numpad-display";
        numpad.display.type = "text";
        numpad.display.readOnly = true;
        wrap.appendChild(numpad.display);

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
        // First row - 7 to 9, delete.
        for (var i = 7; i <= 9; i++) {
            append(i, numpad.digit);
        }
        append("&#10502;", numpad.delete, "ng");
        // Second row - 4 to 6, clear.
        for (var i = 4; i <= 6; i++) {
            append(i, numpad.digit);
        }
        append("C", numpad.reset, "ng");
        // Third row - 1 to 3, cancel.
        for (var i = 1; i <= 3; i++) {
            append(i, numpad.digit);
        }
        append("&#10006;", numpad.hide, "ok");
        // Last row - 0, dot, ok
        append(0, numpad.digit, "zero");
        numpad.zero = button;
        append(".", numpad.dot);
        numpad.dot = button;
        append("&#10004;", numpad.select, "ok");
        // Add all buttons to wrapper
        wrap.appendChild(buttons);
        document.body.appendChild(numpad.selector);

        document.getElementById("numpad-back").onClick = function () {
            console.log("now")
            numpad.hide();
        }
    },

    attach: function (opt) {
        target = opt;
        this.show();

    },

    target: null, // contains the current selected field
    dec: true, // allow decimals?
    max: 10, // max allowed characters
    show: function (evt) {
        
        // Show numpad
        var numpadElement = document.getElementById("numpad-back");
        numpadElement.style.visibility = "visible";
        numpadElement.style.opacity = "1";
    },

    hide: function () {
        // hide() : hide the number pad
        var numpadElement = document.getElementById("numpad-back");
        numpadElement.style.visibility = "hidden";
        numpadElement.style.opacity = "0";

        // reset the number pad
        numpad.display.value = "";

    },

    /* [BUTTON ONCLICK ACTIONS] */
    delete: function () {
        // delete() : delete last digit on the number pad

        var length = numpad.display.value.length;
        if (length > 0) {
            numpad.display.value = numpad.display.value.substring(0, length - 1);
        }
    },

    reset: function () {
        // reset() : reset the number pad

        numpad.display.value = "";
    },

    digit: function (evt) {
        // digit() : append a digit

        var current = numpad.display.value,
            append = evt.target.innerHTML;

        if (current.length < numpad.max) {
            if (current == "0") {
                numpad.display.value = append;
            } else {
                numpad.display.value += append;
            }
        }
    },

    dot: function () {
        // dot() : add the decimal point (only if not already appended)

        if (numpad.display.value.indexOf(".") == -1) {
            if (numpad.display.value == "") {
                numpad.display.value = "0.";
            } else {
                numpad.display.value += ".";
            }
        }
    },

    select: function () {
        // select() : select the current number

        var value = numpad.display.value;
        // console.log(value);

        // No decimals allowed - strip decimal
        if (!numpad.dec && value % 1 != 0) {
            value = parseInt(value);
        }

        // Put selected value to target field + close numpad
        // target.value = value;
        target.setValue(value);

        // numpad.hide();
        var numpadElement = document.getElementById("numpad-back");

        numpadElement.style.visibility = "hidden";
        numpadElement.style.opacity = "0";

        // reset the number pad
        numpad.display.value = "";
    }
};

/* [INIT] */
window.addEventListener("load", numpad.init);

function hideNumpad() {
    console.log(document.getElementById("numpad-back"))

    document.getElementById("numpad-back").onClick = function () {
        console.log("now")
        numpad.hide();
    }
}