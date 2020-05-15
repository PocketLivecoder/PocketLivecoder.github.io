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

//-----------------------------------------------------------------------------------------------------//
//initialize scene, create camera and canvas
var scene;
var objects;
var camera;
var renderer;
var stopRendering;
var cube;
var arrRotate = [];
var arrMove = [];
var arrScale = [];
var controls;
var light;

var requestId;

var volume;
var jumpObject = new Object;
var blokyNaScene = [];

var moveInDirection = [];
var rotateInDirection = [];

var clock = new THREE.Clock();



var element = document.getElementById("scene");



function init() {

    renderer = new THREE.WebGLRenderer({ alpha: true, preserveDrawingBuffer: true });
    renderer.setClearColor(0x000000, 0);;
    renderer.setSize(window.innerWidth, window.innerHeight);
    element.appendChild(renderer.domElement);
    element.childNodes[0].style.background = 'transparent'

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000);
    controls = new THREE.OrbitControls(camera, renderer.domElement);

    light = new THREE.DirectionalLight(0xffffff, 5);



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

    render();
}

init();

var frames = 0;
var time = 0;
var radius = 1.5;

function modifyStringToValidForm(str) {

    var vector = [];

    str.forEach(x => {

        x = x.replace("time", time);
        x = x.replace("frame", frames);
        x = x.replace("sin", "Math.sin");
        x = x.replace("cos", "Math.cos");
        x = x.replace("tan", "Math.tan");

        try {
            x = eval(x);
            if (eval(x) == undefined || isNaN(eval(x))) {
                x = 0;
            }
            vector.push(x);
        } catch (e) {
            vector.push(0);
        }

    })

    return vector;
}


function rotate(object, n, vector) {

    if (!vector) {
        vector = [0, 0, 0];
    } else {
        vector = modifyStringToValidForm(vector);
    }

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
        vector = modifyStringToValidForm(vector);
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
        vector = new THREE.Vector3(1, 1, 1);
    }

    if (object) {
        object.scale.set(
            vector.x + Math.abs(Math.sin(time + Math.PI * 0.5) * radius),
            vector.y + Math.abs(Math.sin(time + Math.PI * 0.5) * radius),
            vector.z + Math.abs(Math.sin(time + Math.PI * 0.5) * radius)
        )
    }
}

var i;
var x, y, z;

function render() {

    frames++;
    time = clock.getElapsedTime();

    // console.log(moveInDirection);

    //move in dir
    moveInDirection.forEach(k => {

        x = k[1][0];
        x = x.replace("frame", frames);
        x.replace("time", time);
        x = x.replace("sin", "Math.sin");
        x = x.replace("cos", "Math.cos");
        x = x.replace("tan", "Math.tan");
        y = k[1][1];
        y = y.replace("frame", frames);
        y.replace("time", time);
        y = y.replace("sin", "Math.sin");
        y = y.replace("cos", "Math.cos");
        y = y.replace("tan", "Math.tan");
        z = k[1][2];
        z = z.replace("frame", frames);
        z.replace("time", time);
        z = z.replace("sin", "Math.sin");
        z = z.replace("cos", "Math.cos");
        z = z.replace("tan", "Math.tan");


        try {
            scene.getObjectByName(k[0]).position.set(eval(x), eval(y), eval(z));
            if (eval(x) == undefined || isNaN(eval(x))) {
                scene.getObjectByName(k[0]).position.set(0, 0, 0);
            }
            if (eval(y) == undefined || isNaN(eval(y))) {
                scene.getObjectByName(k[0]).position.set(0, 0, 0);
            }
            if (eval(z) == undefined || isNaN(eval(z))) {
                scene.getObjectByName(k[0]).position.set(0, 0, 0);
            }
        } catch (e) {
            scene.getObjectByName(k[0]).position.set(0, 0, 0);
        }
    })

    console.log(rotateInDirection);

    //rotate in dir
    rotateInDirection.forEach(k => {


        x = k[1][0];
        x.replace("time", time);
        x = x.replace("frame", frames);
        x = x.replace("sin", "Math.sin");
        x = x.replace("cos", "Math.cos");
        x = x.replace("tan", "Math.tan");
        y = k[1][1];
        y = y.replace("frame", frames);
        y.replace("time", time);
        y = y.replace("sin", "Math.sin");
        y = y.replace("cos", "Math.cos");
        y = y.replace("tan", "Math.tan");
        z = k[1][2];
        z = z.replace("frame", frames);
        z.replace("time", time);
        z = z.replace("sin", "Math.sin");
        z = z.replace("cos", "Math.cos");
        z = z.replace("tan", "Math.tan");

        try {
            scene.getObjectByName(k[0]).rotation.set(eval(x), eval(y), eval(z));
            if (eval(x) == undefined || isNaN(eval(x))) {
                scene.getObjectByName(k[0]).rotation.set(0, 0, 0);
            }
            if (eval(y) == undefined || isNaN(eval(y))) {
                scene.getObjectByName(k[0]).rotation.set(0, 0, 0);
            }
            if (eval(z) == undefined || isNaN(eval(z))) {
                scene.getObjectByName(k[0]).rotation.set(0, 0, 0);
            }
        } catch (e) {
            scene.getObjectByName(k[0]).rotation.set(0, 0, 0);
        }

    })

    light.position.copy(camera.position);

    var paintOver = true;

    workspace.getAllBlocks().forEach((x) => {
        if (x.type == "paintOver") {
            paintOver = false;
        }
    })

    if (paintOver) {
        renderer.autoClearColor = true;
    }

    if (arrRotate.length > 0) {
        arrRotate.forEach(m => {
            objektyNaScene.forEach((x) => {
                rotate(scene.getObjectByName(m[0]), m[0].slice(20), m[1]);
            })
        })
    }

    if (arrMove.length > 0) {

        arrMove.forEach(m => {
            objektyNaScene.forEach((x) => {
                move(scene.getObjectByName(m[0]), m[0].slice(20), m[1], m[2]);
            })
        })

    }

    if (arrScale.length > 0) {

        arrScale.forEach(m => {
            objektyNaScene.forEach((x) => {
                scale(scene.getObjectByName(m[0]), m[2])
            })
        })

    }



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

function runCode(event) {

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
            })

            for (i = 0; i < arr.length; i++) {
                scene.remove(scene.getObjectByName(arr[i]));
            }

        };
    }

    //zastav 2x pustene zvuky
    Object.keys(jumpObject).forEach(key => {
        jumpObject[key].volume(0.5);
        jumpObject[key].rate(1);
        localStorage = 1;
        if (!blokyNaScene.includes(key)) {
            jumpObject[key].pause();
        }
    });

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


}
workspace.addChangeListener(runCode);





