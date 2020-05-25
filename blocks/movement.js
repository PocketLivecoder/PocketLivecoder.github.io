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
        this.setColour(40);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};



Blockly.JavaScript['MoveValueInput'] = function moveObject(block) {
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
            }
            if(parent.type == "for"){
                number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1;
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


Blockly.JavaScript['RotateValueInput'] = function rotateObject(block) {
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
            }
            if(parent.type == "for"){
                number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1;
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

Blockly.JavaScript['ScaleValueInput'] = function scaleObject(block) {
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
            }
            if(parent.type == "for"){
                number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1;
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



function recursion(blok, number_x, number_y, number_z, number, type) {

    var block = workspace.getBlockById(blok);

    var nx = 0;
    var counter = 0;
    var x_num =" " + number_x;
    var y_num =" " + number_y;
    var z_num =" " + number_z;
    var actionType = type;
    var contains = false;

    while (block) {
        scene.children.forEach(y => {
            if (y.name.includes(block.id)) {
                nx += 1;
            }
        });


        scene.children.forEach((x) => {
            if (x.name.includes(block.id)) {
                counter += 1;

                if (type == "move") {
                    if (x.name.slice(20) % (nx / number) == 0 && x.name.slice(20) != '' && number != 1) {
                        x_num = x_num + " + " + number_x;
                        z_num = z_num + " + " + number_z;
                        y_num = y_num + " + " + number_y;
                    }
                    arrMove.forEach(k => {
                        if (k[0] == x.name) {
                            k[2] = [x_num  + " ", y_num  + " ", z_num  + " "];
                        }
                    })
                    moveInDirection.forEach(y=>{
                        if(y[0] == x.name){
                            contains = true;
                        }
                    })
                    if(!contains) moveInDirection.push([x.name, [x_num + " ", y_num + " ", z_num + " "]]);
                }
                if (type == "randomMove") {
                    arrMove.forEach(y=>{
                        if(y[0] == x.name){
                            contains = true;
                        }
                    })
                    if(!contains) arrMove.push([x.name, number]);
                }
                if (type == "scale") {

                    if (x.name.slice(20) % (nx / number) == 0 && x.name.slice(20) != '' && number != 1) {
                        x_num = x_num + " + " + number_x;
                        z_num = z_num + " + " + number_z;
                        y_num = y_num + " + " + number_y;
                    }
                    arrScale.forEach(k => {
                        if (k[0] == x.name) {
                            k[2] = [x_num, y_num, z_num];
                        }
                    })
                    scaleInDirection.forEach(y=>{
                        if(y[0] == x.name){
                            contains = true;
                        }
                    })
                    if(!contains) scaleInDirection.push([x.name, [x_num, y_num, z_num]]);

                }
                if (type == "randomScale") {
                    arrScale.forEach(y=>{
                        if(y[0] == x.name){
                            contains = true;
                        }
                    })
                    if(!contains) arrScale.push([x.name, number]);
                }
                if (type == "randomRotate") {
                    arrRotate.forEach(y=>{
                        if(y[0] == x.name){
                            contains = true;
                        }
                    })
                    if(!contains) arrRotate.push([x.name, number]);
                }
                if (type == "rotate") {
                    if (x.name.slice(20) % (nx / number) == 0 && x.name.slice(20) != '' && number != 1) {
                        x_num = x_num + " + " + number_x;
                        z_num = z_num + " + " + number_z;
                        y_num = y_num + " + " + number_y;
                    }
                    // arrRotate.forEach(y=>{
                    //     if(y[0] == x.name){
                    //         containsRandom = true;
                    //     }
                    // })
                    arrRotate.forEach(f => {
                        if (f[0] == x.name) {
                            f[2] = [x_num, y_num, z_num]
                        }
                    })
                    rotateInDirection.forEach(y=>{
                        if(y[0] == x.name){
                            contains = true;
                        }
                    })
                    if(!contains) rotateInDirection.push([x.name, [x_num, y_num, z_num]]);
                }
            }
        })

        if (block.type == "repeat" || block.type == "for") {
            block.childBlocks_.forEach(x => {
                if (x.parentBlock_.type == "repeat" || block.type == "for") {
                    recursion(x.id, number_x, number_y, number_z, number, actionType);
                }
            })
        }

        if (block.nextConnection.targetConnection) {
            block = block.nextConnection.targetConnection.sourceBlock_;
            x_num = number_x;
            y_num = number_y;
            z_num = number_z;
            nx = 0;
        } else {
            break;
        }
    }

}

function recursiveScale(ID, num_x, num_y, num_z) {
    var contains = false;
    scaleInDirection = [];
    scene.children.forEach((x) => {
        if (x.name.includes(ID)) {

            arrScale.forEach(k => {
                if (k[0] == x.name) {
                    k[2] = [num_x, num_y, num_z];
                }
            })

            scaleInDirection.forEach(y=>{
                if(y[0] == x.name){
                    contains = true;
                }
            })
            if(!contains) scaleInDirection.push([x.name, [x_num, y_num, z_num]]);
        }
    })
}

function recursiveMove(ID, num_x, num_y, num_z) {
    var contains = false;
    scene.children.forEach((x) => {
        if (x.name.includes(ID)) {

            arrMove.forEach(k => {
                if (k[0] == x.name) {
                    k[2] = [num_x, num_y, num_z];
                }
            })
            moveInDirection.forEach(y=>{
                if(y[0] == x.name){
                    contains = true;
                }
            })
            if(!contains) moveInDirection.push([x.name, [num_x, num_y, num_z]]);
        }
    })
}

function recursiveRotate(ID, num_x, num_y, num_z) {
    var contains = false;
    rotateInDirection = [];
    scene.children.forEach((x) => {
        if (x.name.includes(ID)) {

            arrRotate.forEach(f => {
                if (f[0] == x.name) {
                    f[2] = [num_x, num_y, num_z];
                }
            })

            rotateInDirection.forEach(y=>{
                if(y[0] == x.name){
                    contains = true;
                }
            })
            if(!contains) rotateInDirection.push([x.name, [x_num, y_num, z_num]]);

        }
    })
}
