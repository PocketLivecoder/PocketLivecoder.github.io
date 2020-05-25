Blockly.Blocks['tone'] = {
    init: function () {
        var duration = [
            [{
                "src": "media/img/note1.png",
                "width": 9, "height": 19, "alt": "whole"
            }, "1"],
            [{
                "src": "media/img/note0.5.png",
                "width": 9, "height": 19, "alt": "half"
            }, "2"],
            [{
                "src": "media/img/note0.25.png",
                "width": 9, "height": 19, "alt": "quarter"
            }, "4"],
            [{
                "src": "media/img/note0.125.png",
                "width": 9, "height": 19, "alt": "eighth"
            }, "8"],
            [{
                "src": "media/img/note0.0625.png",
                "width": 9, "height": 19, "alt": "sixteenth"
            }, "16"]
        ];
        var instrument = [
            ["Piano", "piano"],
            ["Drum", "drum"],
            ["Guitar", "guitar"],
            ["Banjo", "banjo"],
        ]

        this.appendDummyInput("duration")
            .appendField("Tone")
            .appendField(new Blockly.FieldDropdown(duration), "DURATION");
        this.appendDummyInput("pitch")
            .appendField(new CustomFields.FieldPitch('7'), 'PITCH');
        this.appendDummyInput("instrument")
            .appendField(new Blockly.FieldDropdown(instrument), "INSTRUMENT");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ['sound']);
        this.setNextStatement(true, ['sound']);
        this.setColour(130);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['music-rest'] = {
    init: function () {
        var rest = [
            [{
                "src": "media/img/rest1.png",
                "width": 10, "height": 20, "alt": "whole"
            }, "1"],
            [{
                "src": "media/img/rest0.5.png",
                "width": 10, "height": 20, "alt": "half"
            }, "2"],
            [{
                "src": "media/img/rest0.25.png",
                "width": 10, "height": 20, "alt": "quarter"
            }, "4"],
            [{
                "src": "media/img/rest0.125.png",
                "width": 10, "height": 20, "alt": "eighth"
            }, "8"],
            [{
                "src": "media/img/rest0.0625.png",
                "width": 10, "height": 20, "alt": "sixteenth"
            }, "16"]
        ];

        this.appendDummyInput("duration")
            .appendField("Rest")
            .appendField(new Blockly.FieldDropdown(rest), "REST");
        this.setPreviousStatement(true, ["sound"]);
        this.setNextStatement(true, ["sound"]);
        this.setColour(130);
        this.setTooltip("");
        this.setHelpUrl("");
    }
}

Blockly.Blocks['play-block'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabelSerializable("play"), "Play")
        this.appendStatementInput("string")
            .setCheck("sound");
        this.setColour(130);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['tone'] = function (block) {
    var duration = block.getFieldValue('DURATION');
    var pitch = block.getFieldValue('PITCH');
    var note = 'C4';
    var instrument = block.getFieldValue("INSTRUMENT");



    switch (Number(pitch)) {
        case 0:
            note = 'C3';
            break;
        case 1:
            note = 'D3';
            break;
        case 2:
            note = 'E3';
            break;
        case 3:
            note = 'F3';
            break;
        case 4:
            note = 'G3';
            break;
        case 5:
            note = 'A3';
            break;
        case 6:
            note = 'B3';
            break;
        case 7:
            note = 'C4';
            break;
        case 8:
            note = 'D4';
            break;
        case 9:
            note = 'E4';
            break;
        case 10:
            note = 'F4';
            break;
        case 11:
            note = 'G4';
            break;
        case 12:
            note = 'A4';
            break;
    }

    var code = "'" + note + "','" + duration + "','" + instrument + "';";

    return code;
};

var playBlocksCount = 0;// hodil som ho sem z bockly.js


Blockly.JavaScript['play-block'] = function (block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'string');
    statements_name = statements_name.slice(2);

    playBlocksCount++

    code = '';

    var arr = statements_name.split(";").map(function (x) { return x.split(",") });

    var max_dur = 0;
    arr.forEach(a => {
        if (a[1]) {
            max_dur += 1 / eval(a[1]);
        }
        if (max_dur > max) max = max_dur;
    })

    if (statements_name) {
        code += 'noteArr[' + playBlocksCount + '] = "' + statements_name + '".split(";").map(function(x) {return x.split(",")});'
            + 'noteArr[' + playBlocksCount + '].splice(-1,1);'
    }

    return code;
};

Blockly.JavaScript['music-rest'] = function (block) {
    var rest = block.getFieldValue('REST');

    var code = "'rest'" + ",'" + rest + "';";

    return code;
};