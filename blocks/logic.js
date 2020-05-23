Blockly.Blocks['repeat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabelSerializable("repeat"), "repeat")
            .appendField(new Blockly.FieldNumber(1, 1, 100, 1), "number")
            .appendField(new Blockly.FieldLabelSerializable("times"), "times");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, ["sound", "repeat"]);
        this.setNextStatement(true, ["repeat", "sound"]);
        this.setColour(280);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['for'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("For")
            .appendField(new Blockly.FieldVariable(Blockly.Variables.generateUniqueName(workspace)), "index") //sem dam premennu a budem ju inkrementovat iba;
            .appendField("from")
            .appendField(new Blockly.FieldNumber(1, 1, 9, 1), "from")
            .appendField("to")
            .appendField(new Blockly.FieldNumber(1, 1, 9, 1), "to");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, ["sound", "repeat"]);
        this.setNextStatement(true, ["sound", "repeat"]);
        this.setColour(280);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['paintOver'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("paint over");
        this.setInputsInline(true);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['paintOver'] = function (block) {
    var code = ''
    renderer.autoClearColor = false;
    return code;
}

Blockly.JavaScript['repeat'] = function (block) {
    var number = block.getFieldValue('number');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

    code = '';
    statements_name = statements_name.slice(2);

    for (i = 0; i < number; i++) {
        code += statements_name;
    }
    eval(movecode);
    return code;
};

Blockly.JavaScript['for'] = function (block) {

    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

    var from = block.getFieldValue("from");
    var to = block.getFieldValue("to");

    code = '';

    if (!variable.includes(Blockly.JavaScript.variableDB_.getName(block.getFieldValue('index'), Blockly.Variables.NAME_TYPE))) {
        variable.push(Blockly.JavaScript.variableDB_.getName(block.getFieldValue('index'), Blockly.Variables.NAME_TYPE));

        workspace.getAllVariables().forEach(x => {
            if (x.name == Blockly.JavaScript.variableDB_.getName(block.getFieldValue('index'), Blockly.Variables.NAME_TYPE)) {
                variableArr.push([this.id, x.id_]);
            }
        })

    }

    var number = Math.abs(from - to);

    statements_name = statements_name.slice(2);

    for (i = 0; i < number + 1; i++) {
        code += statements_name;
    }

    eval(movecode);
    return code;
};
