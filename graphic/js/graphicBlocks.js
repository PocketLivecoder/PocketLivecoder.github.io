
var movecode = '';

//Box block
// Blockly.Blocks['box'] = {
//     init: function () {
//         this.appendStatementInput("Box")
//             .setCheck("cone")
//             .appendField("Box");
//         this.setInputsInline(true);
//         this.setPreviousStatement(true, "Box");
//         this.setNextStatement(true, "Box");
//         this.setColour(230);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

Blockly.Blocks['box'] = {
    init: function () {
        this.appendStatementInput("Box")
            .setCheck()
            .appendField("Box")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
            // this.appendDummyInput("Box")
            // .appendField("Box")
            // .appendField(new Blockly.FieldNumber(1, 0.01, 1, 0.01), "X")
            // .appendField(new Blockly.FieldNumber(1, 0.01, 1, 0.01), "Y")
            // .appendField(new Blockly.FieldNumber(1, 0.01, 1, 0.01), "Z")
            this.setInputsInline(true);
        this.setPreviousStatement(true, "Box");
        this.setNextStatement(true, "Box");
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//Cone block
Blockly.Blocks['cone'] = {
    init: function () {
        this.appendStatementInput("Cone")
            .setCheck(null)
            .appendField("Cone")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//Line block
Blockly.Blocks['line'] = {
    init: function () {
        this.appendStatementInput("Line")
            .setCheck(null)
            .appendField("Line");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//circle block
Blockly.Blocks['circle'] = {
    init: function () {
        this.appendStatementInput("Circle")
            .setCheck(null)
            .appendField("Circle")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//ball block
Blockly.Blocks['ball'] = {
    init: function () {
        this.appendStatementInput("Ball")
            .setCheck(null)
            .appendField("Ball")
            .appendField(new Blockly.FieldColour("#ffffff"), "COLOUR");
        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
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
            // .appendField(new Blockly.FieldTextInput('0'),'FIELDNAME')
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.1), "X")
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.1), "Y")
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.1), "Z");
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
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.1), "X")
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.1), "Y")
            .appendField(new Blockly.FieldNumber(0, -Infinity, Infinity, 0.1), "Z");
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
            .appendField(new Blockly.FieldNumber(1, 0.1, 2, 0.1), "X")
            .appendField(new Blockly.FieldNumber(1, 0.1, 2, 0.1), "Y")
            .appendField(new Blockly.FieldNumber(1, 0.1, 2, 0.1), "Z");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(30);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

//colour block
Blockly.Blocks['colour'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("Colour")
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOUR");
        this.setInputsInline(true);
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

    var code = movecode;

    return code;
};

//The generator function takes a reference to the block for processing. It renders the inputs (the VALUE input, above) into code strings, and then concatenates those into a larger expression.
Blockly.JavaScript['box'] = function (block) {

    var colour_name = block.getFieldValue('COLOUR');


    // var a = block.getFieldValue('X');
    // var b = block.getFieldValue('Y');
    // var c = block.getFieldValue('Z');

    var statements_box = Blockly.JavaScript.statementToCode(block, 'Box');

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
                // console.log(parseInt(scene.children[i].name.slice(20)))

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
        // obj = scene.getObjectByName(name);
        // obj.scale.set(a,b,c);
        // console.log(obj);
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
            // obj = scene.getObjectByName(name + i);
            // obj.scale.set(a,b,c);
            // console.log(obj);
        }
        else {
            var geometry = new THREE.BoxGeometry(1, 1, 1);
            var material = new THREE.MeshNormalMaterial();
            var cube = new THREE.Mesh(geometry, material);
            cube.name = name + i;
            scene.add(cube);
            cube.rotation.set(0, 0, 0);
        }
        // obj = scene.getObjectByName(name + i);
        // obj.scale.set(a,b,c);
        // console.log(obj);
    }

    // console.log(scene.children);

    // scene.children.forEach(x => {
    //     if(x.name.includes(name)){
    //         scene.getObjectByName(x.name).scale.set(a,b,c);
    //     }
    // })

    // code += "if (scene.getObjectByName('" + name + "')){}"
    //     + "else"
    //     + "{var geometry = new THREE.BoxGeometry(1,1,1);"
    //     // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
    //     + "var material = new THREE.MeshNormalMaterial();"
    //     + "var cube = new THREE.Mesh(geometry, material);"
    //     + "cube.name = '" + name + "';"
    //     + "scene.add(cube);"
    //     + "cube.rotation.set(0.5,1,0);}";

        scene.children.forEach(x => {
                if(x.name.includes(name)){
                    if(colour_name == '#ffffff'){
                        scene.getObjectByName(x.name).material = new THREE.MeshNormalMaterial();
                    }else{
                        scene.getObjectByName(x.name).material = new THREE.MeshStandardMaterial( { color: colour_name } );
                    }
                }
            })

    return movecode;
};

