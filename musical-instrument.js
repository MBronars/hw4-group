//its a bubbly piano
var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;
var freqG = 262;
var freqH = 294;
var freqJ = 330;
var A = false;
var S = false;
var D = false;
var F = false;
var G = false;
var H = false;
var J = false;

var oscA, oscS, oscD, oscF;

var playing = false;

function setup() {
	createCanvas(281,300);
  backgroundColor = color(255, 0, 255);
  textAlign(CENTER);
  
  oscA = new p5.Oscillator();
  oscA.setType('triangle');
  oscA.freq(freqA);
  oscA.amp(0);
  oscA.start();
  
  oscS = new p5.Oscillator();
  oscS.setType('triangle');
  oscS.freq(freqS);
  oscS.amp(0);
  oscS.start();
  
  oscD = new p5.Oscillator();
  oscD.setType('triangle');
  oscD.freq(freqD);
  oscD.amp(0);
  oscD.start();
  
  oscF = new p5.Oscillator();
  oscF.setType('triangle');
  oscF.freq(freqF);
  oscF.amp(0);
  oscF.start();
	
	oscG = new p5.Oscillator();
  oscG.setType('triangle');
  oscG.freq(freqG);
  oscG.amp(0);
  oscG.start();
  
  oscH = new p5.Oscillator();
  oscH.setType('triangle');
  oscH.freq(freqH);
  oscH.amp(0);
  oscH.start();
  
  oscJ = new p5.Oscillator();
  oscJ.setType('triangle');
  oscJ.freq(freqJ);
  oscJ.amp(0);
  oscJ.start();
}

function draw() 
{
	count = 0;
	while(count<280)
	{
		fill(255);
		rect(count, 0, 40, 100);
		count = count + 40;
	}
		
		
	
	
  if (A) {
    fill(255,0,0);
		ellipse(random(0,300),random(140,300), random(20,80), random(20,80));
		fill(150);
		rect(0,0,40,100);
  } 
	if (S) {
    fill(0, 255, 0);
		ellipse(random(0,300),random(140,300), random(20,80), random(20,80));
		fill(150);
		rect(40,0,40,100);
  } 	
	if (D) {
    fill(0,0, 255);
		ellipse(random(0,300),random(140,300), random(20,80), random(20,80));
		fill(150);
		rect(80,0,40,100);
  } 	
	if (F) {
    fill(255,255,0);
		ellipse(random(0,300),random(140,300), random(20,80), random(20,80));
		fill(150);
		rect(120,0,40,100);
  } 
	if (G) {
    fill(0, 255, 255);
		ellipse(random(0,300),random(140,300), random(20,80), random(20,80));
		fill(150);
		rect(160,0,40,100);
  } 	
	if (H) {
    fill(255,0, 255);
		ellipse(random(0,300),random(140,300), random(20,80), random(20,80));
		fill(150);
		rect(200,0,40,100);
  } 	
	if (J) {
    fill(255,150,150);
		ellipse(random(0,300),random(140,300), random(20,80), random(20,80));
		fill(150);
		rect(240, 0, 40,100);
  } 
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		A = true;
  } else if (key == 'S') {
    osc = oscS;
		S = true;
  } else if (key == 'D') {
    osc = oscD;
		D = true;
  } else if (key == 'F') {
    osc = oscF;
		F = true;
  }
	else if (key == 'G') {
    osc = oscG;
		G = true;
  }
	else if (key == 'H') {
    osc = oscH;
		H = true;
  }
	else if (key == 'J') {
    osc = oscJ;
		J = true;
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    osc = oscA;
		A = false;
  } else if (key == 'S') {
    osc = oscS;
		S = false;
  } else if (key == 'D') {
    osc = oscD;
		D = false;
  } else if (key == 'F') {
    osc = oscF;
		F = false;
  }
	else if (key == 'G') {
    osc = oscG;
		G = false;
  }
	else if (key == 'H') {
    osc = oscH;
		H = false;
  }
	else if (key == 'J') {
    osc = oscJ;
		J = false;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
  }
}
//Assignment: visual-feedback.js Add some per-key visual feedback. One approach is to create a new variable for each key that tracks whether that particular key is pressed, and then use that variable in the draw function to highlight different parts of the canvas.

//#In the current code, there's a single "playing" variable that's set to true when any key is pressed, and set to false when any key is released. Instead, try creating a playing variable for each key, e.g., playingA, playingS, etc. -- declare these up top with var playingA, playingS, playingD, playingF;. In your keyPressed function's if-else if sequence, when checking for each key, set the corresponding playingA = true, playingS = true, etc; then, in keyReleased, set the appropriate variables to false.

//Now that your four playingA, etc., variables are being set to true and false by keyPressed and keyReleased respectively, you can use those four variables in if statements inside your draw function to give visual feedback. Here's one example:

//function draw() {
 // background(255);
 // fill(120);
  //if (playingA) {
  //  rect(0, 0, width/4, height);
 // }
//}
