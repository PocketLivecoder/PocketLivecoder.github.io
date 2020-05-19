
var movecode = '';

Blockly.Blocks['box'] = {
    init: function () {
        this.appendStatementInput("Box")
            .setCheck(true)
            .appendField("Box")
            // .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true,["box","RotateValueInput"]);
        this.setNextStatement(true,"box");
        // this.setPreviousStatement(true, ["cone","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
        // this.setNextStatement(true, ["cone","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//Cone block
Blockly.Blocks['cone'] = {
    init: function () {
        this.appendStatementInput("Cone")
            .setCheck(true)
            .appendField("Cone")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["cone","box"]);
        this.setNextStatement(true,["cone","box"]);
        // this.setNextStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//circle block
Blockly.Blocks['circle'] = {
    init: function () {
        this.appendStatementInput("Circle")
            .setCheck(true)
            .appendField("Circle")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["cone","box"]);
        this.setNextStatement(true,["cone","box"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//ball block
Blockly.Blocks['ball'] = {
    init: function () {
        this.appendStatementInput("Ball")
            .setCheck(true)
            .appendField("Ball")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true,"box");
        this.setNextStatement(true, "box");
        // this.setPreviousStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
        // this.setNextStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['square'] = {
    init: function () {
        this.appendStatementInput("Square")
            .setCheck(true)
            .appendField("Square")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, "box");
        this.setNextStatement(true, "box");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ring'] = {
    init: function () {
        this.appendStatementInput("Ring")
            .setCheck(true)
            .appendField("Ring")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, "box");
        this.setNextStatement(true, "box");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};



Blockly.Blocks['randomRotate'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Rotate");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(40);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['rotate'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Rotate")
            .appendField(new Blockly.FieldTextInput("0"), "X")
            .appendField(new Blockly.FieldTextInput("0"), "Y")
            .appendField(new Blockly.FieldTextInput("0"), "Z");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['move'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move")
            .appendField(new Blockly.FieldTextInput("0"), "X")
            .appendField(new Blockly.FieldTextInput("0"), "Y")
            .appendField(new Blockly.FieldTextInput("0"), "Z");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['randomMove'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Move")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['randomScale'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Scale")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['scale'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Scale")
            .appendField(new Blockly.FieldNumber(1, 0.1, 5, 0.1), "X")
            .appendField(new Blockly.FieldNumber(1, 0.1, 5, 0.1), "Y")
            .appendField(new Blockly.FieldNumber(1, 0.1, 5, 0.1), "Z");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['repeat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabelSerializable("repeat"), "repeat")
            .appendField(new Blockly.FieldNumber(1, 1, 100, 1), "number")
            .appendField(new Blockly.FieldLabelSerializable("times"), "times");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(280);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


Blockly.JavaScript['repeat'] = function (block) {
    var number = block.getFieldValue('number');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

    code = '';
    // console.log(statements_name);
    if(statements_name[0] == ''){
    statements_name = statements_name.slice(2);
    // code = '';

    for(i=0;i<number;i++){
        code += statements_name;
    }
}

    eval(movecode);
    // var code = movecode;
    // var code = '';

    // return movecode;
    return code;
};

//The generator function takes a reference to the block for processing. It renders the inputs (the VALUE input, above) into code strings, and then concatenates those into a larger expression.
Blockly.JavaScript['box'] = function (block) {

    var colour_name = block.getFieldValue('COLOUR');

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Box');

    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';
    var obj;


    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat" || parent.type == "for") {
            if(parent.type == "repeat"){
                repeat_number *= parent.inputList[0].fieldRow[1].value_;
                // repeat_name += parent.id;
            }
            if(parent.type == "for"){
                repeat_number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1;

                // console.log(Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1);
            }

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

        parent = this.getSurroundParent();

        while (parent.type == "repeat" || parent.type == "for") {

            for (var i = scene.children.length - 1; i >= 0; i--) {

                if (scene.children[i].name.includes(name) && parseInt(scene.children[i].name.slice(20)) > repeat_number - 1 && scene.children[i].name.slice(20) != NaN) {
                    scene.remove(scene.getObjectByName(scene.children[i].name))
                }
            }
            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

    } else {
        for (var i = scene.children.length - 1; i >= 0; i--) {
            if (scene.children[i].name.includes(name) && scene.children[i].name.length > 20) {
                scene.remove(scene.getObjectByName(scene.children[i].name))
            }
        }
    }

    if (scene.getObjectByName(name)) {
    }
    else {
        var geometry = new THREE.BoxGeometry(1, 1, 1);
        var material = new THREE.MeshNormalMaterial();
        var cube = new THREE.Mesh(geometry, material);
        cube.name = name;
        scene.add(cube);
        cube.rotation.set(0, 0, 0);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) {
        }
        else {
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshNormalMaterial();
            var cube = new THREE.Mesh(geometry, material);
            cube.name = name + i;
            scene.add(cube);
            cube.rotation.set(0, 0, 0);
        }
    }

    scene.children.forEach(x => {
        if (x.name.includes(name)) {
            if (colour_name == '#ffffff') {
                scene.getObjectByName(x.name).material = new THREE.MeshNormalMaterial();
            } else {
                scene.getObjectByName(x.name).material = new THREE.MeshStandardMaterial({ color: colour_name });
            }
        }
    })

    return movecode;
};

Blockly.JavaScript['ring'] = function (block) {

    var colour_name = block.getFieldValue('COLOUR');

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Ring');

    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';
    var obj;


    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat") {
            repeat_number *= parent.inputList[0].fieldRow[1].value_;
            repeat_name += parent.id;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

        parent = this.getSurroundParent();

        while (parent.type == "repeat") {

            for (var i = scene.children.length - 1; i >= 0; i--) {

                if (scene.children[i].name.includes(name) && parseInt(scene.children[i].name.slice(20)) > repeat_number - 1 && scene.children[i].name.slice(20) != NaN) {
                    scene.remove(scene.getObjectByName(scene.children[i].name))
                }
            }
            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

    } else {
        for (var i = scene.children.length - 1; i >= 0; i--) {
            if (scene.children[i].name.includes(name) && scene.children[i].name.length > 20) {
                scene.remove(scene.getObjectByName(scene.children[i].name))
            }
        }
    }

    if (scene.getObjectByName(name)) {
    }
    else {
        var geometry = new THREE.RingBufferGeometry(0.5, 1, 32);
        var material = new THREE.MeshNormalMaterial();
        var ring = new THREE.Mesh(geometry, material);
        ring.name = name;
        scene.add(ring);
        // cube.rotation.set(0, 0, 0);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) {
        }
        else {
            var geometry = new THREE.RingBufferGeometry(0.5, 1, 32);
            var material = new THREE.MeshNormalMaterial();
            var ring = new THREE.Mesh(geometry, material);
            ring.name = name + i;
            scene.add(ring);
            // cube.rotation.set(0, 0, 0);
        }
    }

    scene.children.forEach(x => {
        if (x.name.includes(name)) {
            if (colour_name == '#ffffff') {
                scene.getObjectByName(x.name).material = new THREE.MeshNormalMaterial();
            } else {
                scene.getObjectByName(x.name).material = new THREE.MeshStandardMaterial({ color: colour_name });
            }
        }
    })

    return movecode;
};

Blockly.JavaScript['square'] = function (block) {

    var colour_name = block.getFieldValue('COLOUR');

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Square');

    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';
    var obj;


    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat") {
            repeat_number *= parent.inputList[0].fieldRow[1].value_;
            repeat_name += parent.id;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

        parent = this.getSurroundParent();

        while (parent.type == "repeat") {

            for (var i = scene.children.length - 1; i >= 0; i--) {

                if (scene.children[i].name.includes(name) && parseInt(scene.children[i].name.slice(20)) > repeat_number - 1 && scene.children[i].name.slice(20) != NaN) {
                    scene.remove(scene.getObjectByName(scene.children[i].name))
                }
            }
            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

    } else {
        for (var i = scene.children.length - 1; i >= 0; i--) {
            if (scene.children[i].name.includes(name) && scene.children[i].name.length > 20) {
                scene.remove(scene.getObjectByName(scene.children[i].name))
            }
        }
    }

    if (scene.getObjectByName(name)) {
    }
    else {

        var geometry = new THREE.PlaneBufferGeometry(1, 1, 32);
        var material = new THREE.MeshNormalMaterial();
        var plane = new THREE.Mesh(geometry, material);
        plane.name = name;
        scene.add(plane);
        // plane.rotate.set(0,0,0);

    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) {
        }
        else {
            var geometry = new THREE.PlaneBufferGeometry(1, 1, 32);
            var material = new THREE.MeshNormalMaterial();
            var plane = new THREE.Mesh(geometry, material);
            plane.name = name + i;
            scene.add(plane);
            // plane.rotate.set(0,0,0);
        }
    }

    scene.children.forEach(x => {
        if (x.name.includes(name)) {
            if (colour_name == '#ffffff') {
                scene.getObjectByName(x.name).material = new THREE.MeshNormalMaterial();
            } else {
                scene.getObjectByName(x.name).material = new THREE.MeshStandardMaterial({ color: colour_name });
            }
        }
    })

    return movecode;
};

Blockly.JavaScript['ball'] = function (block) {

    var colour_name = block.getFieldValue('COLOUR');

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Ball');

    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';

    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat") {
            repeat_number *= parent.inputList[0].fieldRow[1].value_;
            repeat_name += parent.id;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

        parent = this.getSurroundParent();

        while (parent.type == "repeat") {

            for (var i = scene.children.length - 1; i >= 0; i--) {
                if (scene.children[i].name.includes(name) && parseInt(scene.children[i].name.slice(20)) > repeat_number - 1 && scene.children[i].name.slice(20) != NaN) {
                    scene.remove(scene.getObjectByName(scene.children[i].name))
                }
            }
            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

    } else {
        for (var i = scene.children.length - 1; i >= 0; i--) {
            if (scene.children[i].name.includes(name) && scene.children[i].name.length > 20) {
                scene.remove(scene.getObjectByName(scene.children[i].name))
            }
        }
    }

    if (scene.getObjectByName(name)) { }
    else {
        var geometry = new THREE.DodecahedronBufferGeometry(1, 2);
        var material = new THREE.MeshNormalMaterial();
        var ball = new THREE.Mesh(geometry, material);
        ball.name = name;
        scene.add(ball);
        ball.rotation.set(0, 0, 0);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) { }
        else {
            var geometry = new THREE.DodecahedronBufferGeometry(1, 2);
            var material = new THREE.MeshNormalMaterial();
            var ball = new THREE.Mesh(geometry, material);
            ball.name = name + i;
            scene.add(ball);
            ball.rotation.set(0, 0, 0);
        }
    }

    scene.children.forEach(x => {
        if (x.name.includes(name)) {
            if (colour_name == '#ffffff') {
                scene.getObjectByName(x.name).material = new THREE.MeshNormalMaterial();
            } else {
                scene.getObjectByName(x.name).material = new THREE.MeshStandardMaterial({ color: colour_name });
            }
        }
    })

    return movecode;

};

Blockly.JavaScript['randomRotate'] = function (block) {

    var number;
    var code = '';
    var blok;

    if (this.getSurroundParent()) {
        var parent = this.getSurroundParent();

        while (parent.type == "repeat") {
            number *= parent.inputList[0].fieldRow[1].value_;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            }
            else {
                break;
            }
        }
    }


    //rotuj objekt ktoreho blok ta obklopuje
    if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {

        movecode += "scene.children.forEach((x) => {if(x.name.includes('" + this.getSurroundParent().id + "')){movecode +=arrRotate.push([x.name, " + number + "]); }});"

        // if (!arrRotate.includes(this.getSurroundParent().id))
        //     arrRotate.push([this.getSurroundParent().id, number]);
    }
    if (this.getChildren()[0]) {

        movecode += "recursion('" + this.id + "',null,null,null," + number + ",'randomRotate');";
    }

    return code;
};

Blockly.JavaScript['cone'] = function (block) {

    var colour_name = block.getFieldValue('COLOUR');

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Cone');


    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';

    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat") {
            repeat_number *= parent.inputList[0].fieldRow[1].value_;
            repeat_name += parent.id;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

        parent = this.getSurroundParent();

        while (parent.type == "repeat") {

            for (var i = scene.children.length - 1; i >= 0; i--) {

                if (scene.children[i].name.includes(name) && parseInt(scene.children[i].name.slice(20)) > repeat_number - 1 && scene.children[i].name.slice(20) != NaN) {
                    scene.remove(scene.getObjectByName(scene.children[i].name))
                }
            }
            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

    } else {
        for (var i = scene.children.length - 1; i >= 0; i--) {
            if (scene.children[i].name.includes(name) && scene.children[i].name.length > 20) {
                scene.remove(scene.getObjectByName(scene.children[i].name))
            }
        }
    }

    if (scene.getObjectByName(name)) { }
    else {
        var geometry = new THREE.ConeGeometry(1, 2);
        var material = new THREE.MeshNormalMaterial();
        var cone = new THREE.Mesh(geometry, material);
        cone.name = name;
        scene.add(cone);
        cone.rotation.set(0, 0, 0);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) { }
        else {
            var geometry = new THREE.ConeGeometry(1, 2);
            var material = new THREE.MeshNormalMaterial();
            var cone = new THREE.Mesh(geometry, material);
            cone.name = name + i;
            scene.add(cone);
            cone.rotation.set(0, 0, 0);
        }
    }

    scene.children.forEach(x => {
        if (x.name.includes(name)) {
            if (colour_name == '#ffffff') {
                scene.getObjectByName(x.name).material = new THREE.MeshNormalMaterial();
            } else {
                scene.getObjectByName(x.name).material = new THREE.MeshStandardMaterial({ color: colour_name });
            }
        }
    })

    return movecode;

};

Blockly.JavaScript['circle'] = function (block) {

    var colour_name = block.getFieldValue('COLOUR');

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Circle');

    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';

    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat") {
            repeat_number *= parent.inputList[0].fieldRow[1].value_;
            repeat_name += parent.id;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

        parent = this.getSurroundParent();

        while (parent.type == "repeat") {

            for (var i = scene.children.length - 1; i >= 0; i--) {

                if (scene.children[i].name.includes(name) && parseInt(scene.children[i].name.slice(20)) > repeat_number - 1 && scene.children[i].name.slice(20) != NaN) {
                    scene.remove(scene.getObjectByName(scene.children[i].name))
                }
            }
            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            } else {
                break;
            }

        }

    } else {
        for (var i = scene.children.length - 1; i >= 0; i--) {
            if (scene.children[i].name.includes(name) && scene.children[i].name.length > 20) {
                scene.remove(scene.getObjectByName(scene.children[i].name))
            }
        }
    }

    if (scene.getObjectByName(name)) { }
    else {
        var geometry = new THREE.CircleGeometry(1, 30);
        var material = new THREE.MeshNormalMaterial();
        var circle = new THREE.Mesh(geometry, material);
        circle.name = name;
        scene.add(circle);
        circle.rotation.set(0, 0, 0);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) { }
        else {
            var geometry = new THREE.CircleBufferGeometry(1, 30);
            var material = new THREE.MeshNormalMaterial();
            var circle = new THREE.Mesh(geometry, material);
            circle.name = name + i;
            scene.add(circle);
            circle.rotation.set(0, 0, 0);
        }
    }

    scene.children.forEach(x => {
        if (x.name.includes(name)) {
            if (colour_name == '#ffffff') {
                scene.getObjectByName(x.name).material = new THREE.MeshNormalMaterial();
            } else {
                scene.getObjectByName(x.name).material = new THREE.MeshStandardMaterial({ color: colour_name });
            }
        }
    })

    return movecode;
};

