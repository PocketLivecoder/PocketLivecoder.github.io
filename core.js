var blocklyArea = document.getElementById('blocklyArea');
var blocklyDiv = document.getElementById('blocklyDiv');
var workspace = Blockly.inject(blocklyDiv,
    {
        toolbox: document.getElementById('toolbox'),
        horizontalLayout: true,
        toolboxPosition: 'end',
        move: {
            scrollbars: false,
            drag: true,
            wheel: false
        }
    });

workspace.registerToolboxCategoryCallback(
    'VAR', createVariable);

//-----------------------------------------------------------------------------------------------------//
//initialize scene, create camera and canvas
var scene;
var camera;
var renderer;
var arrRotate = [];
var arrMove = [];
var arrScale = [];
var controls;
var light;

var blokyNaScene = [];

var moveInDirection = [];
var rotateInDirection = [];
var scaleInDirection = [];

var forArr = [];
var noteArr = [];
var variableArr = [];

var clock = new THREE.Clock();

var element = document.getElementById("scene");

function init() {

    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, preserveDrawingBuffer: true });
    renderer.setClearColor(0xffffff, 1);;
    renderer.setSize(window.innerWidth, window.innerHeight);
    element.appendChild(renderer.domElement);
    element.childNodes[0].style.background = 'transparent'

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    light = new THREE.DirectionalLight(0xffffff, 5);

    renderer.sortObjects = false;


    camera.position.z = 5;
    camera.lookAt(scene.position);

    light.position = camera.position;
    scene.add(light);

    controls.update();

    Howler.autoUnlock = false;

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();
    });

    render();
}

init();

var radius = 1.5;
var frames = 0;
var time = 0;
var paintOver;

