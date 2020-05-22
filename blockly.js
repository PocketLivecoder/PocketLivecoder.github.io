

// TODO:
// - Logic by som premenoval napr. na Movement. //DONE


// - Rotate/Move/Scale bez parametrov by som možno odstránil, pričom toto
// náhodné správanie by nadobudli bloky, ktoré majú všetky sloty prázdne.
// (Snáď nebudú tie pohyby príliš rušivé ako predvolené.) //DONE


// - K sin, cos, tan by som pridal možno nejaké ďalšie funkcie podľa potreby. //DONE


// - Loops by som premenoval na Logic. //DONE


// - Graphic by som premenoval a Shapes a dat tam rôzne ďalšie útvary.
// Napr. Circle je tam momentálne jediný 2D útvar. //DONE


// - Do Logic by som pridal aspoň nejaký "For" cyklus, ktorý by automaticky
// vytvoril nejakú premennú (napr. i, j, k, ...), ktorú by bolo možné
// využiť vnútri cyklu - bol by to blok v sekcii Math, kde by sa z
// drop-downu vybrala daná premenná. //DONE


// - Popremýšľal by som nad nejakou formou podmienky "If", momentálne mi
// ale nenapadajú detaily.


// - Pri zvukoch by sa mala dať vytvoriť nejaká melódia, teda klasicky z
// tónov nástrojov (klavír a pod.).//DONE


localStorage.clear();

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
    'VAR', create_variable);

//-----------------------------------------------------------------------------------------------------//
//initialize scene, create camera and canvas
var scene;
// var objects;
var camera;
var renderer;
// var stopRendering;
// var cube;
var arrRotate = [];
var arrMove = [];
var arrScale = [];
var controls;
var light;

// var play_code;

var blokyNaScene = [];

var moveInDirection = [];
var rotateInDirection = [];
var scaleInDirection = [];

var forArr = [];
var noteArr = [];
var variableArr = [];
var meshArr = [];

var clock = new THREE.Clock();

var element = document.getElementById("scene");

function init() {

    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true, preserveDrawingBuffer: true });
    renderer.setClearColor(0x000000, 0);;
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


    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;

        camera.updateProjectionMatrix();
    });

    // for(i = 0; i<200; i++){
    //     var geometry = new THREE.BoxBufferGeometry(1, 1, 1);
    //     var material = new THREE.MeshNormalMaterial();
    //     var ring = new THREE.Mesh(geometry, material);
    //     ring.name = name;
    //     scene.add(ring);
    // }

    render();
}

init();

var frames = 0;
var time = 0;
var radius = 1.5;
var evalx, evaly, evalz;
var vector;

function modifyStringToValidForm(str, id) {

    var vector = [];

    str.forEach(x => {

        x = x.split("time").join(time);
        x = x.split("frames").join(frames);

        forArr.forEach(j => {
            if (id.includes(j[3])) {
                console.log(j[0]);
                v = j[1] + (k[0].slice(20) % (j[2] - j[1] + 1));
                x = x.split(" " + j[0] + " ").join(v);
                y = y.split(" " + j[0] + " ").join(v);
                z = z.split(" " + j[0] + " ").join(v);
            }
        })

        evalx = eval(x) || 0;

        vector.push(evalx);

    })

    return vector;
}


function rotate(object, n, vector) {

    // if (!vector) {
    //     vector = [0, 0, 0];
    // } else {
    //     vector = modifyStringToValidForm(vector,object.name);
    // }

    vector = [0, 0, 0];


    if (!n) n = 0;

    object.rotation.set(
        vector[0] + Math.cos(time * Math.PI * 0.5),
        vector[1] + Math.cos(time * Math.PI * 0.5),
        vector[2] + Math.cos(time * Math.PI * 0.5)
    )
}

function move(object, n, radiusNumber, vector) {

    if (!vector) {
        vector = [0, 0, 0];
    } else {
        vector.forEach(x => {
            x = x.split("time").join(time);
            x = x.split("frames").join(frames);
            forArr.forEach(j => {
                if (id.includes(j[3])) {
                    v = j[1] + (k[0].slice(20) % (j[2] - j[1] + 1));
                    x = x.split(" " + j[0] + " ").join(v);
                    y = y.split(" " + j[0] + " ").join(v);
                    z = z.split(" " + j[0] + " ").join(v);
                }
            })
            evalx = eval(x) || 0;
            vector.push(evalx);
        })
    }

    radius = radiusNumber;
    var number = 0
    if (n) number = n;

    time = clock.getElapsedTime() * 0.5 * Math.PI;
    if (object) {
        object.position.set(
            vector[0] + Math.cos(number * 0.8 + time + Math.PI * 0.5) * radius,
            vector[1] + Math.sin(number * 0.8 + time + Math.PI * 0.5) * radius,
            vector[2] + Math.cos(number * 0.8 + time + Math.PI * 0.5) * radius
        )
    }
}

