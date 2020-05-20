Blockly.Blocks['MoveValueInput'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move");
        this.appendValueInput("x")
            .setCheck(null);
        this.appendValueInput("y")
            .setCheck(null);
        this.appendValueInput("z")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["movement","shape","repeat"]);
        this.setNextStatement(true, ["movement","shape","repeat"]);
        // this.setPreviousStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
        // this.setNextStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ScaleValueInput'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Scale");
        this.appendValueInput("x")
            .setCheck(null);
        this.appendValueInput("y")
            .setCheck(null);
        this.appendValueInput("z")
            .setCheck(null);
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["movement","shape","repeat"]);
        this.setNextStatement(true, ["movement","shape","repeat"]);
        // this.setPreviousStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
        // this.setNextStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");

    }
};

Blockly.Blocks['RotateValueInput'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Rotate");
        this.appendValueInput("x")
            .setCheck(null);
        this.appendValueInput("y")
            .setCheck(null);
        this.appendValueInput("z")
            .setCheck(null);
        this.setInputsInline(true);
        this.setNextStatement(true, ["movement","shape","repeat"]);
        this.setPreviousStatement(true, ["movement","shape","repeat"]);
        // this.setPreviousStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
        // this.setNextStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
        this.setColour(40);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};



Blockly.JavaScript['MoveValueInput'] = function (block) {
    var number_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_NONE);
    var number_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_NONE);
    var number_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_NONE);

    var number = 1;
    var code = '';

    if (this.getSurroundParent()) {
        var parent = this.getSurroundParent();
        while (parent.type == "repeat" || parent.type == "for") {
            if(parent.type == "repeat"){
                number *= parent.inputList[0].fieldRow[1].value_;
                // repeat_name += parent.id;
            }
            if(parent.type == "for"){
                number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1;
                // console.log(Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1);
            }

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            }
            else {
                break;
            }
        }
    }


    if (!number_x && !number_y && !number_z) {


        if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {

            movecode += "scene.children.forEach((x) => {\nif(x.name.includes('" + this.getSurroundParent().id + "') ){\narrMove.push([x.name, " + number + "]);\n }\n});"

        }
        if (this.getChildren()[0]) {

            movecode += "recursion('" + this.id + "',0,0,0," + number + ",'randomMove');";

        }

        return code;

    } else {

        if (!number_x) number_x = 0;
        if (!number_y) number_y = 0;
        if (!number_z) number_z = 0;

        if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" && this.getSurroundParent().type != "for")) {

            movecode += "recursiveMove('" + this.getSurroundParent().id + "','" + number_x + "','" + number_y + "','" + number_z + "');";

        }
        if (this.getChildren()[0]) {

            movecode += "recursion('" + this.id + "','" + number_x + "','" + number_y + "','" + number_z + "'," + number + ",'move');";

        }
    }

    return code;

};


Blockly.JavaScript['RotateValueInput'] = function (block) {
    var number_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_NONE);
    var number_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_NONE);
    var number_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_NONE);

    var number = 1;
    var code = '';
    var repeat_number = 1;

    if (this.getSurroundParent()) {
        var parent = this.getSurroundParent();
        while (parent.type == "repeat" || parent.type == "for") {
            if(parent.type == "repeat"){
                number *= parent.inputList[0].fieldRow[1].value_;
                // repeat_name += parent.id;
            }
            if(parent.type == "for"){
                number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1;
                // console.log(Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1);
            }

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            }
            else {
                break;
            }
        }
    }


    if (!number_x && !number_y && !number_z) {


        if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" && this.getSurroundParent().type != "for")) {

            movecode += "scene.children.forEach((x) => {if(x.name.includes('" + this.getSurroundParent().id + "')){movecode +=arrRotate.push([x.name, " + number + "]); }});"

            // if (!arrRotate.includes(this.getSurroundParent().id))
            //     arrRotate.push([this.getSurroundParent().id, number]);
        }
        if (this.getChildren()[0]) {


            movecode += "recursion('" + this.id + "',null,null,null," + number + ",'randomRotate');";
        }

        return code;

    } else {

        if (!number_x) number_x = 0;
        if (!number_y) number_y = 0;
        if (!number_z) number_z = 0;

        if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" && this.getSurroundParent().type != "for")) {

            movecode += "recursiveRotate('" + this.getSurroundParent().id + "','" + number_x + "','" + number_y + "','" + number_z + "');";

        }
        if (this.getChildren()[0]) {

            movecode += "recursion('" + this.id + "','" + number_x + "','" + number_y + "','" + number_z + "'," + number + ",'rotate');";

        }
    }

    return code;

};

Blockly.JavaScript['ScaleValueInput'] = function (block) {
    var number_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_NONE);
    var number_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_NONE);
    var number_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_NONE);

    var number = 1;
    var code = '';
    var repeat_number = 1;

    if (this.getSurroundParent()) {
        var parent = this.getSurroundParent();
        while (parent.type == "repeat" || parent.type == "for") {
            if(parent.type == "repeat"){
                number *= parent.inputList[0].fieldRow[1].value_;
                // repeat_name += parent.id;
            }
            if(parent.type == "for"){
                number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1;
                // console.log(Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1);
            }

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            }
            else {
                break;
            }
        }
    }


    if (!number_x && !number_y && !number_z) {


        if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" && this.getSurroundParent().type != "for")) {

            movecode += "scene.children.forEach((x) => {if(x.name.includes('" + this.getSurroundParent().id + "')){movecode +=arrScale.push([x.name, " + number + "]); }});"

            // if (!arrRotate.includes(this.getSurroundParent().id))
            //     arrRotate.push([this.getSurroundParent().id, number]);
        }
        if (this.getChildren()[0]) {


            movecode += "recursion('" + this.id + "',null,null,null," + number + ",'randomScale');";
        }

        return code;

    } else {

        if (!number_x) number_x = 1;
        if (!number_y) number_y = 1;
        if (!number_z) number_z = 1;

        if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" && this.getSurroundParent().type != "for")) {

            movecode += "recursiveScale('" + this.getSurroundParent().id + "','" + number_x + "','" + number_y + "','" + number_z + "');";

        }
        if (this.getChildren()[0]) {

            movecode += "recursion('" + this.id + "','" + number_x + "','" + number_y + "','" + number_z + "'," + number + ",'scale');";

        }
    }

    return code;

};
