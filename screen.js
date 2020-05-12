

Blockly.JavaScript['box'] = function (block) {

    var code = '';
    var name = block.id;

    code += "if (!scene.getObjectByName('" + name + "')){"
        + "var geometry = new THREE.BoxGeometry(1,1,1);"
        + "var material = new THREE.MeshNormalMaterial();"
        + "var cube = new THREE.Mesh(geometry, material);"
        + "cube.name = '" + name + "';"
        + "scene.add(cube);"
        + "cube.rotation.set(0.5,1,0);}";

    return code;

}



