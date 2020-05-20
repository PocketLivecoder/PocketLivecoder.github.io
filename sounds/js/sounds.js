Blockly.Blocks['test_pitch_field'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('pitch')
      .appendField(new CustomFields.FieldPitch('7'), 'PITCH');
    this.setStyle('loop_blocks');
  }
};

var play_code ='';

Blockly.JavaScript['test_pitch_field'] = function (block) {

  var code = '';


  return code;
};

Blockly.Blocks['tone'] = {
  init: function () {
    var duration = [
      [{
        "src": "sounds/img/note1.png",
        "width": 9, "height": 19, "alt": "whole"
      }, "1"],
      [{
        "src": "sounds/img/note0.5.png",
        "width": 9, "height": 19, "alt": "half"
      }, "2"],
      [{
        "src": "sounds/img/note0.25.png",
        "width": 9, "height": 19, "alt": "quarter"
      }, "4"],
      [{
        "src": "sounds/img/note0.125.png",
        "width": 9, "height": 19, "alt": "eighth"
      }, "8"],
      [{
        "src": "sounds/img/note0.0625.png",
        "width": 9, "height": 19, "alt": "sixteenth"
      }, "16"]
    ];
    var pitch = [
      ["A3", "sounds/piano/A3.mp3"],
      ["A4", "sounds/piano/A4.mp3"],
      ["B3", "sounds/piano/B3.mp3"],
      ["B4", "sounds/piano/B4.mp3"],
      ["C3", "sounds/piano/C3.mp3"],
      ["C4", "sounds/piano/C4.mp3"],
      ["D3", "sounds/piano/D3.mp3"],
      ["D4", "sounds/piano/D4.mp3"],
      ["E3", "sounds/piano/E3.mp3"],
      ["E4", "sounds/piano/E4.mp3"],
      ["F3", "sounds/piano/F3.mp3"],
      ["F4", "sounds/piano/F4.mp3"],
      ["G3", "sounds/piano/G3.mp3"],
      ["G4", "sounds/piano/G4.mp3"]
    ]

    this.appendDummyInput("duration")
      .appendField("Tone")
      .appendField(new Blockly.FieldDropdown(duration), "DURATION");
    this.appendDummyInput("pitch")
      // .appendField("Tone")
      // .appendField(new Blockly.FieldDropdown(pitch), "PITCH");
      .appendField(new CustomFields.FieldPitch('7'), 'PITCH');
    this.setInputsInline(true);
    this.setPreviousStatement(true, ['music-rest', 'tone', 'repeat']);
    this.setNextStatement(true, ['music-rest', 'tone', 'repeat']);
    this.setColour(130);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

// Blockly.Blocks['music_rest'] = {
//   /**
//    * Block for waiting.
//    * @this {Blockly.Block}
//    */
//   init: function () {
//     this.jsonInit({
//       "message0": BlocklyGames.getMsg('Music_rest'),
//       "args0": [
//         {
//           "type": "field_dropdown",
//           "name": "DURATION",
//           "options": [
//             [{
//               "src": "music/rest1.png",
//               "width": 10, "height": 20, "alt": "whole"
//             }, "1"],
//             [{
//               "src": "music/rest0.5.png",
//               "width": 10, "height": 20, "alt": "half"
//             }, "0.5"],
//             [{
//               "src": "music/rest0.25.png",
//               "width": 10, "height": 20, "alt": "quarter"
//             }, "0.25"],
//             [{
//               "src": "music/rest0.125.png",
//               "width": 10, "height": 20, "alt": "eighth"
//             }, "0.125"],
//             [{
//               "src": "music/rest0.0625.png",
//               "width": 10, "height": 20, "alt": "sixteenth"
//             }, "0.0625"]
//           ]
//         }
//       ],
//       "inputsInline": true,
//       "previousStatement": null,
//       "nextStatement": null,
//       "colour": Music.Blocks.HUE,
//       "tooltip": BlocklyGames.getMsg('Music_restTooltip')
//     });
//   }
// };

Blockly.Blocks['music-rest'] = {
  init: function () {
    var rest = [
      [{
        "src": "sounds/img/rest1.png",
        "width": 10, "height": 20, "alt": "whole"
      }, "1"],
      [{
        "src": "sounds/img/rest0.5.png",
        "width": 10, "height": 20, "alt": "half"
      }, "2"],
      [{
        "src": "sounds/img/rest0.25.png",
        "width": 10, "height": 20, "alt": "quarter"
      }, "4"],
      [{
        "src": "sounds/img/rest0.125.png",
        "width": 10, "height": 20, "alt": "eighth"
      }, "8"],
      [{
        "src": "sounds/img/rest0.0625.png",
        "width": 10, "height": 20, "alt": "sixteenth"
      }, "16"]
    ];

    this.appendDummyInput("duration")
      .appendField("Rest")
      .appendField(new Blockly.FieldDropdown(rest), "REST");
    // .appendField("Tone")
    this.setPreviousStatement(true, ["tone", "repeat", "play-block"]);
    this.setNextStatement(true, ["tone", "repeat", "play-block"]);
    // this.setPreviousStatement(true, ['music-rest','tone','repeat']);
    // this.setNextStatement(true, ['music-rest','tone','repeat']);
    this.setColour(280);
    this.setTooltip("");
    this.setHelpUrl("");
  }
}

Blockly.Blocks['play-block'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldLabelSerializable("play"), "Play")
    // .appendField(new Blockly.FieldNumber(1, 1, 100, 1), "number")
    // .appendField(new Blockly.FieldLabelSerializable("times"), "times");
    this.appendStatementInput("string")
      .setCheck("tone");
    // .appendField("do");
    // this.setPreviousStatement(true, null);
    // this.setNextStatement(true, null);
    this.setColour(280);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};

/**
 * @license
 * Copyright 2012 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @fileoverview Blocks for Music game.
 * @author fraser@google.com (Neil Fraser)
 */

// goog.require('CustomFields.FieldPitch');

// Blockly.Blocks['tone'] = {
//     /**
//      * Block for playing note.
//      * @this {Blockly.Block}
//      */
//     init: function() {
//       var options = [
//         [{"src": "sounds/img/note1.png",
//           "width": 9, "height": 19, "alt": "whole"}, "1"],
//         [{"src": "sounds/img/note0.5.png",
//           "width": 9, "height": 19, "alt": "half"}, "0.5"],
//         [{"src": "sounds/img/note0.25.png",
//           "width": 9, "height": 19, "alt": "quarter"}, "0.25"],
//         [{"src": "sounds/img/note0.125.png",
//           "width": 9, "height": 19, "alt": "eighth"}, "0.125"],
//         [{"src": "sounds/img/note0.0625.png",
//           "width": 9, "height": 19, "alt": "sixteenth"}, "0.0625"]
//       ];
//       // Trim off whole and sixteenth notes for levels 1-9.
//       this.jsonInit({
//         "message0": "%1 %2",
//         "args0": [
//           {
//             "type": "field_dropdown",
//             "name": "DURATION",
//             "options": options
//           },
//           {
//             "type": "input_value",
//             "name": "PITCH",
//             "check": "Number"
//           }
//         ],
//         "inputsInline": true,
//         "previousStatement": null,
//         "nextStatement": null,
//         "colour": 180,
//         "tooltip": ""
//       });
//     }
//   };

Blockly.JavaScript['tone'] = function (block) {
  var duration = block.getFieldValue('DURATION');
  var pitch = block.getFieldValue('PITCH');
  var note = 'C4';
  // console.log(pitch)


  switch (Number(pitch)) {
    case 0:
      note = 'C3';
      break;
    case 1:
      note = 'D3';
      break;
    case 2:
      note = 'E3';
      break;
    case 3:
      note = 'F3';
      break;
    case 4:
      note = 'G3';
      break;
    case 5:
      note = 'A3';
      break;
    case 6:
      note = 'B3';
      break;
    case 7:
      note = 'C4';
      break;
    case 8:
      note = 'D4';
      break;
    case 9:
      note = 'E4';
      break;
    case 10:
      note = 'F4';
      break;
    case 11:
      note = 'G4';
      break;
    case 12:
      note = 'A4';
      break;
  }

  // console.log(note);

  // console.log(pitch, duration)

  // note = new Howl({
  //   src: pitch,
  //   html5: true,
  //   rate: duration,
  //   volume: 1,
  // })
  // // jumpObject[this.id].play();


  // var parent = this;
  // var repeat_n = 1;

  // while (parent.getSurroundParent()) {

  //   // console.log(parent.getSurroundParent().type);
  //   if(parent.getSurroundParent().type == "repeat"){
  //     repeat_n *= parent.getSurroundParent().inputList[0].fieldRow[1].value_;
  //     console.log(parent.getSurroundParent());
  //   }
  //   if(parent.getSurroundParent().type == "play-block"){
  //     max += ((1/Number(duration)) * repeat_n);
  //   }

  //   parent = parent.getSurroundParent();
  // }


  // max += 1/Number(duration);

  var code = "'" + note + "','" + duration + "';";
  // ["A3", "sounds/piano/A3.mp3", duration],
  // ]
  // var code = '';
  // console.log(code);

  // eval(play_code);
  // play_code = '';

  return code;
};


Blockly.JavaScript['play-block'] = function (block) {
  // var number = block.getFieldValue('number');
  var statements_name = Blockly.JavaScript.statementToCode(block, 'string');
  statements_name = statements_name.slice(2);

  playBlocksCount++

  code = '';

  var arr = statements_name.split(";").map(function(x){return x.split(",")});


  var max_dur = 1;
  arr.forEach(a => {
    if(a[1]){
      // console.log(eval(a[1]))
      max += 1/eval(a[1]);
      // console.log(max_dur);
    }
  })

  if(statements_name){
  code += 'noteArr['+playBlocksCount+'] = "' + statements_name+ '".split(";").map(function(x) {return x.split(",")});'
          +'noteArr['+playBlocksCount+'].splice(-1,1);'
          // +'noteArr.push(["duration",'+max+']);'
          // + 'max='+max_dur+';';
  }

  // clearInterval(id_var);
  //   id_var = setInterval(playMusic, max * 1000);

  // play_code = "max="+max_dur+";";

  // noteArr.push(["duration",max]);

  return code;
};

Blockly.JavaScript['music-rest'] = function (block) {
  var rest = block.getFieldValue('REST');

  // note = neject[this.id].play();

  // console.log(rest);

  // max += 1/Number(rest);

  var code = "'rest'" + ",'" + rest + "';";

  return code;
};