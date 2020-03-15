
// Write your part of speech array here
var nouns=['knife', 'doorknob','carpet', 'sushi', 'pebbles', 'lighter', 'coins', 'kettle', 'fork', 'tea', 'ramen', 'egg']
var prep=['on', 'beside', 'under','inside', 'across', 'below', 'except', 'over','without', 'among', 'with', 'throughout'];
var modifiers=['unique','colossal', 'extrodinary', 'careful', 'zesty', 'talking', 'reading', 'well', 'stubborn', 'spicy', 'processing', 'illuminating'];
var object=['wood', 'plank', 'stove', 'tongs', 'leaf', 'acorn', 'trench coat', 'envelope', 'candle', 'hairclip', 'cork', 'pocket'];
var punctuation =['.', '!', '^_^', ';', '____', '~ ~ ~', '??!?!', '....', '$', ',', '<>', ']'];

// Create your wordPicker function here

function randomWord(wordArray){
	var word = wordArray[Math.floor(Math.random()* wordArray.length)];
	return word
}

function sentence(wordArray){

var sentence =  randomWord(nouns)+' '+ randomWord(prep)+' '+ randomWord(modifiers)+' '+ randomWord(object) + ' ' + randomWord(punctuation);
document.getElementById('word').innerHTML = sentence;

var title = randomWord(nouns)+ ' ' + randomWord(object);
document.title = title
}


window.setInterval(function() {
	 // Run your function here
	sentence();

}, 4000);


// Run your function when the page first loads