// Blockly.JavaScript['line'] = function (block) {

//     var statements_box = Blockly.JavaScript.statementToCode(block, 'Line');

//     var code = '';
//     var name = this.id;
//     var repeat_number = 1;
//     var repeat_name = '';


//     if (parent = this.getSurroundParent()) {
//         while (parent.type == "repeat") {
//             repeat_number *= parent.inputList[0].fieldRow[1].value_;
//             repeat_name += parent.id;

//             if (parent.getSurroundParent()) {
//                 parent = parent.getSurroundParent();
//             } else {
//                 break;
//             }

//         }

//         parent = this.getSurroundParent();

//         while (parent.type == "repeat") {

//             for (var i = scene.children.length - 1; i >= 0; i--) {
//                 // console.log(parseInt(scene.children[i].name.slice(20)))

//                 if (scene.children[i].name.includes(name) && parseInt(scene.children[i].name.slice(20)) > repeat_number - 1 && scene.children[i].name.slice(20) != NaN) {
//                     scene.remove(scene.getObjectByName(scene.children[i].name))
//                 }
//             }
//             if (parent.getSurroundParent()) {
//                 parent = parent.getSurroundParent();
//             } else {
//                 break;
//             }

//         }

//     } else {
//         for (var i = scene.children.length - 1; i >= 0; i--) {
//             if (scene.children[i].name.includes(name) && scene.children[i].name.length > 20) {
//                 scene.remove(scene.getObjectByName(scene.children[i].name))
//             }
//         }
//     }

//     if (scene.getObjectByName(name)) { }
//     else {

//         var points = [];
//         points.push(new THREE.Vector3(-2, 0, 0));
//         points.push(new THREE.Vector3(0, 0, 0));
//         points.push(new THREE.Vector3(2, 0, 0));

//         var geometry = new THREE.BufferGeometry().setFromPoints(points);
//         var material = new THREE.MeshNormalMaterial();
//         var line = new THREE.Line(geometry, material);
//         line.name = name;
//         scene.add(line);
//         line.rotation.set(0, 0, 0);
//     }

//     for (i = 1; i < repeat_number; i++) {
//         if (scene.getObjectByName(name + i)) { }
//         else {
//             var points = [];
//             points.push(new THREE.Vector3(-2, 0, 0));
//             points.push(new THREE.Vector3(0, 0, 0));
//             points.push(new THREE.Vector3(2, 0, 0));

//             var geometry = new THREE.BufferGeometry().setFromPoints(points);
//             var material = new THREE.MeshNormalMaterial();
//             var line = new THREE.Line(geometry, material);
//             line.name = name + i;
//             scene.add(line);
//             line.rotation.set(0, 0, 0);
//         }
//     }

//     // code += "if (scene.getObjectByName('" + name + "')){}"
//     //     + "else"
//     //     + "{var geometry = new THREE.BoxGeometry(1,1,1);"
//     //     // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
//     //     + "var material = new THREE.MeshNormalMaterial();"
//     //     + "var cube = new THREE.Mesh(geometry, material);"
//     //     + "cube.name = '" + name + "';"
//     //     + "scene.add(cube);"
//     //     + "cube.rotation.set(0.5,1,0);}";