function render() {

    paintOver = true;
    time = clock.getElapsedTime();
    frames++;

    var value_x, value_y, value_z;
    var vector;
    var value;

    moveInDirection.forEach(moveV => {

        value_x = " " + moveV[1][0];
        value_y = " " + moveV[1][1];
        value_z = " " + moveV[1][2];

        vector = [];

        if (forArr.length) {
            forArr.forEach(fa => {
                if (moveV[0].includes(fa[3])) {

                    moveValue = moveV[0].slice(20) || '0';
                    value = fa[1] + (Number(moveValue) % (fa[2] - fa[1] + 1));
                    value_x = value_x.split(" " + fa[0] + " ").join(value);
                    value_y = value_y.split(" " + fa[0] + " ").join(value);
                    value_z = value_z.split(" " + fa[0] + " ").join(value);

                    console.log(eval(value_x) + " " + eval(value_y));

                    if (scene.getObjectByName(moveV[0])) {
                        evalx = "vector = [" + value_x + "," + value_y + "," + value_z + "];";
                        try {
                            eval(evalx);
                        } catch (error) {
                        }
                        scene.getObjectByName(moveV[0]).position.set(vector[0] || 0, vector[1] || 0, vector[2] || 0);
                    }
                }

            })
        } else {

            if (scene.getObjectByName(moveV[0])) {
                evalx = "vector = [" + value_x + "," + value_y + "," + value_z + "];";
                try {
                    eval(evalx);
                } catch (error) {
                }
                scene.getObjectByName(moveV[0]).position.set(vector[0] || 0, vector[1] || 0, vector[2] || 0);
            }
        }
    })

    rotateInDirection.forEach(rotate => {

        value_x = " " + rotate[1][0]
        value_y = " " + rotate[1][1]
        value_z = " " + rotate[1][2]

        vector = [];

        if (forArr.length = 0) {
            forArr.forEach(fa => {
                if (rotate[0].includes(fa[3])) {

                    rotateValue = rotate[0].slice(20) || '0';
                    value = fa[1] + (Number(rotateValue) % (fa[2] - fa[1] + 1));
                    value_x = value_x.split(" " + fa[0] + " ").join(value);
                    value_y = value_y.split(" " + fa[0] + " ").join(value);
                    value_z = value_z.split(" " + fa[0] + " ").join(value);

                    if (scene.getObjectByName(rotate[0])) {
                        evalx = "vector = [" + value_x + "," + value_y + "," + value_z + "];";
                        try {
                            eval(evalx);
                        } catch (error) {
                        }
                        scene.getObjectByName(rotate[0]).rotation.set(vector[0] || 0, vector[1] || 0, vector[2] || 0);
                    }
                }



            })
        } else {
            if (scene.getObjectByName(rotate[0])) {
                evalx = "vector = [" + value_x + "," + value_y + "," + value_z + "];";
                try {
                    eval(evalx);
                } catch (error) {
                }
                scene.getObjectByName(rotate[0]).rotation.set(vector[0] || 0, vector[1] || 0, vector[2] || 0);
            }
        }
    })


    scaleInDirection.forEach(scale => {

        value_x = " " + scale[1][0]
        value_y = " " + scale[1][1]
        value_z = " " + scale[1][2]

        vector = [];

        if (forArr.length) {
            forArr.forEach(fa => {
                if (scale[0].includes(fa[3])) {

                    sliceValue = scale[0].slice(20) || '0';
                    value = fa[1] + (Number(sliceValue) % (fa[2] - fa[1] + 1));
                    value_x = value_x.split(" " + fa[0] + " ").join(value);
                    value_y = value_y.split(" " + fa[0] + " ").join(value);
                    value_z = value_z.split(" " + fa[0] + " ").join(value);

                    if (scene.getObjectByName(scale[0])) {
                        evalx = "vector = [" + value_x + "," + value_y + "," + value_z + "];";
                        try {
                            eval(evalx);
                        } catch (error) {
                        }
                        scene.getObjectByName(scale[0]).scale.set(vector[0] || 1, vector[1] || 1, vector[2] || 1);
                    }
                }
            })
        } else {
            if (scene.getObjectByName(scale[0])) {
                evalx = "vector = [" + value_x + "," + value_y + "," + value_z + "];";
                try {
                    eval(evalx);
                } catch (error) {
                }
                scene.getObjectByName(scale[0]).scale.set(vector[0] || 1, vector[1] || 1, vector[2] || 1);
            }
        }
    })


    light.position.copy(camera.position);

    workspace.getAllBlocks().forEach((blocks) => {
        if (blocks.type == "paintOver") {
            paintOver = false;
        }
    })

    if (paintOver) {
        renderer.autoClearColor = true;
    }


    arrRotate.forEach(rotate => {
        object = scene.getObjectByName(rotate[0]);
        vector = [];

        if (!rotate[2]) {
            vector = [0, 0, 0];
        } else {
            rotate[2].forEach(coords => {
                value_x = coords;
                forArr.forEach(j => {
                    if (object.name.includes(j[3])) {
                        value = j[1] + (rotate[0].slice(20) % (j[2] - j[1] + 1));
                        value_x = value_x.split(" " + j[0] + " ").join(value);
                    }
                })
                evalx = eval(value_x) || 0;
                vector.push(evalx);
            })
        }

        if (object) {
            object.rotation.set(
                vector[0] + Math.cos(time * Math.PI * 0.5),
                vector[1] + Math.cos(time * Math.PI * 0.5),
                vector[2] + Math.cos(time * Math.PI * 0.5)
            )
        }
    })


    arrMove.forEach(move => {
        object = scene.getObjectByName(move[0]);
        vector = [];

        if (!move[2]) {
            vector = [0, 0, 0];
        } else {
            move[2].forEach(coords => {
                value_x = coords;
                forArr.forEach(j => {
                    if (object.name.includes(j[3])) {
                        value = j[1] + (move[0].slice(20) % (j[2] - j[1] + 1));
                        value_x = value_x.split(" " + j[0] + " ").join(value);
                    }
                })
                evalx = eval(value_x) || 0;
                vector.push(evalx);
            })
        }

        radius = move[1];
        var number = 0
        if (move[0].slice(20)) number = move[0].slice(20);

        if (object) {
            object.position.set(
                vector[0] + Math.cos(Number(number) * 0.8 + time + Math.PI * 0.5) * radius,
                vector[1] + Math.sin(Number(number) * 0.8 + time + Math.PI * 0.5) * radius,
                vector[2] + Math.cos(Number(number) * 0.8 + time + Math.PI * 0.5) * radius
            )
        }

    })


    arrScale.forEach(scale => {
        object = scene.getObjectByName(scale[0]);
        vector = [];

        if (!scale[2]) {
            vector = [1, 1, 1];
        } else {
            scale[2].forEach(coords => {
                value_x = coords;
                forArr.forEach(j => {
                    if (object.name.includes(j[3])) {
                        value = j[1] + (scale[0].slice(20) % (j[2] - j[1] + 1));
                        value_x = value_x.split(" " + j[0] + " ").join(value);
                    }
                })
                evalx = eval(value_x) || 0;
                vector.push(evalx);
            })
        }

        if (object) {
            object.scale.set(
                vector[0] + Math.abs(Math.sin(time + Math.PI * 0.5) * radius),
                vector[1] + Math.abs(Math.sin(time + Math.PI * 0.5) * radius),
                vector[2] + Math.abs(Math.sin(time + Math.PI * 0.5) * radius)
            )
        }
    })


    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);

}

