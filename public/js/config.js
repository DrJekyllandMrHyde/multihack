var Config = (function(){
    "use strict";
        
    /* -------- DO NOT BEAUTIFY ---------*/
    var initialContent = [
        {
            name: "index.html",
            fileId: "welcome",
            content: `<!DOCTYPE html>
<html >
<head>
  <meta charset="UTF-8">
  <title>Sound Sequencer</title>
  
  
  
      <link rel="stylesheet" href="style.css">

  
</head>

<body>
  <div id='preloader'>
  <h1>Loading</h1>
</div>
<div id='container'>
  <div id='drawer'>
    <form id='samples'>
      <input type='text' value='https://dl.dropboxusercontent.com/u/87705298/sounds/kick.wav'>
      <input type='text' value='https://dl.dropboxusercontent.com/u/87705298/sounds/snare.wav'>
      <input type='text' value='https://dl.dropboxusercontent.com/u/87705298/sounds/hihat.wav'>
      <input type='text' value='https://dl.dropboxusercontent.com/u/87705298/sounds/ssynth1.wav'>
      <input type='text' value='https://dl.dropboxusercontent.com/u/87705298/sounds/ssynth2.wav'>
      <input type='text' value='https://dl.dropboxusercontent.com/u/87705298/sounds/ssynth3.wav'>
      <input type='text' value='https://dl.dropboxusercontent.com/u/87705298/sounds/synth1.wav'>
      <input type='text' value='https://dl.dropboxusercontent.com/u/87705298/sounds/synth2.wav'>
      <input type='text' value='https://dl.dropboxusercontent.com/u/87705298/sounds/6.wav'>
    </form>
  </div>
  <div id='panel'>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div class='led'></div>
    <div id='sequencer'>
      <div class='row' instrument='0'>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <input class='knob sample-volume-knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-thickness='0.6' data-width='25' type='text' value='50'>
      </div>
      <div class='row' instrument='1'>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <input class='knob sample-volume-knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-thickness='0.6' data-width='25' type='text' value='50'>
      </div>
      <div class='row' instrument='2'>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <input class='knob sample-volume-knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-thickness='0.6' data-width='25' type='text' value='50'>
      </div>
      <div class='row' instrument='3'>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <input class='knob sample-volume-knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-thickness='0.6' data-width='25' type='text' value='50'>
      </div>
      <div class='row' instrument='4'>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <input class='knob sample-volume-knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-thickness='0.6' data-width='25' type='text' value='50'>
      </div>
      <div class='row' instrument='5'>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <input class='knob sample-volume-knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-thickness='0.6' data-width='25' type='text' value='50'>
      </div>
      <div class='row' instrument='6'>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <input class='knob sample-volume-knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-thickness='0.6' data-width='25' type='text' value='50'>
      </div>
      <div class='row' instrument='7'>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <input class='knob sample-volume-knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-thickness='0.6' data-width='25' type='text' value='50'>
      </div>
      <div class='row' instrument='8'>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <div class='note'></div>
        <input class='knob sample-volume-knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-thickness='0.6' data-width='25' type='text' value='50'>
      </div>
    </div>
    <div id='controls'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='0' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='1' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='2' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='3' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='4' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='5' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='6' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='7' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='8' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='9' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='10' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='11' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='12' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='13' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='14' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0af' data-height='25' data-note='15' data-thickness='0.6' data-width='25' type='text' value='50'>
      <br>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='0' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='1' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='2' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='3' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='4' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='5' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='6' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='7' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='8' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='9' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='10' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='11' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='12' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='13' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='14' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#0fa' data-height='25' data-note='15' data-thickness='0.6' data-width='25' type='text' value='50'>
      <br>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='0' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='1' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='2' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='3' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='4' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='5' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='6' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='7' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='8' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='9' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='10' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='11' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='12' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='13' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='14' data-thickness='0.6' data-width='25' type='text' value='50'>
      <input class='knob' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-displayInput='false' data-fgColor='#fa0' data-height='25' data-note='15' data-thickness='0.6' data-width='25' type='text' value='50'>
      <br>
    </div>
    <div id='masters'>
      <div class='button-group'>
        <button id='saveBtn'>
          Save
        </button>
        <button id='loadBtn'>
          Load
        </button>
      </div>
      <div class='button-group'>
        <button id='pausePlayBtn'>
          Pause/Play
        </button>
        <button id='resetBtn'>
          Reset
        </button>
      </div>
      <div class='knob-group'>
        <input class='master' control='volume' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-fgColor='#0af' data-height='80' data-width='80' id='master-volume' type='text' value='50'>
        <input class='master' control='sustain' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-fgColor='#0fa' data-height='80' data-width='80' id='master-sustain' type='text' value='50'>
        <input class='master' control='pitch' data-angleArc='260' data-angleOffset='-130' data-bgColor='#6e6e6e' data-fgColor='#fa0' data-height='80' data-width='80' id='master-pitch' type='text' value='50'>
      </div>
    </div>
  </div>
</div>
<div id='howto'>
</div>
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
<script src='https://dl.dropboxusercontent.com/u/87705298/jquery%20knob/knob.jquery.min.js'></script>
    <script src="https://drjekyllandmrhyde.github.io/sound-sequencer%20(2)/js/index.js"></script>
</body>
</html>
`
        },
        {
            name: "style.css",
            fileId: "welcome2",
            content: `@import url(https://fonts.googleapis.com/css?family=Open+Sans);
/* Mixins */
body {
  background-color: #1e1e1e;
  perspective: 1000;
  -webkit-perspective: 1000;
  -moz-perspective: 1000;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#container {
  width: 499px;
  margin: 50px auto;
  position: relative;
  border-radius: 4px;
  display: none;
}

#drawer {
  position: absolute;
  left: -2px;
  top: 10px;
  width: 260px;
  border-radius: 3px;
  background-color: #353535;
  text-align: center;
  z-index: 10;
  transition: all 0.5s ease-in-out;
}

#drawer:before {
  content: " ";
  display: block;
  width: 6px;
  cursor: pointer;
  position: absolute;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  z-index: 10;
  left: -5px;
  height: 278px;
  background-color: #818181;
}

#drawer.active {
  transform: translateX(-255px);
  -webkit-transform: translateX(-255px);
  -moz-transform: translateX(-255px);
}

#samples input {
  border-radius: 2px;
  outline: none;
  border: none;
  padding-left: 2px;
  padding-right: 2px;
  padding-top: 3px;
  padding-bottom: 3px;
  display: block;
  width: 92%;
  z-index: 50;
  position: relative;
  margin: 8px auto;
  background-color: #444;
  color: #cfcfcf;
}

#panel {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 100;
  background-color: #4e4e4e;
  border-radius: 8px;
  text-align: center;
  border-left: 3px solid #3b3b3b;
  border-right: 3px solid #3b3b3b;
  border-bottom: 5px solid #3b3b3b;
}

#panel:after {
  content: " ";
  clear: both;
  display: block;
}

.led {
  position: relative;
  left: -15px;
  width: 23px;
  margin-left: 1px;
  margin-right: 1px;
  background-color: #aaa;
  height: 4px;
  display: inline-block;
}

.led.active {
  background-color: #3e3;
  box-shadow: 0px 0px 10px #3e3;
}

.note {
  display: inline-block;
  width: 25px;
  height: 25px;
  cursor: pointer;
  border-radius: 2px;
}

#sequencer > .row:nth-of-type(1) > .note {
  background-color: #7c2e2e;
  box-shadow: 0px 0px 2px #7c2e2e;
}

#sequencer > .row:nth-of-type(1) > .note:hover {
  background-color: #b34343;
  box-shadow: 0px 0px 3px #b34343;
}

#sequencer > .row:nth-of-type(1) > .note.active {
  background-color: #c77;
  box-shadow: 0px 0px 4px #c77;
}

#sequencer > .row:nth-of-type(2) > .note {
  background-color: #5e2a2a;
  box-shadow: 0px 0px 2px #5e2a2a;
}

#sequencer > .row:nth-of-type(2) > .note:hover {
  background-color: #934141;
  box-shadow: 0px 0px 3px #934141;
}

#sequencer > .row:nth-of-type(2) > .note.active {
  background-color: #b66;
  box-shadow: 0px 0px 4px #b66;
}

#sequencer > .row:nth-of-type(3) > .note {
  background-color: #442222;
  box-shadow: 0px 0px 2px #442222;
}

#sequencer > .row:nth-of-type(3) > .note:hover {
  background-color: #773c3c;
  box-shadow: 0px 0px 3px #773c3c;
}

#sequencer > .row:nth-of-type(3) > .note.active {
  background-color: #a55;
  box-shadow: 0px 0px 4px #a55;
}

#sequencer > .row:nth-of-type(4) > .note {
  background-color: #2e7c2e;
  box-shadow: 0px 0px 2px #2e7c2e;
}

#sequencer > .row:nth-of-type(4) > .note:hover {
  background-color: #43b343;
  box-shadow: 0px 0px 3px #43b343;
}

#sequencer > .row:nth-of-type(4) > .note.active {
  background-color: #7c7;
  box-shadow: 0px 0px 4px #7c7;
}

#sequencer > .row:nth-of-type(5) > .note {
  background-color: #2a5e2a;
  box-shadow: 0px 0px 2px #2a5e2a;
}

#sequencer > .row:nth-of-type(5) > .note:hover {
  background-color: #419341;
  box-shadow: 0px 0px 3px #419341;
}

#sequencer > .row:nth-of-type(5) > .note.active {
  background-color: #6b6;
  box-shadow: 0px 0px 4px #6b6;
}

#sequencer > .row:nth-of-type(6) > .note {
  background-color: #224422;
  box-shadow: 0px 0px 2px #224422;
}

#sequencer > .row:nth-of-type(6) > .note:hover {
  background-color: #3c773c;
  box-shadow: 0px 0px 3px #3c773c;
}

#sequencer > .row:nth-of-type(6) > .note.active {
  background-color: #5a5;
  box-shadow: 0px 0px 4px #5a5;
}

#sequencer > .row:nth-of-type(7) > .note {
  background-color: #2e2e7c;
  box-shadow: 0px 0px 2px #2e2e7c;
}

#sequencer > .row:nth-of-type(7) > .note:hover {
  background-color: #4343b3;
  box-shadow: 0px 0px 3px #4343b3;
}

#sequencer > .row:nth-of-type(7) > .note.active {
  background-color: #77c;
  box-shadow: 0px 0px 4px #77c;
}

#sequencer > .row:nth-of-type(8) > .note {
  background-color: #2a2a5e;
  box-shadow: 0px 0px 2px #2a2a5e;
}

#sequencer > .row:nth-of-type(8) > .note:hover {
  background-color: #414193;
  box-shadow: 0px 0px 3px #414193;
}

#sequencer > .row:nth-of-type(8) > .note.active {
  background-color: #66b;
  box-shadow: 0px 0px 4px #66b;
}

#sequencer > .row:nth-of-type(9) > .note {
  background-color: #222244;
  box-shadow: 0px 0px 2px #222244;
}

#sequencer > .row:nth-of-type(9) > .note:hover {
  background-color: #3c3c77;
  box-shadow: 0px 0px 3px #3c3c77;
}

#sequencer > .row:nth-of-type(9) > .note.active {
  background-color: #55a;
  box-shadow: 0px 0px 4px #55a;
}

#controls {
  text-align: left;
  padding-left: 5px;
}

#howto {
  margin: 50px auto;
  width: 480px;
  background-color: #111;
  padding: 8px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
}

p, a {
  font-family: "Open Sans", serif;
  color: white;
  font-size: 14px;
}

.small {
  font-size: 11px;
  margin-top: 2px;
  margin-bottom: 2px;
  line-height: 1em;
}

.knob-group {
  float: right;
  margin-right: 32px;
}

.button-group {
  display: inline-block;
  float: left;
  margin-left: 6px;
  margin-top: 2px;
}

.button-group button {
  display: block;
  text-align: center;
  width: 90px;
  font-family: "Open Sans", serif;
  outline: none;
  border: none;
  border-radius: 3px;
  padding-top: 5px;
  padding-bottom: 5px;
  color: #eee;
  background-color: #c44;
  margin-top: 4px;
  margin-bottom: 4px;
  cursor: pointer;
}`
        },
        {
            name: "script.js",
            fileId: "welcome3",
            content: `// Matthew Roelle 2014
// HTML/CSS/JS Sequencer, Bro

// Shoutout to the jQuery Knob plugin, it's used here for all the knobby UI
// https://github.com/aterrien/jQuery-Knob

$(document).ready(function() {
  // ===== Pause/Play state
  var playState = true;
  
  // ===== requestAnimationFrame browser check-a-roonie
  window.requestAnimationFrame = window.requestAnimationFrame || 	 
                                 window.mozRequestAnimationFrame ||
                                 window.webkitRequestAnimationFrame || 
                                 window.msRequestAnimationFrame;
  
  // ===== Web Audio context browser check-a-roonie
  var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  
  // ===== Keep track of the mouse state
  var mouseDown = false;
  $(window)
  .mousedown(function() { mouseDown = true; })
  .mouseup(function() { mouseDown = false; });
  
  // ===== Load the samples & reload if they change src
  function loadAudio() {
    var samples = [];
    $('#samples input').each(function(i) {
      var src = $(this).val();
      var req = new XMLHttpRequest();
      req.open('GET', src, true);
      req.responseType = 'arraybuffer';
      
      req.onload = function() {
        audioCtx.decodeAudioData(req.response, function(buffer) {
          samples[i] = buffer;
        });
      }
      req.send();
    });
    return samples;
  }
  var samples = loadAudio();
  $('#samples input').change(function() {
    samples = loadAudio();
  });

  // ===== toggle the little drawer with the sample URLs
  $('#drawer').click(function(e) {
    if (e.offsetX < 2) { $('#drawer').toggleClass('active'); }
  });

  // ===== Toggle the notes active state based on mouse events
  $('.note')
  .mousedown(function() { $(this).toggleClass('active') })
  .mouseenter(function() { if (mouseDown) { $(this).toggleClass('active')} });

  // ===== Initialize knob interfaces
  $('.knob').knob();
  
  // ===== Keep track of master controls
  var masterControls = {
    volume: 0.5,
    pitch: 0.5,
    sustain: 0.5
  };
  $('.master').knob({ 'change': function(v) {
    masterControls[$(this.$[0]).attr('control')] = v / 100;
  }});
 
  // ===== reset button
  $('#resetBtn').click(function() {
    $('.note').removeClass('active');
    $('#panel .knob, .master').val(50).trigger('change');
  })
  
  // ===== pause/play button
  $('#pausePlayBtn').click(function() {
    playState = !playState;
  })
  
  // ===== saving and loading
  $('#saveBtn').click(function() {
    var state = {};
    state['wavURLs'] = [];
    $('#samples input').each(function() {
      state['wavURLs'].push($(this).val());
    });
    
    state['rows'] = [];
    $('#sequencer .row').each(function() {
      var row = [];
      $(this).children().each(function() {
        if ($(this).hasClass('active')) {
          row.push(1);
        } else {
        	row.push(0);                      
        }
      });
      state['rows'].push(row);
    });
    
    state['knobs'] = [];
    $('.knob').each(function() {
      state['knobs'].push($(this).val());
    });
    state['masters'] = [];
    $('.master').each(function() {
      state['masters'].push($(this).val());
    });
    
    prompt("Copy & Paste this to share", JSON.stringify(state));
  });
  function loadData(data) {
    data['rows'].forEach(function(row, i) {
      row.forEach(function(note, j) {
        if (note == 1) {
          $('#sequencer .row').eq(i).children('.note').eq(j).addClass('active');
        } else {
          $('#sequencer .row').eq(i).children('.note').eq(j).removeClass('active');
        }
      });
    });
    data['knobs'].forEach(function(val, i) {
      $('.knob').eq(i).val(val).trigger('change');
    });
    data['masters'].forEach(function(val, i) {
      $('.master').eq(i).val(val).trigger('change');
      if (i == 0) { masterControls['volume'] = Number(val) / 100; }
      if (i == 1) { masterControls['sustain'] = Number(val) / 100; }
      if (i == 2) { masterControls['pitch'] = Number(val) / 100; }
    });
  }
  $('#loadBtn').click(function() {
    var data = JSON.parse(prompt('Paste the track information', ''));
    loadData(data);
  });
  
  loadData({"wavURLs":["https://dl.dropboxusercontent.com/u/87705298/sounds/kick.wav","https://dl.dropboxusercontent.com/u/87705298/sounds/snare.wav","https://dl.dropboxusercontent.com/u/87705298/sounds/hihat.wav","https://dl.dropboxusercontent.com/u/87705298/sounds/ssynth1.wav","https://dl.dropboxusercontent.com/u/87705298/sounds/ssynth2.wav","https://dl.dropboxusercontent.com/u/87705298/sounds/ssynth3.wav","https://dl.dropboxusercontent.com/u/87705298/sounds/synth1.wav","https://dl.dropboxusercontent.com/u/87705298/sounds/synth2.wav","https://dl.dropboxusercontent.com/u/87705298/sounds/6.wav"],"rows":[[1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0],[0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],[1,1,0,0,1,0,0,0,1,1,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],"knobs":["100","100","20","17","50","50","50","10","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","50","96","50","50","13","50","50","50","50","50","100","50","100","12","50","50"],"masters":["50","27","50"]});
  
  // ===== Sequence!
  function Sequence() {
    var i = 0,
        sequenced = false,
        $instruments = $('#sequencer > .row');
    
    function update() {
      if (playState) {
        if (i >= 16) { i = 0; }
        if (!sequenced) {
          $('.led').removeClass('active');
          $('.led').eq(i).addClass('active');
          sequenced = true;
          $instruments.each(function(j) {
            var note = $($(this).children()[i]),
                gain = audioCtx.createGain(),
                sample = samples[j];

            if (note.hasClass('active')) {
              //sample.play();
              var source = audioCtx.createBufferSource();
              try {
                if (j < 6) {
                  gain.gain.value = masterControls.volume * (Number($('#sequencer > .row').eq(j).children('*').children('input').val()) / 100) * (Number($('#controls > *').eq(i).children('input').val()) / 100);
                } else {
                  gain.gain.value = masterControls.volume * (Number($('#sequencer > .row').eq(j).children('*').children('input').val()) / 100);
                }
              } catch(e) {
                // Sometiems firefox just doesn't want to play nice...
                console.log('some things don\'t work right in firefox');
              }
              if (j > 2 && j < 6) {
               source.playbackRate.value = (0.5 - masterControls.pitch) + 1 - (0.5 - (Number($('#controls > *').eq(i + 34).children('input').val()) / 100));
              } else {
                source.playbackRate.value = (0.5 - masterControls.pitch) + 1;
              }
              source.playbackRate = 1;
              try {
                source.buffer = sample;
                source.connect(gain);
                gain.connect(audioCtx.destination);
                source.start(0);
              } catch(e) {
                // The URL for a sample was probably left blank
                console.log('please fill in all sample URLs');
              }
            }
          });
          setTimeout(function() {
            i++;
            sequenced = false;
          }, masterControls.sustain * 10 * 2 * (Number($('#controls > *').eq(i + 17).children('input').val())));
        }
      }
      requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }
  Sequence();
});

$(window).load(function() { $('#preloader').hide(); $('#container').show(); });
`
        },
        {
            name: "image.svg",
            fileId: "welcome4",
            content: `body {
    background: lightgray;
    font-family: Arial;
}

h1 {
    color: darkgreen;
}
`
        }
        ,
        {
            name: "sound.mp3",
            fileId: "welcome5",
            content: `body {
    background: lightgray;
    font-family: Arial;
}

h1 {
    color: darkgreen;
}
`
        }
    ];
    /*-------------------------------*/
    
    return {
        FileSystem : {
            initialContent : initialContent
        },
        UI : {
            
        },
        Sockets : {
            HOSTNAME : "/", //Points at a Multihack server
            PeerJS : {
                host: "/", //Points at a slightly modified PeerJS server 
                port: 443,
                path: "/server",
                secure: true
            }
        },
    }
}());