//     return movecode;
// };


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
                // console.log(parseInt(scene.children[i].name.slice(20)))

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

    // code += "if (scene.getObjectByName('" + name + "')){}"
    //     + "else"
    //     + "{var geometry = new THREE.BoxGeometry(1,1,1);"
    //     // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
    //     + "var material = new THREE.MeshNormalMaterial();"
    //     + "var cube = new THREE.Mesh(geometry, material);"
    //     + "cube.name = '" + name + "';"
    //     + "scene.add(cube);"
    //     + "cube.rotation.set(0.5,1,0);}";

    scene.children.forEach(x => {
        if(x.name.includes(name)){
            if(colour_name == '#ffffff'){
                scene.getObjectByName(x.name).material = new THREE.MeshNormalMaterial();
            }else{
                scene.getObjectByName(x.name).material = new THREE.MeshStandardMaterial( { color: colour_name } );
            }
        }
    })

    return movecode;

    // code += "if (scene.getObjectByName('" + name + "')){}"
    //     + "else"
    //     + "{var geometry = new THREE.DodecahedronBufferGeometry(1,2);"
    //     // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
    //     + "var material = new THREE.MeshNormalMaterial();"
    //     + "var ball = new THREE.Mesh(geometry, material);"
    //     + "ball.name = '" + name + "';"
    //     + "scene.add(ball);"
    //     + "ball.rotation.set(0.5,0.5,0);}";

    // return code;
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

        // movecode += "if(!arrRotate.includes('"+this.getSurroundParent().id+"')){arrRotate.push(['"+this.getSurroundParent().id+"',"+number+"]);}"

        if (!arrRotate.includes(this.getSurroundParent().id))
            arrRotate.push([this.getSurroundParent().id,number]);
    }
    if (this.getChildren()[0]) {

        movecode += "recursion('"+this.id+"',null,null,null,"+number+",'randomRotate');";
        // recursion(this.id, null, null, null, number, "randomRotate");
    }

    //rotuj vsekty objekty ak nemas potomka ani surroundparenta
    // if (this.getChildren()[0] || this.getSurroundParent() || this.getParent()) { }
    // else {
    //     for (i = 0; i < scene.children.length; i++) {
    //         if (!arrRotate.includes(scene.children[i].name))
    //             arrRotate.push(scene.children[i].name);
    //     }
    // }



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
                // console.log(parseInt(scene.children[i].name.slice(20)))

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
        if(x.name.includes(name)){
            if(colour_name == '#ffffff'){
                scene.getObjectByName(x.name).material = new THREE.MeshNormalMaterial();
            }else{
                scene.getObjectByName(x.name).material = new THREE.MeshStandardMaterial( { color: colour_name } );
            }
        }
    })

    // code += "if (scene.getObjectByName('" + name + "')){}"
    //     + "else"
    //     + "{var geometry = new THREE.ConeGeometry(1,2);"
    //     // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
    //     + "var material = new THREE.MeshNormalMaterial();"
    //     + "var cone = new THREE.Mesh(geometry, material);"
    //     + "cone.name = '" + name + "';"
    //     + "scene.add(cone);"
    //     + "cone.rotation.set(0.5,0.5,0);}";


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
                // console.log(parseInt(scene.children[i].name.slice(20)))

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
            var geometry = new THREE.CircleGeometry(1, 30);
            var material = new THREE.MeshNormalMaterial();
            var circle = new THREE.Mesh(geometry, material);
            circle.name = name + i;
            scene.add(circle);
            circle.rotation.set(0, 0, 0);
        }
    }

    scene.children.forEach(x => {
        if(x.name.includes(name)){
            if(colour_name == '#ffffff'){
                scene.getObjectByName(x.name).material = new THREE.MeshNormalMaterial();
            }else{
                scene.getObjectByName(x.name).material = new THREE.MeshStandardMaterial( { color: colour_name } );
            }
        }
    })

    // code += "if (scene.getObjectByName('" + name + "')){}"
    //     + "else"
    //     + "{var geometry = new THREE.CircleGeometry(1,30);"
    //     // + "var material = new THREE.MeshBasicMaterial({ color: 0x333333 });"
    //     + "var material = new THREE.MeshNormalMaterial();"
    //     + "var circle = new THREE.Mesh(geometry, material);"
    //     + "circle.name = '" + name + "';"
    //     + "scene.add(circle);}";
    // // + "circle.rotation.set(0.5,0.5,0);}";

    return movecode;
};