//------------------------------------------------------------------------------------------------------------------------------//


var onresize = function (e) {
    // Compute the absolute coordinates and dimensions of blocklyArea.
    var element = blocklyArea;
    var x = 0;
    var y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workspace);
};
window.addEventListener('resize', onresize, false);
onresize();
Blockly.svgResize(workspace);

var objektyNaScene;
var id_var;
var timeout_id; // var array = ["A","B"];
var maxDuration = 0.2;
var duration = 0;
var max = 0;
var timeoutArr = [];
var visibility = true;
var playNotes;

function playMusic() {
    var sound;
    noteArr.forEach(x => {
        duration = 0;

        x.forEach(note => {
            duration += 1 / eval(note[1]);
            timeout_id = setTimeout(function () {
                if (note[0] != "'rest'") {
                    var source = "media/samples/" + note[2].slice(1, -1) + "/" + note[0].slice(1, note[0].length - 1) + ".mp3";
                    sound = new Howl({
                        src: source,
                        rate: eval(note[1]),
                        volume: 1,
                        pool: 0
                    })

                    sound.play();
                }

            }, eval(duration * 1000));
            timeoutArr.push(timeout_id);
        })

    })

}

function runCode(event) {

    var timeout_id;
    createVariable(workspace);

    if(event.type != "move"){
        playNotes = false;
    }

    blockFromEvent = workspace.getBlockById(event.blockId);
    if(blockFromEvent){
        if(blockFromEvent.type == "play-block") blockFromEvent = null;
    }

    if (event.type == "move") {
        if (event.oldParentId) {
            blockFromEvent = workspace.getBlockById(event.oldParentId);
        }
    }

    while (blockFromEvent) {
        typeOfBlock = blockFromEvent.type;
        if (typeOfBlock == "play-block") {
            playNotes = true;
        }
        blockFromEvent = blockFromEvent.getSurroundParent();
    }

    if (playNotes && visibility) {
        if (timeoutArr) {
            timeoutArr.forEach(x => {
                clearTimeout(x);
            })
        }

    }

    objektyNaScene = scene.children;

    for (i = 0; i < objektyNaScene.length; i++) {
        if (!blokyNaScene.includes(objektyNaScene[i].name) && objektyNaScene[i].name.length == 20) {
            scene.remove(scene.getObjectByName(objektyNaScene[i].name));
        }
    }

    if (workspace.getAllBlocks().length == 0) {
        blokyNaScene = []
    } else {
        for (i = 0; i < workspace.getAllBlocks().length; i++) {
            blokyNaScene[i] = workspace.getAllBlocks()[i].id;
        }
    }

    if (event) {
        if (event.type == Blockly.Events.BLOCK_DELETE) {

            arr = [];
            arr = event.ids;

            for (var i = scene.children.length - 1; i >= 0; i--) {
                scene.remove(scene.getObjectByName(scene.children[i].name));
            }

            arr.every(e => {
                if (arrRotate.includes(e)) {
                    arrRotate = arrRotate.filter(x => x != e);
                }
                if (arrMove.includes(e)) {
                    arrMove = arrMove.filter(x => x != e);
                }


                variableArr.forEach(x => {
                    if (e == x[0]) {
                        workspace.deleteVariableById(x[1]);
                    }
                })
                variableArr = [];

            })


            for (i = 0; i < arr.length; i++) {
                scene.remove(scene.getObjectByName(arr[i]));
            }



        };
    }

    // console.log(scene.children);

    if (event) {

        if ((event.type == "move" && event.oldParentId)) {
        } else {

        window.LoopTrap = 1000;
        Blockly.JavaScript.INFINITE_LOOP_TRAP =
            'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
        arrRotate = [];
        arrMove = [];
        arrScale = [];
        moveInDirection = [];
        rotateInDirection = [];
        scaleInDirection = [];
        noteArr = [];
        playBlocksCount = 0;
        max = 0;
        duration = 0;
        variable = [];
        forArr = [];

        for (i = 0; i < scene.children.length; i++) {
            var obj = scene.getObjectByName(scene.children[i].name);
            obj.position.set(0, 0, 0);
            obj.rotation.set(0, 0, 0);
            obj.scale.set(1, 1, 1);
        }

        var code = Blockly.JavaScript.workspaceToCode(workspace);
        Blockly.JavaScript.INFINITE_LOOP_TRAP = null;

        try {
            eval(code);
            movecode = '';
        } catch (e) {
            alert(e);
        }
    }

    }

    if (playNotes && visibility) {
        timeout_id = setTimeout(playMusic, 0);
        timeoutArr.push(timeout_id);
        clearInterval(id_var);
        id_var = setInterval(playMusic, max * 1000);
    }

}
workspace.addChangeListener(runCode);

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        visibility = false;
        if (timeoutArr) {
            timeoutArr.forEach(x => {
                clearTimeout(x);
            })
        }
        clearInterval(id_var);
    } else {
        visibility = true;
        var timeout_id = setTimeout(playMusic, 0);
        timeoutArr.push(timeout_id);
        clearInterval(id_var);
        id_var = setInterval(playMusic, max * 1000);
    }
});



