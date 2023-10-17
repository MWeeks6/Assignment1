// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
// var textToSpeak = ""; THIS IS THE OLD ONE, I am instead creating a storyBuilder function when text to speak is pressed

//index correlating to the story arrays
var subjectIndex = 0
var verbIndex = 0
var adjectiveIndex = 0
var nounIndex = 0
var settingIndex = 0

//CONSTANTS
	//constant buttons
const speakButton = document.getElementById('speak');
const subjectButton = document.getElementById('subject');
const verbButton = document.getElementById('verb');
const adjectiveButton = document.getElementById('adjective');
const nounButton = document.getElementById('noun');
const settingButton = document.getElementById('setting');
const randomStoryButton = document.getElementById('randomStory');
const resetButton = document.getElementById('reset');
const storyBoard = document.getElementById('storyBoard');
	//constant arrays
const storySubjects = ["The detective","The astronaut","The baker","The inventor","The orphan","The photographer","The superhero"]
const storyVerbs = ["cried about","spied on","tripped over","ate","swam through","flew around","tangoed with"]
const storyAdjectives = ["a fat","a shiny","a beautiful","an ugly","a terrifying","a sick","a smelly"]
const storyNouns = ["teacher","waitress","spoon","uncle","phone","cantaloupe","string"]
const storySettings = ["on the moon","in the grass","in the ocean","underneath a bridge","across the kitchen","around the corner","beside a stranger"]

//array for all story elements
// [5] means that I am giving a length of 5 to the array
storyArray = [storySubjects[0], storyVerbs[0], storyAdjectives[0], storyNouns[0], storySettings[0]]


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

//function to sort through an array that was passed through
function subjectSpeakNow(subjectArray){
	var storySubject = subjectArray[subjectIndex]

	speakNow(storySubject)
	storyBoard.textContent = storySubject
	storyArray.splice(0, 1, storySubject)

	//increment in case its pressed again
	//looks for if we are at the end of the array
	if(subjectIndex === subjectArray.length - 1){
		subjectIndex = 0
	}
	//if its not at the end of the array, increment by one
	else{
		subjectIndex++
	}
	
}
function verbSpeakNow(verbArray){
	var storyVerb = verbArray[verbIndex]
	
	speakNow(storyVerb)
	storyBoard.textContent = storyVerb
	storyArray.splice(1, 1, storyVerb)

	//increment in case its pressed again
	//looks for if we are at the end of the array
	if(verbIndex === verbArray.length - 1){
		verbIndex = 0
	}
	//if its not at the end of the array, increment by one
	else{
		verbIndex++
	}
}
function adjectiveSpeakNow(adjectiveArray){
	var storyAdjective = adjectiveArray[adjectiveIndex]
	
	speakNow(storyAdjective)
	storyBoard.textContent = storyAdjective
	storyArray.splice(2, 1, storyAdjective)

	//increment in case its pressed again
	//looks for if we are at the end of the array
	if(adjectiveIndex === adjectiveArray.length - 1){
		adjectiveIndex = 0
	}
	//if its not at the end of the array, increment by one
	else{
		adjectiveIndex++
	}
}
function nounSpeakNow(nounArray){
	var storyNoun = nounArray[nounIndex]
	
	//playback the noun
	speakNow(storyNoun)
	storyBoard.textContent = storyNoun
	//changing the 'saved' story to use the new variable -> the second argument says there is one thing to replace
	storyArray.splice(3, 1, storyNoun)

	//increment in case its pressed again
	//looks for if we are at the end of the array
	if(nounIndex === nounArray.length - 1){
		nounIndex = 0
	}
	//if its not at the end of the array, increment by one
	else{
		nounIndex++
	}
}
function settingSpeakNow(settingArray){
	var storySetting = settingArray[settingIndex]
	
	speakNow(storySetting)
	storyBoard.textContent = storySetting
	storyArray.splice(4, 1, storySetting)

	//increment in case its pressed again
	//looks for if we are at the end of the array
	if(settingIndex === settingArray.length - 1){
		settingIndex = 0
	}
	//if its not at the end of the array, increment by one
	else{
		settingIndex++
	}
}

function storyBuilder(storyArray){
	return storyArray.join(" ").trim()
}

function getRandomStory(storyArray){
	//go through every type place in the story array
	for(let i = 0; i < 5; i++){
		randomIndex = Math.floor(Math.random() * 7)
		switch(i){
			case 0: 
				storyArray.splice(0,1,storySubjects[randomIndex])
			case 1:
				storyArray.splice(1,1,storyVerbs[randomIndex])
			case 2:
				storyArray.splice(2,1,storyAdjectives[randomIndex])
			case 3:
				storyArray.splice(3,1,storyNouns[randomIndex])
			default:
				storyArray.splice(4,1,storySettings[randomIndex])
		}
	}
	let randomStory = storyBuilder(storyArray)
	console.log(randomStory)
	return randomStory
}

//set everything to default
function reset(){
	subjectIndex = 0
	verbIndex = 0
	adjectiveIndex = 0
	nounIndex = 0
	settingIndex = 0
	storyArray = [storySubjects[0], storyVerbs[0], storyAdjectives[0], storyNouns[0], storySettings[0]]
	storyBoard.textContent = ""
}


/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function() {
	story = storyBuilder(storyArray)
	speakNow(story);
	storyBoard.textContent = story
}

//Onclick handler for the button that goes through the list of subjects
subjectButton.onclick = function(){
	subjectSpeakNow(storySubjects)
}
//Onclick handler for the button that goes through the list of verbs
verbButton.onclick = function(){
	verbSpeakNow(storyVerbs)
}
//Onclick handler for the button that goes through the list of adjectives
adjectiveButton.onclick = function(){
	adjectiveSpeakNow(storyAdjectives)
}
//Onclick handler for the button that goes through the list of nouns
nounButton.onclick = function(){
	nounSpeakNow(storyNouns)
}
//Onclick handler for the button that goes through the list of settings
settingButton.onclick = function(){
	settingSpeakNow(storySettings)
}
//onclick handler for the button that creates a random story
randomStoryButton.onclick = function(){
	let randomStory = getRandomStory(storyArray)
	speakNow(randomStory)
	storyBoard.textContent = randomStory
}

//resets everything to its default setting
resetButton.onclick = reset