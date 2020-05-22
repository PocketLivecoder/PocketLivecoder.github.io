
var movecode = '';

Blockly.Blocks['box'] = {
    init: function () {
        this.appendStatementInput("Box")
            .setCheck("movement")
            .appendField("Box")
            // .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["shape", "repeat"]);
        this.setNextStatement(true, ["shape", "repeat"]);
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
            .setCheck("movement")
            .appendField("Cone")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["shape", "repeat"]);
        this.setNextStatement(true, ["shape", "repeat"]);
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

Blockly.Blocks['repeat'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldLabelSerializable("repeat"), "repeat")
            .appendField(new Blockly.FieldNumber(1, 1, 10, 1), "number")
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

var boxGeometry = new THREE.BoxBufferGeometry(1, 1, 1);
var material = new THREE.MeshNormalMaterial();

//The generator function takes a reference to the block for processing. It renders the inputs (the VALUE input, above) into code strings, and then concatenates those into a larger expression.
Blockly.JavaScript['box'] = function (block) {

    var colour_name = block.getFieldValue('COLOUR');

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Box');

    var name = this.id;
    var repeat_number = 1;
    var cube;

    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat" || parent.type == "for") {
            if (parent.type == "repeat") {
                repeat_number *= parent.inputList[0].fieldRow[1].value_;
            }
            if (parent.type == "for") {
                repeat_number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_) + 1;
                forArr.push(
                    [parent.inputList[0].fieldRow[1].defaultVariableName, //variable name
                    Math.min(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable start
                    Math.max(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable end
                    this.id//object id
                    ])
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
        cube = new THREE.Mesh(boxGeometry, material);
        // cube.renderOrder = 999;
            // cube.onBeforeRender = function (renderer) { renderer.clearDepth(); };
        cube.name = name;
        scene.add(cube);
    }

    for (i = 1; i < repeat_number; i++) {
        if (scene.getObjectByName(name + i)) {
        }
        else {
            cube = new THREE.Mesh(boxGeometry, material);
            // cube.renderOrder = 999;
            // cube.onBeforeRender = function (renderer) { renderer.clearDepth(); };
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

Blockly.JavaScript['ring'] = function (block) {

    var colour_name = block.getFieldValue('COLOUR');

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Ring');

    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';
    var obj;
    var index;


    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat" || parent.type == "for") {
            if (parent.type == "repeat") {
                repeat_number *= parent.inputList[0].fieldRow[1].value_;
            }
            if (parent.type == "for") {
                repeat_number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_) + 1;
                forArr.push(
                    [parent.inputList[0].fieldRow[1].defaultVariableName, //variable name
                    Math.min(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable start
                    Math.max(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable end
                    this.id//object id
                    ])
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
                    meshArr.forEach(x => {
                        // console.log(x[0]);
                        if (x[0] == scene.children[i].name) {
                            x[1].dispose();
                            x[2].dispose();
                            index = meshArr.indexOf(x);
                            if (index !== -1) meshArr.splice(index, 1);
                        }
                    })


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
                scene.remove(scene.getObjectByName(scene.children[i].name));
                meshArr.forEach(x => {
                    if (x[0] == scene.children[i].name) {
                        x[1].dispose();
                        x[2].dispose();
                        index = meshArr.indexOf(x);
                        if (index !== -1) meshArr.splice(index, 1);
                    }
                })

            }
        }
    }

    if (scene.getObjectByName(name)) {
    }
    else {
        var geometry = new THREE.RingBufferGeometry(0.5, 1, 32);
        // console.log(geometry);
        var material = new THREE.MeshNormalMaterial();
        var ring = new THREE.Mesh(geometry, material);
        ring.name = name;
        scene.add(ring);
        meshArr.push([
            name,
            geometry,
            material
        ]);
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
            meshArr.push([
                name + i,
                geometry,
                material
            ])
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
    var index;


    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat" || parent.type == "for") {
            if (parent.type == "repeat") {
                repeat_number *= parent.inputList[0].fieldRow[1].value_;
            }
            if (parent.type == "for") {
                repeat_number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_) + 1;
                forArr.push(
                    [parent.inputList[0].fieldRow[1].defaultVariableName, //variable name
                    Math.min(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable start
                    Math.max(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable end
                    this.id//object id
                    ])
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
                    meshArr.forEach(x => {
                        // console.log(x[0]);
                        if (x[0] == scene.children[i].name) {
                            x[1].dispose();
                            x[2].dispose();
                            index = meshArr.indexOf(x);
                            if (index !== -1) meshArr.splice(index, 1);
                        }
                    })


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
                scene.remove(scene.getObjectByName(scene.children[i].name));
                meshArr.forEach(x => {
                    if (x[0] == scene.children[i].name) {
                        x[1].dispose();
                        x[2].dispose();
                        index = meshArr.indexOf(x);
                        if (index !== -1) meshArr.splice(index, 1);
                    }
                })

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
        meshArr.push([
            name,
            geometry,
            material
        ]);
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
            meshArr.push([
                name + i,
                geometry,
                material
            ]);
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
    var index;


    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat" || parent.type == "for") {
            if (parent.type == "repeat") {
                repeat_number *= parent.inputList[0].fieldRow[1].value_;
            }
            if (parent.type == "for") {
                repeat_number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_) + 1;
                forArr.push(
                    [parent.inputList[0].fieldRow[1].defaultVariableName, //variable name
                    Math.min(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable start
                    Math.max(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable end
                    this.id//object id
                    ])
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
                    meshArr.forEach(x => {
                        // console.log(x[0]);
                        if (x[0] == scene.children[i].name) {
                            x[1].dispose();
                            x[2].dispose();
                            index = meshArr.indexOf(x);
                            if (index !== -1) meshArr.splice(index, 1);
                        }
                    })


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
                scene.remove(scene.getObjectByName(scene.children[i].name));
                meshArr.forEach(x => {
                    if (x[0] == scene.children[i].name) {
                        x[1].dispose();
                        x[2].dispose();
                        index = meshArr.indexOf(x);
                        if (index !== -1) meshArr.splice(index, 1);
                    }
                })

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
        meshArr.push([
            name,
            geometry,
            material
        ]);
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
            meshArr.push([
                name + i,
                geometry,
                material
            ]);
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


Blockly.JavaScript['cone'] = function (block) {

    var colour_name = block.getFieldValue('COLOUR');

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Cone');


    var code = '';
    var name = this.id;
    var repeat_number = 1;
    var repeat_name = '';
    var index;


    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat" || parent.type == "for") {
            if (parent.type == "repeat") {
                repeat_number *= parent.inputList[0].fieldRow[1].value_;
            }
            if (parent.type == "for") {
                repeat_number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_) + 1;
                forArr.push(
                    [parent.inputList[0].fieldRow[1].defaultVariableName, //variable name
                    Math.min(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable start
                    Math.max(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable end
                    this.id//object id
                    ])
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
                    meshArr.forEach(x => {
                        // console.log(x[0]);
                        if (x[0] == scene.children[i].name) {
                            x[1].dispose();
                            x[2].dispose();
                            index = meshArr.indexOf(x);
                            if (index !== -1) meshArr.splice(index, 1);
                        }
                    })


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
                scene.remove(scene.getObjectByName(scene.children[i].name));
                meshArr.forEach(x => {
                    if (x[0] == scene.children[i].name) {
                        x[1].dispose();
                        x[2].dispose();
                        index = meshArr.indexOf(x);
                        if (index !== -1) meshArr.splice(index, 1);
                    }
                })

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
        meshArr.push([
            name,
            geometry,
            material
        ]);
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
            meshArr.push([
                name + i,
                geometry,
                material
            ]);
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
    var index;


    if (parent = this.getSurroundParent()) {
        while (parent.type == "repeat" || parent.type == "for") {
            if (parent.type == "repeat") {
                repeat_number *= parent.inputList[0].fieldRow[1].value_;
            }
            if (parent.type == "for") {
                repeat_number *= Math.abs(parent.inputList[0].fieldRow[3].value_ - parent.inputList[0].fieldRow[5].value_) + 1;
                forArr.push(
                    [parent.inputList[0].fieldRow[1].defaultVariableName, //variable name
                    Math.min(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable start
                    Math.max(parent.inputList[0].fieldRow[3].value_, parent.inputList[0].fieldRow[5].value_),//variable end
                    this.id//object id
                    ])
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
                    meshArr.forEach(x => {
                        // console.log(x[0]);
                        if (x[0] == scene.children[i].name) {
                            x[1].dispose();
                            x[2].dispose();
                            index = meshArr.indexOf(x);
                            if (index !== -1) meshArr.splice(index, 1);
                        }
                    })


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
                scene.remove(scene.getObjectByName(scene.children[i].name));
                meshArr.forEach(x => {
                    if (x[0] == scene.children[i].name) {
                        x[1].dispose();
                        x[2].dispose();
                        index = meshArr.indexOf(x);
                        if (index !== -1) meshArr.splice(index, 1);
                    }
                })

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
        meshArr.push([
            name,
            geometry,
            material
        ]);
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
            meshArr.push([
                name + i,
                geometry,
                material
            ]);
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

function recursion(blok, number_x, number_y, number_z, number, type) {

    var block = workspace.getBlockById(blok);

    var ny = 0;
    var nx = 0;
    var counter = 0;
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
            // console.log("//////////////////")
            if (x.name.includes(block.id)) {
                // nx += 1;
                counter += 1;
        // console.log(nx);

                if (type == "move") {
                    if (x.name.slice(20) % (nx / number) == 0 && x.name.slice(20) != '' && number != 1) {
                        x_num = x_num + " + " + number_x;
                        // x_num = number_x * counter;
                        z_num = z_num + " + " + number_z;
                        // z_num = number_z * counter;
                        y_num = y_num + " + " + number_y;
                        // y_num = number_y * counter;
                        // console.log(x_num);
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
                        x_num = x_num + " + " + number_x;
                        z_num = z_num + " + " + number_z;
                        y_num = y_num + " + " + number_y;
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
                        x_num = x_num + " + " + number_x;
                        z_num = z_num + " + " + number_z;
                        y_num = y_num + " + " + number_y;
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

function recursiveScale(ID, num_x, num_y, num_z) {
    scene.children.forEach((x) => {
        if (x.name.includes(ID)) {

            arrScale.forEach(k => {
                if (k[0] == x.name) {
                    k[2] = [num_x, num_y, num_z];
                }
            })

            scaleInDirection.push([x.name, [num_x, num_y, num_z]]);
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

//for pokus
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