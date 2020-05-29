/**
 * @license
 * Copyright (c) 2020 PocketLivecoder
 * MIT License
 */

/**
 * @fileoverview Blocks for mathematical operations.
 * @author Marek Lukac
 */

Blockly.Blocks['SinCos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["sin", "Math.sin"], ["cos", "Math.cos"], ["tan", "Math.tan"], ["sqrt", "Math.sqrt"]]), "Opt");
        this.appendValueInput("value")
            .setCheck(null)
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['Random'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["rand", "Math.random()"], ["PI", "Math.PI"] ]), "Opt");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['Operation'] = {
    init: function () {
        this.appendValueInput("left")
            .setCheck(null)
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["*", "*"], ["/", "/"], ["%", "%"]]), "Opts");
        this.appendValueInput("right")
            .setCheck(null)
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['NumberInput'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldNumber(0), "number");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['TimeOrFrame'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["time", "time"], ["frame", "frames"]]), "Options");
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['Operation'] = function operation(block) {
    var leftValue = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_NONE);
    var dropdown = block.getFieldValue('Opts');
    var rightValue = Blockly.JavaScript.valueToCode(block, 'right', Blockly.JavaScript.ORDER_NONE);
    var operation = '';
    if(leftValue && rightValue){
        operation = "( "+leftValue +" "+ dropdown +" "+ rightValue +" )";
    }
    return [operation, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['NumberInput'] = function numberInput(block) {
    var number = block.getFieldValue('number');
    return [number, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['SinCos'] = function sinCos(block) {
    var dropdown = block.getFieldValue('Opt');
    var value = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
    return [dropdown + "( " + value + " )", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['Random'] = function randomNum(block) {
    var dropdown = block.getFieldValue('Opt');
    return [dropdown , Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['TimeOrFrame'] = function timeOrFrame(block) {
    var dropdown = block.getFieldValue('Options');
    return [dropdown, Blockly.JavaScript.ORDER_NONE];
};