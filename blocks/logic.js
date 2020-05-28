/**
 * @license
 * Copyright (c) 2020 PocketLivecoder
 * MIT License
 */

/**
 * @fileoverview Blocks for logical operations.
 * @author Marek Lukac
 */

Blockly.Blocks['repeat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabelSerializable("Repeat"), "repeat")
            .appendField(new Blockly.FieldNumber(1, 1, 500, 1), "number")
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
            .appendField(new Blockly.FieldNumber(1, 1, 500, 1), "from")
            .appendField("to")
            .appendField(new Blockly.FieldNumber(1, 1, 500, 1), "to");
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
            .appendField("Paint over");
        this.setInputsInline(true);
        this.setColour(280);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['backgroundColor'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Background")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setColour(280);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['backgroundColor'] = function paintOverFunction(block) {
    var color = block.getFieldValue('COLOUR');
    code = '';
    scene.background = new THREE.Color(color);
    return code;

}

Blockly.JavaScript['paintOver'] = function paintOverFunction(block) {
    var code = ''
    renderer.autoClearColor = false;
    return code;
}

Blockly.JavaScript['repeat'] = function repeatLoop(block) {
    var number = block.getFieldValue('number');
    var statements = Blockly.JavaScript.statementToCode(block, 'NAME');

    code = '';
    statements = statements.slice(2);

    for (i = 0; i < number; i++) {
        code += statements;
    }
    eval(movecode);
    return code;
};

Blockly.JavaScript['for'] = function forLoop(block) {

    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

    var from = block.getFieldValue("from");
    var to = block.getFieldValue("to");
    var varName = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('index'), Blockly.Variables.NAME_TYPE);
    statements_name = statements_name.slice(2);
    var statement = statements_name;

    code = '';
    var contains = false;

    if (!variable.includes(Blockly.JavaScript.variableDB_.getName(block.getFieldValue('index'), Blockly.Variables.NAME_TYPE))) {
        variable.push(Blockly.JavaScript.variableDB_.getName(block.getFieldValue('index'), Blockly.Variables.NAME_TYPE));

        workspace.getAllVariables().forEach(x => {
            if (x.name == Blockly.JavaScript.variableDB_.getName(block.getFieldValue('index'), Blockly.Variables.NAME_TYPE)) {
                variableArr.forEach(y => {
                    if (y[0] == block.id) contains = true;
                })
                if (!contains) variableArr.push([block.id, x.id_]);
            }
        })

    }

    for (i = Math.min(from, to); i < Math.max(from, to) + 1; i++) {
        statements_name = statement.split(" " + varName + " ").join(i);
        code += statements_name;
    }

    eval(movecode);
    return code;
};
