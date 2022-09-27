let buffer = [0,0,0,0];

function setup() {
	//Create a thin canvas where to allocate the elements (this is not strictly neccessary because
	//we will use DOM elements which can be allocated directly in the window)
	createCanvas(windowWidth /5, windowHeight * 2 / 3);

	//Create two sliders, first to control frequency and second to control amplitude of oscillator
	//both go from 0 to 100, starting with value of 60
	v1 = createSlider(0, 100, 50);
	v2 = createSlider(0, 100, 50);
	v3 = createSlider(0, 100, 50);
	v4 = createSlider(0, 100, 50);


	//Text
	p1 = createP("Oscillator Volume:");

	//This function will format colors and positions of the DOM elements (sliders, button and text)
	formatDOMElements();
}

function draw() {
    background(5,5,255,1);

    buffer[0]=v1.value()/200;
	buffer[1]=v2.value()/200;
	buffer[2]=v3.value()/200;
	buffer[3]=v4.value()/200;


	//SEND BUFFER to Bela. Buffer has index 0 (to be read by Bela),
	//contains floats and sends the 'buffer' array.
    Bela.control.send({v1: buffer[0]});
    Bela.control.send({v2: buffer[1]});
    Bela.control.send({v3: buffer[2]});
    Bela.control.send({v4: buffer[3]});
}

function formatDOMElements() {

	//Format sliders
	v1.position((windowWidth-v1.width)/2,windowHeight/3 + 30);
	v2.position((windowWidth-v2.width)/2,windowHeight/3 + 70);
	v3.position((windowWidth-v3.width)/2,windowHeight/3 + 110);
	v4.position((windowWidth-v4.width)/2,windowHeight/3 + 150);


	//Format text as paragraphs
	p1.position((windowWidth-v1.width)/2,windowHeight/3 - 20);
	}