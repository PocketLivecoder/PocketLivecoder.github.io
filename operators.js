Blockly.Blocks['SinCos'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["sin", "Math.sin"], ["cos", "Math.cos"], ["tan", "Math.tan"], ["sqrt", "Math.sqrt"]]), "Opt");
        this.appendValueInput("value")
            .setCheck(null)
        this.setInputsInline(true);
        this.setOutput(true, null);
        this.setColour(230);
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
        this.setColour(230);
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
        this.setColour(230);
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
        this.setColour(230);
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
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['Operation'] = function (block) {
    var value_left = Blockly.JavaScript.valueToCode(block, 'left', Blockly.JavaScript.ORDER_NONE);
    var dropdown_opt = block.getFieldValue('Opts');
    var value_right = Blockly.JavaScript.valueToCode(block, 'right', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    // var operation = value_left + dropdown_opt + value_right;
    // console.log(operation);
    var operation = '';
    if(value_left && value_right){
        operation = " "+value_left +" "+ dropdown_opt +" "+ value_right +" ";
    }
    // console.log(operation);
    // TODO: Change ORDER_NONE to the correct strength.
    return [operation, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['NumberInput'] = function (block) {
    var number_number = block.getFieldValue('number');
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    // TODO: Change ORDER_NONE to the correct strength.
    return [number_number, Blockly.JavaScript.ORDER_NONE];
    // return [code, Blockly.JavaScript.ORDER_NONE];
};


Blockly.JavaScript['SinCos'] = function (block) {
    var dropdown_opt = block.getFieldValue('Opt');
    var value_name = Blockly.JavaScript.valueToCode(block, 'value', Blockly.JavaScript.ORDER_NONE);
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    // TODO: Change ORDER_NONE to the correct strength.
    // console.log(value_name);
    return [dropdown_opt + "( " + value_name + " )", Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['Random'] = function (block) {
    var dropdown_opt = block.getFieldValue('Opt');
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    // TODO: Change ORDER_NONE to the correct strength.
    return [dropdown_opt , Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['TimeOrFrame'] = function (block) {
    var dropdown_opt = block.getFieldValue('Options');
    // TODO: Assemble JavaScript into code variable.
    var code = '';
    // TODO: Change ORDER_NONE to the correct strength.
    return [dropdown_opt, Blockly.JavaScript.ORDER_NONE];
};