// Blockly.JavaScript['move'] = function (block) {

//     var number_x = block.getFieldValue('X');
//     var number_y = block.getFieldValue('Y');
//     var number_z = block.getFieldValue('Z');
//     var xx = number_x;
//     var yy = number_y;
//     var zz = number_z;
//     var nx = 0;

//     var number = 1;
//     var code = '';
//     var type = "move";

//     if (this.getSurroundParent()) {
//         var parent = this.getSurroundParent();
//         while (parent.type == "repeat") {
//             number *= parent.inputList[0].fieldRow[1].value_;

//             if (parent.getSurroundParent()) {
//                 parent = parent.getSurroundParent();
//             }
//             else {
//                 break;
//             }
//         }
//     }

//     var blok;

//     scene.children.forEach(y => {
//         if (y.name.includes(block.id)) {
//             nx += 1;
//         }
//     });

//     if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" || this.getSurroundParent().type != "for")) {

//         movecode += "recursiveMove('" + this.getSurroundParent().id + "','" + number_x + "','" + number_y + "','" + number_z + "');";

//     }
//     if (this.getChildren()[0]) {

//         movecode += "recursion('" + this.id + "','" + number_x + "','" + number_y + "','" + number_z + "'," + number + ",'move');";

//     }

//     return code;
// };

