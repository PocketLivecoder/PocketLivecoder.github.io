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
            .appendField(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["*", "*"], ["/", "/"]]), "Opts");
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

Blockly.JavaScript['Operation'] = function (block) {
    var value_left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_NONE);
    var dropdown_opt = block.getFieldValue('Opts');
    var value_right = Blockly.JavaScript.valueToCode(block, 'right', Blockly.JavaScript.ORDER_NONE);
    var operation = '';
    if(value_left && value_right){
        operation = " "+value_left +" "+ dropdown_opt +" "+ value_right +" ";
    }
    return [operation, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['NumberInput'] = function (block) {
    var number_number = block.getFieldValue('number');
    var code = '';
    return [number_number, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['SinCos'] = function (block) {
    var dropdown_opt = block.getFieldValue('Opt');
    var value_name = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
    var code = '';
    return [dropdown_opt + "( " + value_name + " )", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['Random'] = function (block) {
    var dropdown_opt = block.getFieldValue('Opt');
    var code = '';
    return [dropdown_opt , Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['TimeOrFrame'] = function (block) {
    var dropdown_opt = block.getFieldValue('Options');
    var code = '';
    return [dropdown_opt, Blockly.JavaScript.ORDER_NONE];
};