var freqA = 174;
var freqS = 196;
var freqD = 220;
var freqF = 246;

var playingA, playingS, playingD, playingF;
var oscA, oscS, oscD, oscF;

var playing = false;

function setup() {
  createCanvas(500,500);
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
}

function draw() {
  background(backgroundColor)
  text('click here,\nthen press A/S/D/F\n keys to play', 
       width/2, height/2.25);
  if (playingA) {
		text('Playing A', width/2,height/4);
    rect(0,0,random(width),random(height)); //draws rectangle of random size in top left corner
  } else if (playingS) {
    text('Playing S', width/2,height/4);  
    line(width,0,random(width),random(height)); //draws lines of random lengths and endpoints in top right corner
  } else if (playingD) {
    text('Playing D', width/2,height/4);
    ellipse(0,height,random(width*2),random(height*2)); //draws ellipses of random radius' in bottom left corner
  } else if (playingF) {
    text('Playing F',width/2, height/4);
    triangle(random(width),random(height),random(width),
      random(height),random(width),random(height)); //draws triangles of random sizes in random locations
  }
}

function keyPressed() {
  print("got key press for ", key);
  var osc;
  if (key == 'A') {
    playingA = true;
    osc = oscA;
    backgroundColor = color(25, 208, 31);
  } else if (key == 'S') {
    playingS = true;
    osc = oscS;
    backgroundColor = color(91, 117, 247);
  } else if (key == 'D') {
    playingD = true;
    osc = oscD;
    backgroundColor = color(255, 219, 132);
  } else if (key == 'F') {
    playingF = true;
    osc = oscF;
    backgroundColor = color(250, 255, 162);
  }
  if (osc) {
    osc.amp(0.5, 0.1);
    playing = true;
    //backgroundColor = color(0, 255, 255);
  }
}

function keyReleased() {
  print("got key release for ", key);
  var osc;
  if (key == 'A') {
    playingA = false;
    osc = oscA;
  } else if (key == 'S') {
    playingS = false;
    osc = oscS;
  } else if (key == 'D') {
    playingD = false;
    osc = oscD;
  } else if (key == 'F') {
    playingF = false;
    osc = oscF;
  }
  if (osc) {
    osc.amp(0, 0.5);
    playing = false;
    backgroundColor = color(255, 0, 255);
  }
}

function mouseDragged() { //dragging mouse will change the frequency of A S D F and will reset once it passes a threshhold (kind of like a siren)
	freqA = freqA + 5;
	oscA.freq(freqA); //setting oscA's frequency to the value of freqA
	freqS = freqS + 7;
	oscS.freq(freqS);
	freqD = freqD + 8;
	oscD.freq(freqD);
	freqF = freqF + 10; //higher + # will cause the frequency to reach it's max frequency faster (more of a siren sound)
	oscF.freq(freqF);
	print(freqS);
	if (freqA > 250) {
		freqA = 174;
		oscA.freq(freqA);
	}
	if (freqS > 500) {
		freqS = 196;
		oscS.freq(freqS);
	}
	if (freqD > 750) {
		freqD = 220;
		oscD.freq(freqD);
	}
	if (freqF > 1000) { 
		freqF = 246;
		oscF.freq(freqF);
	}
}