var variable = [];

/**
 * Construct the blocks required by the flyout for the colours category.
 * @param {!Blockly.Workspace} workspace The workspace this flyout is for.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
function createVariable(workspace) {
    // Returns an array of hex colours, e.g. ['#4286f4', '#ef0447']
    // var colourList = myApplication.getPalette();


    var xmlList = [];
    var blockText;
    var block;
    blockText = '<block type="NumberInput">' +
        '<field name="VAR">' + 0 + '</field>' +
        '</block>';
    block = Blockly.Xml.textToDom(blockText);
    xmlList.push(block);

    blockText = '<block type="Operation">' +
        '<field name="VAR"></field>' +
        '</block>';
    block = Blockly.Xml.textToDom(blockText);
    xmlList.push(block);

    blockText = '<block type="TimeOrFrame">' +
        '<field name="VAR"></field>' +
        '</block>';
    block = Blockly.Xml.textToDom(blockText);
    xmlList.push(block);

    blockText = '<block type="SinCos">' +
        '<field name="VAR"></field>' +
        '</block>';
    block = Blockly.Xml.textToDom(blockText);
    xmlList.push(block);

    blockText = '<block type="Random">' +
        '<field name="VAR"></field>' +
        '</block>';
    block = Blockly.Xml.textToDom(blockText);
    xmlList.push(block);

    if (Blockly.Blocks['variables_get']) {
        if (variable.length > 0) {
            blockText = '<block type="variables_get">' +
                '<field name="VAR">' + variable[0] + '</field>' +
                '</block>';
            block = Blockly.Xml.textToDom(blockText);
            xmlList.push(block);
        }
    }
    return xmlList;
};