// Blockly.JavaScript['rotate'] = function (block) {

//     var number_x = block.getFieldValue('X');
//     var number_y = block.getFieldValue('Y');
//     var number_z = block.getFieldValue('Z');

//     var xx = number_x;
//     var yy = number_y;
//     var zz = number_z;
//     var nx = 0;

//     var number = 1;
//     var code = '';
//     var type = "move";

//     if (this.getSurroundParent()) {
//         var parent = this.getSurroundParent();
//         while (parent.type == "repeat") {
//             number *= parent.inputList[0].fieldRow[1].value_;

//             if (parent.getSurroundParent()) {
//                 parent = parent.getSurroundParent();
//             }
//             else {
//                 break;
//             }
//         }
//     }

//     var blok;

//     scene.children.forEach(y => {
//         if (y.name.includes(block.id)) {
//             nx += 1;
//         }
//     });

//     if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {

//         movecode += "recursiveRotate('" + this.getSurroundParent().id + "','" + number_x + "','" + number_y + "','" + number_z + "');";

//     }
//     if (this.getChildren()[0]) {

//         movecode += "recursion('" + this.id + "','" + number_x + "','" + number_y + "','" + number_z + "'," + number + ",'rotate');";

//     }

//     return code;
// };


function recursion(blok, number_x, number_y, number_z, number, type) {

    var block = workspace.getBlockById(blok);

    var ny = 0;
    var nx = 0;
    var x_num = number_x;
    var y_num = number_y;
    var z_num = number_z;
    var actionType = type


    while (block) {
        scene.children.forEach(y => {
            if (y.name.includes(block.id)) {
                nx += 1;
            }
        });

        scene.children.forEach((x) => {
            if (x.name.includes(block.id)) {
                if (type == "move") {
                    if (x.name.slice(20) % (nx / number) == 0 && x.name.slice(20) != '' && number != 1) {
                        x_num = x_num + "+" + number_x;
                        z_num = z_num + "+" + number_z;
                        y_num = y_num + "+" + number_y;
                    }
                    arrMove.forEach(k => {
                        if (k[0] == x.name) {
                            k[2] = [x_num, y_num, z_num];
                        }
                    })
                    moveInDirection.push([x.name, [x_num, y_num, z_num]]);
                }
                if (type == "randomMove") {
                    arrMove.push([x.name, number]);
                }
                if (type == "scale") {

                    if (x.name.slice(20) % (nx / number) == 0 && x.name.slice(20) != '' && number != 1) {
                        x_num = x_num + "+" + number_x;
                        z_num = z_num + "+" + number_z;
                        y_num = y_num + "+" + number_y;
                    }
                    arrScale.forEach(k => {
                        if (k[0] == x.name) {
                            k[2] = [x_num, y_num, z_num];
                        }
                    })
                    scaleInDirection.push([x.name, [x_num, y_num, z_num]]);
                }
                if (type == "randomScale") {
                    arrScale.push([x.name, number]);
                }
                if (type == "randomRotate") {
                    arrRotate.push([x.name, number]);
                }
                if (type == "rotate") {
                    if (x.name.slice(20) % (nx / number) == 0 && x.name.slice(20) != '' && number != 1) {
                        x_num = x_num + "+" + number_x;
                        z_num = z_num + "+" + number_z;
                        y_num = y_num + "+" + number_y;
                    }
                    arrRotate.forEach(f => {
                        if (f[0] == x.name) {
                            f[2] = [x_num, y_num, z_num]
                        }
                    })
                    rotateInDirection.push([x.name, [x_num, y_num, z_num]]);
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

// Blockly.JavaScript['randomMove'] = function (block) {

//     var number = 1;

//     if (this.getSurroundParent()) {
//         var parent = this.getSurroundParent();

//         while (parent.type == "repeat") {
//             number *= parent.inputList[0].fieldRow[1].value_;

//             if (parent.getSurroundParent()) {
//                 parent = parent.getSurroundParent();
//             }
//             else {
//                 break;
//             }
//         }
//     }



//     if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" || this.getSurroundParent().type != "for")) {


//         movecode += "scene.children.forEach((x) => {\nif(x.name.includes('" + this.getSurroundParent().id + "') ){\narrMove.push([x.name, " + number + "]);\n }\n});"

//     }
//     if (this.getChildren()[0]) {

//         movecode += "recursion('" + this.id + "',0,0,0," + number + ",'randomMove');";

//     }

//     var code = '';
//     return code;
// };

Blockly.JavaScript['scale'] = function (block) {

    var number_x = block.getFieldValue('X');
    var number_y = block.getFieldValue('Y');
    var number_z = block.getFieldValue('Z');

    var number = 1;

    if (this.getSurroundParent()) {
        var parent = this.getSurroundParent();
        while (parent.type == "repeat") {
            number *= parent.inputList[0].fieldRow[1].value_;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            }
            else {
                break;
            }
        }
    }

    if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" || this.getSurroundParent().type != "for")) {
        movecode += "recursiveScale('" + this.getSurroundParent().id + "'," + number_x + "," + number_y + "," + number_z + ");";
    }
    if (this.getChildren()[0]) {

        movecode += "recursion('" + this.id + "'," + number_x + "," + number_y + "," + number_z + "," + number + ",'scale');";

    }

    var code = '';
    return code;
};

function recursiveScale(ID, num_x, num_y, num_z) {
    scene.children.forEach((x) => {
        if (x.name.includes(ID)) {

            arrScale.forEach(k => {
                if (k[0] == x.name) {
                    k[2] = [num_x, num_y, num_z];
                }
            })

            scaleInDirection.push([x.name,[num_x,num_y,num_z]]);
            // scene.getObjectByName(x.name).scale.set(num_x, num_y, num_z);
        }
    })
}

function recursiveMove(ID, num_x, num_y, num_z) {
    scene.children.forEach((x) => {
        if (x.name.includes(ID)) {

            arrMove.forEach(k => {
                if (k[0] == x.name) {
                    k[2] = [num_x, num_y, num_z];
                }
            })

            moveInDirection.push([x.name, [num_x, num_y, num_z]]);
        }
    })
}

function recursiveRotate(ID, num_x, num_y, num_z) {
    scene.children.forEach((x) => {
        if (x.name.includes(ID)) {

            arrRotate.forEach(f => {
                if (f[0] == x.name) {
                    f[2] = [num_x, num_y, num_z];
                }
            })

            rotateInDirection.push([x.name, [num_x, num_y, num_z]]);
        }
    })
}

Blockly.JavaScript['randomScale'] = function (block) {

    var number = 1;

    if (this.getSurroundParent()) {
        var parent = this.getSurroundParent();

        while (parent.type == "repeat") {
            number *= parent.inputList[0].fieldRow[1].value_;

            if (parent.getSurroundParent()) {
                parent = parent.getSurroundParent();
            }
            else {
                break;
            }
        }
    }

    if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" || this.getSurroundParent().type != "for")) {
        movecode += "scene.children.forEach((x) => {if(x.name.includes('" + this.getSurroundParent().id + "')){movecode +=arrScale.push([x.name, " + number + "]); }});"
    }
    if (this.getChildren()[0]) {

        movecode += "recursion('" + this.id + "',0,0,0," + number + ",'randomScale');";

    }

    var code = '';
    return code;
};


//animation
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



// Blockly.Blocks['MoveValueInput'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("Move");
//         this.appendValueInput("x")
//             .setCheck(null);
//         this.appendValueInput("y")
//             .setCheck(null);
//         this.appendValueInput("z")
//             .setCheck(null);
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//         // this.setPreviousStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
//         // this.setNextStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
//         this.setColour(30);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Blocks['RotateValueInput'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField("Rotate");
//         this.appendValueInput("x")
//             .setCheck(null);
//         this.appendValueInput("y")
//             .setCheck(null);
//         this.appendValueInput("z")
//             .setCheck(null);
//         this.setInputsInline(true);
//         this.setNextStatement(true,null);
//         this.setPreviousStatement(true,null);
//         // this.setPreviousStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
//         // this.setNextStatement(true, ["cone","box","square","ring","ball","circle","repeat","moveValueInput","rotateValueInput","scale"]);
//         this.setColour(40);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };



// Blockly.JavaScript['MoveValueInput'] = function (block) {
//     var number_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_NONE);
//     var number_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_NONE);
//     var number_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_NONE);

//     var number = 1;
//     var code = '';

//     if (this.getSurroundParent()) {
//         var parent = this.getSurroundParent();
//         while (parent.type == "repeat" || parent.type == "for") {
//             if(parent.type == "repeat"){
//                 number *= parent.inputList[0].fieldRow[1].value_;
//                 // repeat_name += parent.id;
//             }
//             if(parent.type == "for"){
//                 number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1;
//                 // console.log(Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1);
//             }

//             if (parent.getSurroundParent()) {
//                 parent = parent.getSurroundParent();
//             }
//             else {
//                 break;
//             }
//         }
//     }


//     if (!number_x && !number_y && !number_z) {


//         if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {

//             movecode += "scene.children.forEach((x) => {\nif(x.name.includes('" + this.getSurroundParent().id + "') ){\narrMove.push([x.name, " + number + "]);\n }\n});"

//         }
//         if (this.getChildren()[0]) {

//             movecode += "recursion('" + this.id + "',0,0,0," + number + ",'randomMove');";

//         }

//         return code;

//     } else {

//         if (!number_x) number_x = 0;
//         if (!number_y) number_y = 0;
//         if (!number_z) number_z = 0;

//         if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" && this.getSurroundParent().type != "for")) {

//             movecode += "recursiveMove('" + this.getSurroundParent().id + "','" + number_x + "','" + number_y + "','" + number_z + "');";

//         }
//         if (this.getChildren()[0]) {

//             movecode += "recursion('" + this.id + "','" + number_x + "','" + number_y + "','" + number_z + "'," + number + ",'move');";

//         }
//     }

//     return code;

// };


// Blockly.JavaScript['RotateValueInput'] = function (block) {
//     var number_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_NONE);
//     var number_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_NONE);
//     var number_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_NONE);

//     var number = 1;
//     var code = '';
//     var repeat_number = 1;

//     if (this.getSurroundParent()) {
//         var parent = this.getSurroundParent();
//         while (parent.type == "repeat" || parent.type == "for") {
//             if(parent.type == "repeat"){
//                 number *= parent.inputList[0].fieldRow[1].value_;
//                 // repeat_name += parent.id;
//             }
//             if(parent.type == "for"){
//                 number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1;
//                 // console.log(Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_)+1);
//             }

//             if (parent.getSurroundParent()) {
//                 parent = parent.getSurroundParent();
//             }
//             else {
//                 break;
//             }
//         }
//     }


//     if (!number_x && !number_y && !number_z) {


//         if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" && this.getSurroundParent().type != "for")) {
//             console.log("suround")

//             movecode += "scene.children.forEach((x) => {if(x.name.includes('" + this.getSurroundParent().id + "')){movecode +=arrRotate.push([x.name, " + number + "]); }});"

//             // if (!arrRotate.includes(this.getSurroundParent().id))
//             //     arrRotate.push([this.getSurroundParent().id, number]);
//         }
//         if (this.getChildren()[0]) {
//             console.log("ne suround")


//             movecode += "recursion('" + this.id + "',null,null,null," + number + ",'randomRotate');";
//         }

//         return code;

//     } else {

//         if (!number_x) number_x = 0;
//         if (!number_y) number_y = 0;
//         if (!number_z) number_z = 0;

//         if (this.getSurroundParent() != null && (this.getSurroundParent().type != "repeat" && this.getSurroundParent().type != "for")) {

//             movecode += "recursiveRotate('" + this.getSurroundParent().id + "','" + number_x + "','" + number_y + "','" + number_z + "');";

//         }
//         if (this.getChildren()[0]) {

//             movecode += "recursion('" + this.id + "','" + number_x + "','" + number_y + "','" + number_z + "'," + number + ",'rotate');";

//         }
//     }

//     return code;

// };






//for pokus
Blockly.Blocks['for'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("For")
            .appendField(new Blockly.FieldVariable("i"), "index")
            .appendField("from")
            .appendField(new Blockly.FieldNumber(1, 1, 9, 1), "from")
            .appendField("to")
            .appendField(new Blockly.FieldNumber(1, 1, 9, 1), "to");
        this.appendStatementInput("NAME")
            .setCheck(null)
            .appendField("do");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['for'] = function (block) {
    var variable_index = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('index'), Blockly.Variables.NAME_TYPE);
    var number_from = block.getFieldValue('from');
    var number_to = block.getFieldValue('to');
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');

    console.log(Blockly.JavaScript.variableDB_);

    // Blockly.Events.VarCreate(Blockly.VariableModel(workspace, "i"));
    // Blockly.Variables.createVariable(Blockly.VariableModel(workspace, "x"))

    // TODO: Assemble JavaScript into code variable.
    var code = '';
    return code;
};