function scale(object, vector) {
    time = clock.getElapsedTime() * 0.5 * Math.PI;

    if (!vector) {
        vector = [1, 1, 1];
    } else {
        vector = modifyStringToValidForm(vector, object.name);
    }

    if (object) {
        object.scale.set(
            vector[0] + Math.abs(Math.sin(time + Math.PI * 0.5) * radius),
            vector[1] + Math.abs(Math.sin(time + Math.PI * 0.5) * radius),
            vector[2] + Math.abs(Math.sin(time + Math.PI * 0.5) * radius)
        )
    }
}

var i;
var x, y, z;
var v;
var paintOver;

function render() {

    paintOver = true;
    time = clock.getElapsedTime();
    frames++;


    moveInDirection.forEach(k => {

        forArr.forEach(j => {
            if (k[0].includes(j[3])) {
                v = j[1] + (k[0].slice(20) % (j[2] - j[1] + 1));
                k[1][0] = k[1][0].split(" " + j[0] + " ").join(v);
                k[1][1] = k[1][1].split(" " + j[0] + " ").join(v);
                k[1][2] = k[1][2].split(" " + j[0] + " ").join(v);
            }
        })

        evalx = "vector = [" + k[1][0] + "," + k[1][1] + "," + k[1][2] + "];";
        eval(evalx);
        if (scene.getObjectByName(k[0])) {
            scene.getObjectByName(k[0]).scale.set(vector[0] || 0, vector[1] || 0, vector[2] || 0);
        }
    })

    rotateInDirection.forEach(k => {

        forArr.forEach(j => {
            if (k[0].includes(j[3])) {
                v = j[1] + (k[0].slice(20) % (j[2] - j[1] + 1));
                k[1][0] = k[1][0].split(" " + j[0] + " ").join(v);
                k[1][1] = k[1][1].split(" " + j[0] + " ").join(v);
                k[1][2] = k[1][2].split(" " + j[0] + " ").join(v);
            }
        })

        evalx = "vector = [" + k[1][0] + "," + k[1][1] + "," + k[1][2] + "];";
        eval(evalx);
        if (scene.getObjectByName(k[0])) {
            scene.getObjectByName(k[0]).scale.set(vector[0] || 0, vector[1] || 0, vector[2] || 0);
        }
    })


    scaleInDirection.forEach(k => {
        forArr.forEach(j => {
            if (k[0].includes(j[3])) {
                v = j[1] + (k[0].slice(20) % (j[2] - j[1] + 1));
                k[1][0] = k[1][0].split(" " + j[0] + " ").join(v);
                k[1][1] = k[1][1].split(" " + j[0] + " ").join(v);
                k[1][2] = k[1][2].split(" " + j[0] + " ").join(v);
            }
        })

        evalx = "vector = [" + k[1][0] + "," + k[1][1] + "," + k[1][2] + "];";
        eval(evalx);
        if (vector[0] == 0) vector[0] = 0.001;
        if (vector[1] == 0) vector[1] = 0.001;
        if (vector[2] == 0) vector[2] = 0.001;
        if (scene.getObjectByName(k[0])) {
            scene.getObjectByName(k[0]).scale.set(vector[0] || 1, vector[1] || 1, vector[2] || 1);
        }
    })


    light.position.copy(camera.position);

    workspace.getAllBlocks().forEach((x) => {
        if (x.type == "paintOver") {
            paintOver = false;
        }
    })

    if (paintOver) {
        renderer.autoClearColor = true;
    }


    arrRotate.forEach(m => {
        object = scene.getObjectByName(m[0]);

        if (!m[2]) {
            vector = [0, 0, 0];
        } else {
            m[2].forEach(x => {
                // x = x.split("time").join(time);
                // x = x.split("frames").join(frames);
                forArr.forEach(j => {
                    if (id.includes(j[3])) {
                        v = j[1] + (m[0].slice(20) % (j[2] - j[1] + 1));
                        x = x.split(" " + j[0] + " ").join(v);
                        y = y.split(" " + j[0] + " ").join(v);
                        z = z.split(" " + j[0] + " ").join(v);
                    }
                })
                evalx = eval(x) || 0;
                vector.push(evalx);
            })
        }

        object.rotation.set(
            vector[0] + Math.cos(time * Math.PI * 0.5),
            vector[1] + Math.cos(time * Math.PI * 0.5),
            vector[2] + Math.cos(time * Math.PI * 0.5)
        )
    })


    arrMove.forEach(m => {

        object = scene.getObjectByName(m[0]);
        if (!m[2]) {
            vector = [0, 0, 0];
        } else {
            m[2].forEach(x => {
                // x = x.split("time").join(time);
                // x = x.split("frames").join(frames);
                forArr.forEach(j => {
                    if (id.includes(j[3])) {
                        v = j[1] + (m[0].slice(20) % (j[2] - j[1] + 1));
                        x = x.split(" " + j[0] + " ").join(v);
                        y = y.split(" " + j[0] + " ").join(v);
                        z = z.split(" " + j[0] + " ").join(v);
                    }
                })
                evalx = eval(x) || 0;
                vector.push(evalx);
            })
        }

        // console.log(vector);

        radius = m[1];
        var number = 0
        if (m[0].slice(20)) number = m[0].slice(20);

        object.position.set(
            vector[0] + Math.cos(Number(number) * 0.8 + time + Math.PI * 0.5) * radius,
            vector[1] + Math.sin(Number(number) * 0.8 + time + Math.PI * 0.5) * radius,
            vector[2] + Math.cos(Number(number) * 0.8 + time + Math.PI * 0.5) * radius
        )

    })


    arrScale.forEach(m => {
        object = scene.getObjectByName(m[0]);
        if (!m[2]) {
            vector = [1, 1, 1];
        } else {
            m[2].forEach(x => {
                // x = x.split("time").join(time);
                // x = x.split("frames").join(frames);
                forArr.forEach(j => {
                    if (id.includes(j[3])) {
                        v = j[1] + (m[0].slice(20) % (j[2] - j[1] + 1));
                        x = x.split(" " + j[0] + " ").join(v);
                        y = y.split(" " + j[0] + " ").join(v);
                        z = z.split(" " + j[0] + " ").join(v);
                    }
                })
                evalx = eval(x) || 0;
                vector.push(evalx);
            })
        }

        object.scale.set(
            vector[0] + Math.abs(Math.sin(time + Math.PI * 0.5) * radius),
            vector[1] + Math.abs(Math.sin(time + Math.PI * 0.5) * radius),
            vector[2] + Math.abs(Math.sin(time + Math.PI * 0.5) * radius)
        )
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
duration = 0;
var max = 1;
var sound;
var timeoutArr = [];
var playNotes = false;



function playMusic() {
    noteArr.forEach(x => {
        duration = 0;

        x.forEach(note => {
            duration += 1 / eval(note[1]);
            timeout_id = setTimeout(function () {
                if (note[0] != "'rest'") {
                    var source = "sounds/" + note[2].slice(1, -1) + "/" + note[0].slice(1, note[0].length - 1) + ".mp3";
                    sound = new Howl({
                        src: source,
                        html5: true,
                        rate: eval(note[1]),
                        volume: 1,
                    })

                    sound.play();
                }

            }, eval(duration * 1000));
            timeoutArr.push(timeout_id);
        })

    })

}

function runCode(event) {

    create_variable(workspace);

    playNotes = false;
    blockFromEvent = workspace.getBlockById(event.blockId);
    if (blockFromEvent) {
        if (blockFromEvent.type == "play-block") {
            blockFromEvent = blockFromEvent.getSurroundParent();
        }
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


    if (playNotes) {

        if (timeoutArr) {
            timeoutArr.forEach(x => {
                clearTimeout(x);
            })
        }
        var timeout_id = setTimeout(playMusic, 0);
        timeoutArr.push(timeout_id);

        
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

            // clearInterval(id_var);
            // if (timeoutArr) {
            //     timeoutArr.forEach(x => {
            //         clearTimeout(x);
            //     })
            // }


            // var timeout_id = setTimeout(playMusic, 1);
            // timeoutArr.push(timeout_id);

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

            })

            for (i = 0; i < arr.length; i++) {
                scene.remove(scene.getObjectByName(arr[i]));
            }



        };
    }

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
            variableArr = [];


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

    // if (playNotes) {

    //     if (timeoutArr) {
    //         timeoutArr.forEach(x => {
    //             clearTimeout(x);
    //         })
    //     }

    //     var timeout_id = setTimeout(playMusic, 0);
    //     timeoutArr.push(timeout_id);
    // }

    if (playNotes) {
        console.log("runcode")
        clearInterval(id_var);
        id_var = setInterval(playMusic, max * 1000);
    }

    if (event) {
        if (event.type == Blockly.Events.BLOCK_DELETE) {


            arr.every(e => {

                variableArr.forEach(x => {
                    if (e == x[0]) {
                        workspace.deleteVariableById(x[1]);
                    }
                })
                variableArr = [];
            })


        };
    }

}
workspace.addChangeListener(runCode);



var variable = [];

/**
 * Construct the blocks required by the flyout for the colours category.
 * @param {!Blockly.Workspace} workspace The workspace this flyout is for.
 * @return {!Array.<!Element>} Array of XML block elements.
 */
function create_variable(workspace) {
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










