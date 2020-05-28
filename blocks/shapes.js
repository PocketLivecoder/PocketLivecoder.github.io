/**
 * @license
 * Copyright (c) 2020 PocketLivecoder
 * MIT License
 */

/**
 * @fileoverview Blocks for creating objects.
 * @author Marek Lukac
 */

var movecode = '';
Blockly.Blocks['box'] = {
    init: function () {
        this.appendStatementInput("Box")
            .setCheck("movement")
            .appendField("Box")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["shape", "repeat"]);
        this.setNextStatement(true, ["shape", "repeat"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//Cone block
Blockly.Blocks['cone'] = {
    init: function () {
        this.appendStatementInput("Cone")
            .setCheck("movement")
            .appendField("Cone")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["shape", "repeat"]);
        this.setNextStatement(true, ["shape", "repeat"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//circle block
Blockly.Blocks['circle'] = {
    init: function () {
        this.appendStatementInput("Circle")
            .setCheck("movement")
            .appendField("Circle")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["shape", "repeat"]);
        this.setNextStatement(true, ["shape", "repeat"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//ball block
Blockly.Blocks['ball'] = {
    init: function () {
        this.appendStatementInput("Ball")
            .setCheck("movement")
            .appendField("Ball")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["shape", "repeat"]);
        this.setNextStatement(true, ["shape", "repeat"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['square'] = {
    init: function () {
        this.appendStatementInput("Square")
            .setCheck("movement")
            .appendField("Square")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["shape", "repeat"]);
        this.setNextStatement(true, ["shape", "repeat"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['ring'] = {
    init: function () {
        this.appendStatementInput("Ring")
            .setCheck("movement")
            .appendField("Ring")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["shape", "repeat"]);
        this.setNextStatement(true, ["shape", "repeat"]);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};



//The generator function takes a reference to the block for processing. It renders the inputs (the VALUE input, above) into code strings, and then concatenates those into a larger expression.
Blockly.JavaScript['box'] = function createBox(block) {

    var boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
    var material = new THREE.MeshNormalMaterial();
    var colour_name = block.getFieldValue('COLOUR');
    var statements_box = Blockly.JavaScript.statementToCode(block, 'Box');
    var name = this.id;
    var repeat_number = 1;

    repeat_number = getRepeatNumber(this);

    if (!scene.getObjectByName(name)) {
        var cube = new THREE.Mesh(boxGeometry, material);
        cube.name = name;
        scene.add(cube);
    }

    for (i = 1; i < repeat_number; i++) {
        if (!scene.getObjectByName(name + i)){
            var cube = new THREE.Mesh(boxGeometry, material);
            cube.name = name + i;
            scene.add(cube);
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

    material.dispose();
    boxGeometry.dispose();

    return movecode;
};

Blockly.JavaScript['ring'] = function createRing(block) {

    var ringGeometry = new THREE.RingBufferGeometry(0.5, 1, 32);
    var material = new THREE.MeshNormalMaterial();
    var colour_name = block.getFieldValue('COLOUR');
    var statements_box = Blockly.JavaScript.statementToCode(block, 'Ring');
    var name = this.id;
    var repeat_number = 1;


    repeat_number = getRepeatNumber(this);

    if (scene.getObjectByName(name)) {
    }
    else {
        var ring = new THREE.Mesh(ringGeometry, material);
        ring.name = name;
        scene.add(ring);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) {
        }
        else {
            var ring = new THREE.Mesh(ringGeometry, material);
            ring.name = name + i;
            scene.add(ring);
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

Blockly.JavaScript['square'] = function createSquare(block) {

    var planeGeometry = new THREE.PlaneBufferGeometry(1, 1, 32);
    var material = new THREE.MeshNormalMaterial();
    var colour_name = block.getFieldValue('COLOUR');
    var statements_box = Blockly.JavaScript.statementToCode(block, 'Square');
    var name = this.id;
    var repeat_number = 1;


    repeat_number = getRepeatNumber(this);

    if (scene.getObjectByName(name)) {
    }
    else {

        var plane = new THREE.Mesh(planeGeometry, material);
        plane.name = name;
        scene.add(plane);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) {
        }
        else {
            var plane = new THREE.Mesh(planeGeometry, material);
            plane.name = name + i;
            scene.add(plane);
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

Blockly.JavaScript['ball'] = function createBall(block) {

    var dodecahedronGometry = new THREE.DodecahedronBufferGeometry(1, 2);
    var material = new THREE.MeshNormalMaterial();
    var colour_name = block.getFieldValue('COLOUR');
    var statements_box = Blockly.JavaScript.statementToCode(block, 'Ball');
    var name = this.id;
    var repeat_number = 1;


    repeat_number = getRepeatNumber(this);

    if (scene.getObjectByName(name)) { }
    else {
        var ball = new THREE.Mesh(dodecahedronGometry, material);
        ball.name = name;
        scene.add(ball);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) { }
        else {
            var ball = new THREE.Mesh(dodecahedronGometry, material);
            ball.name = name + i;
            scene.add(ball);
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


Blockly.JavaScript['cone'] = function createCone(block) {

    var coneGeometry = new THREE.ConeGeometry(1, 2);
    var material = new THREE.MeshNormalMaterial();
    var colour_name = block.getFieldValue('COLOUR');
    var statements_box = Blockly.JavaScript.statementToCode(block, 'Cone');
    var name = this.id;
    var repeat_number = 1;


    repeat_number = getRepeatNumber(this);


    if (scene.getObjectByName(name)) { }
    else {
        var cone = new THREE.Mesh(coneGeometry, material);
        cone.name = name;
        scene.add(cone);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) { }
        else {
            var cone = new THREE.Mesh(coneGeometry, material);
            cone.name = name + i;
            scene.add(cone);
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

Blockly.JavaScript['circle'] = function createCircle(block) {

    var circleGeometry = new THREE.CircleBufferGeometry(1, 30);
    var material = new THREE.MeshNormalMaterial();
    var colour_name = block.getFieldValue('COLOUR');
    var statements_box = Blockly.JavaScript.statementToCode(block, 'Circle');
    var name = this.id;
    var repeat_number = 1;

    repeat_number = getRepeatNumber(this);

    if (scene.getObjectByName(name)) { }
    else {
        var circle = new THREE.Mesh(circleGeometry, material);
        circle.name = name;
        scene.add(circle);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) { }
        else {
            var circle = new THREE.Mesh(circleGeometry, material);
            circle.name = name + i;
            scene.add(circle);
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




function getRepeatNumber(block) {

    var repeatNumber = 1;
    var originalBlock = block;

    if (block = originalBlock.getSurroundParent()) {
        while (block) {
            if (block.type == "repeat") {
                repeatNumber *= block.inputList[0].fieldRow[1].value_;
            }
            if (block.type == "for") {
                repeatNumber *= Math.abs(block.inputList[0].fieldRow[3].value_ - block.inputList[0].fieldRow[5].value_) + 1;
                forArr.push(
                    [block.inputList[0].fieldRow[1].variable_.name, //variable name
                    Math.min(block.inputList[0].fieldRow[3].value_, block.inputList[0].fieldRow[5].value_),//variable start
                    Math.max(block.inputList[0].fieldRow[3].value_, block.inputList[0].fieldRow[5].value_),//variable end
                    originalBlock.id//object id
                    ])
            }

            if (block.getSurroundParent()) {
                block = block.getSurroundParent();
            } else {
                break;
            }

        }

        block = originalBlock.getSurroundParent();

        while (block.type == "repeat" || block.type == "for") {

            for (var i = scene.children.length - 1; i >= 0; i--) {

                if (scene.children[i].name.includes(originalBlock.id) && parseInt(scene.children[i].name.slice(20)) > repeatNumber - 1 && scene.children[i].name.slice(20) != NaN) {
                    scene.remove(scene.getObjectByName(scene.children[i].name))
                }
            }
            if (block.getSurroundParent()) {
                block = block.getSurroundParent();
            } else {
                break;
            }

        }

    } else {
        for (var i = scene.children.length - 1; i >= 0; i--) {
            if (scene.children[i].name.includes(originalBlock.id) && scene.children[i].name.length > 20) {
                scene.remove(scene.getObjectByName(scene.children[i].name));
            }
        }
    }

    return repeatNumber;
}