Blockly.JavaScript['colour'] = function (block) {

    var colour_name = block.getFieldValue('COLOUR');
    console.log(colour_name);
    // var color = '0x'+colour_name.slice(1,7);

    // console.log(this);

    // var code = '';
    // code += "var obj = scene.getObjectByName('cube');"
    //     +"console.log('parent block: '+this.parentBlock_);"
    //     +"if(this.parentBlock_){"
    //     +"obj.material.color.setHex("+color+");}"
    //     +"else obj.material.color.setHex( 0x333333 );";
    // return code;
};

Blockly.JavaScript['move'] = function (block) {

    var number_x = block.getFieldValue('X');
    var number_y = block.getFieldValue('Y');
    var number_z = block.getFieldValue('Z');
    var xx = number_x;
    var yy = number_y;
    var zz = number_z;
    var nx = 0;

    var number = 1;
    var code = '';
    // movecode = '';
    var type = "move";

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

    var blok;

    scene.children.forEach(y => {
        if (y.name.includes(block.id)) {
            nx += 1;
        }
    });

    if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {

        // movecode += "scene.children.forEach((x) => {if(x.name.includes('" + this.getSurroundParent().id + "')){movecode +=scene.getObjectByName(x.name).position.set(" + number_x + "," + number_y + "," + number_z + ") }});"
        movecode += "recursiveMove('" + this.getSurroundParent().id + "'," + number_x + "," + number_y + "," + number_z + ");";

    }
    if (this.getChildren()[0]) {

        movecode += "recursion('" + this.id + "'," + number_x + "," + number_y + "," + number_z + "," + number + ",'move');";

    }

    return code;
};

Blockly.JavaScript['rotate'] = function (block) {

    var number_x = block.getFieldValue('X');
    var number_y = block.getFieldValue('Y');
    var number_z = block.getFieldValue('Z');
    var xx = number_x;
    var yy = number_y;
    var zz = number_z;
    var nx = 0;

    var number = 1;
    var code = '';
    // movecode = '';
    var type = "move";

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

    var blok;

    scene.children.forEach(y => {
        if (y.name.includes(block.id)) {
            nx += 1;
        }
    });

    if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {

        // movecode += "scene.children.forEach((x) => {if(x.name.includes('" + this.getSurroundParent().id + "')){movecode +=scene.getObjectByName(x.name).rotation.set(" + number_x + "," + number_y + "," + number_z + ") }});"
        movecode += "recursiveRotate('" + this.getSurroundParent().id + "'," + number_x + "," + number_y + "," + number_z + ");";

    }
    if (this.getChildren()[0]) {

        movecode += "recursion('" + this.id + "'," + number_x + "," + number_y + "," + number_z + "," + number + ",'rotate');";

    }

    return code;
};


function recursion(blok, number_x, number_y, number_z, number, type) {

    // console.log(type);

    var block = workspace.getBlockById(blok);
    // if (block) {
    //     if (block.nextConnection.targetConnection) {
    //         block = block.nextConnection.targetConnection.sourceBlock_;
    //     }
    // }

    var ny = 0;
    var nx = 0;
    var x_num = number_x;
    var y_num = number_y;
    var z_num = number_z;
    var actionType = type

    // console.log("RECURSION")

    // console.log(number_x)

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
                        x_num += number_x;
                        z_num += number_z;
                        y_num += number_y;
                    }
                    // console.log(x.name + ", "+nx);
                    arrMove.forEach(k => {
                        if (k[0] == x.name) {
                            console.log(x_num, y_num, z_num);
                            k[2] = new THREE.Vector3(x_num, y_num, z_num);
                        }
                    })
                    scene.getObjectByName(x.name).position.set(x_num, y_num, z_num);
                }
                if (type == "randomMove") {
                    arrMove.push([x.name, number]);
                }
                if (type == "scale") {

                    arrScale.forEach(k => {
                        if (k[0] == x.name) {
                            console.log(x_num, y_num, z_num);
                            // k[2] = number_x;
                            k[2] = new THREE.Vector3(x_num,y_num,z_num);
                        }
                    })

                    scene.getObjectByName(x.name).scale.set(number_x, number_y, number_z);
                }
                if (type == "randomScale") {
                    arrScale.push([x.name, number]);
                }
                if (type == "randomRotate") {
                    arrRotate.push([x.name, number]);
                }
                if (type == "rotate"){
                    console.log(arrRotate);
                    console.log(x.name);
                    if (x.name.slice(20) % (nx / number) == 0 && x.name.slice(20) != '' && number != 1) {
                        x_num += number_x;
                        z_num += number_z;
                        y_num += number_y;
                    }
                    arrRotate.forEach(f => {
                        console.log(f);
                        if (f[0] == x.name) {
                            // console.log(x_num, y_num, z_num);
                            f[1] = new THREE.Vector3(x_num, y_num, z_num);
                            // console.log(f[1])
                        }
                    })
                    scene.getObjectByName(x.name).rotation.set(x_num, y_num, z_num);
                }
            }
        })

        // console.log(blok)
        if (block.type == "repeat") {
            // console.log(blok.childBlocks_)
            block.childBlocks_.forEach(x => {
                if (x.parentBlock_.type == "repeat") {
                    // console.log(x)
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

Blockly.JavaScript['randomMove'] = function (block) {

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

    console.log(this.getSurroundParent());


    if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {

        console.log("here")

        movecode += "scene.children.forEach((x) => {\nif(x.name.includes('" + this.getSurroundParent().id + "') ){\narrMove.push([x.name, " + number + "]);\n }\n});"

    }
    if (this.getChildren()[0]) {

        movecode += "recursion('" + this.id + "',0,0,0," + number + ",'randomMove');";

        // recursion(this.id, null, null, null, number, "randomMove");
    }

    var code = '';
    return code;
};

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

    if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {
        // movecode += "scene.children.forEach((x) => {if(x.name.includes('"+this.getSurroundParent().id+"')){movecode +=scene.getObjectByName(x.name).scale.set("+number_x+","+number_x+","+number_x+") }});"
        movecode += "recursiveScale('" + this.getSurroundParent().id + "'," + number_x + "," + number_y + "," + number_z + ");";
    }
    if (this.getChildren()[0]) {

        movecode += "recursion('" + this.id + "'," + number_x + "," + number_y + "," + number_z + "," + number + ",'scale');";

        // recursion(this.id, number_x, number_x, number_x, number, "scale");
    }

    var code = '';
    return code;
};

function recursiveScale(ID, num_x, num_y, num_z) {
    scene.children.forEach((x) => {
        if (x.name.includes(ID)) {

            arrScale.forEach(k => {
                if (k[0] == x.name) {
                    k[2] = new THREE.Vector3(num_x,num_y,num_z);
                }
            })

            scene.getObjectByName(x.name).scale.set(num_x, num_y, num_z);
        }
    })
}

function recursiveMove(ID, num_x, num_y, num_z){
    scene.children.forEach((x) => {
        if (x.name.includes(ID)) {

            arrMove.forEach(k => {
                if (k[0] == x.name) {
                    k[2] = new THREE.Vector3(num_x,num_y,num_z);
                }
            })

            scene.getObjectByName(x.name).position.set(num_x, num_y, num_z);
        }
    })
}

function recursiveRotate(ID, num_x, num_y, num_z){
    scene.children.forEach((x) => {
        if (x.name.includes(ID)) {

            arrRotate.forEach(f => {
                console.log(f);
                if (f[0] == x.name) {
                    // console.log(x_num, y_num, z_num);
                    f[1] = new THREE.Vector3(num_x, num_y, num_z);
                    // console.log(f[1])
                }
            })
            scene.getObjectByName(x.name).rotation.set(num_x, num_y, num_z);
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

    if (this.getSurroundParent() != null && this.getSurroundParent().type != "repeat") {
        movecode += "scene.children.forEach((x) => {if(x.name.includes('" + this.getSurroundParent().id + "')){movecode +=arrScale.push([x.name, " + number + "]); }});"
    }
    if (this.getChildren()[0]) {

        movecode += "recursion('" + this.id + "',0,0,0," + number + ",'randomScale');";

        // recursion(this.id, null, null, null, number, "randomScale");
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
    // renderer = new THREE.WebGLRenderer( { preserveDrawingBuffer: true } );
    renderer.autoClearColor = false;
    console.log("false")
    return code;
}