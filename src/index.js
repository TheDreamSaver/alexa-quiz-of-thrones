"use strict";

var Alexa = require("alexa-sdk");

const got = [
    {
        question: "According to Littlefinger, chaos is a ?",
        answer: 'ladder',
        death: "poisoned by littlefinger"
    },
    {
        question: "What was the name of the sinister castle where Arya and Gendry were held prisoner in season two?",
        answer: 'harrenhal',
        death: "tortured till death by the tickler"
    },
    {
        question: "What is a person called that can enter the minds of animals?",
        answer: 'warg',
        death: "killed by wildling orell who warged into a bear"
    },
    {
        question: "What was the name of the Stark ancestral sword that was melted down by Tywin Lannister?",
        answer: 'ice',
        death: "beheaded by ned stark"
    },
    {
        question: "Who is the first character to say the phrase ‘Game of Thrones’ in the series?",
        answer: 'cersei',
        death: "killed by the mountain on cersei's command"
    },
    {
        question: "Whose sword is the Widow's Wail?",
        answer: 'joffrey',
        death: "shot by Joffrey baratheon with a crossbow"
    },
    {
        question: "Grey Wind, Lady, Ghost, Shaggydog, Summer and the sixth direwolve's name is?",
        answer: 'nymeria',
        death: "mauled to death by nymeria"
    },
    {
        question: "What is the name of Roose Bolton’s wife?",
        answer: 'walda',
        death: "stabbed through the heart by Roose Bolton"
    },
    {
        question: "What is the surname given to bastards in the Reach?",
        answer: 'flower',
        death: "poisoned by olenna tyrell"
    },
    {
        question: "What is the name of Jon Snow's sword?",
        answer: 'longclaw',
        death: "shot with a mercy arrow by Jon Snow"
    },
    {
        question: "Where does Daenerys meet Missandei?",
        answer: 'astapor',
        death: "burned alive by Drogon"
    },
    {
        question: "Who kills Ygritte?",
        answer: 'olly',
        death: "beheaded for insubordination by Jon Snow"
    },
    {
        question: "What is Hodor's real name?",
        answer: 'wylis',
        death: "killed when your neck was snapped by Bran Stark while he is warging into Hodor"
    },
    {
        question: "What continent is free city of Bravos on?",
        answer: 'essos',
        death: "killed when your throat was slit by the Waif"
    },
    {
        question: "What was the name given to Theon Greyjoy by Ramsay Bolton?",
        answer: 'reek',
        death: "flayed by ramsay bolton"
    },
    {
        question: "The Narrow Sea separates Essos and which continent?",
        answer: 'westeros',
        death: "killed by a shadow with Stannis Baratheon\'s face"
    },
    {
        question: "The warrior eunuchs are known as the?",
        answer: 'unsullied',
        death: "killed when your throat was cut by greyworm"
    },
    {
        question: "What is Littlefinger’s sigil?",
        answer: 'mockingbird',
        death: "pushed to death by littlefinger"
    },
    {
        question: "What was High Sparrow's profession before he became the leader of the Faith of the Seven?",
        answer: 'cobbler',
        death: "hanged by the faith militant"
    },
    {
        question: "Whose wife was Tysha?",
        answer: 'Tyrion',
        death: "strangled to death by tyrion lannister"
    }
    
];

var i = 0;
var j = 0;
var handlers = {
  "customIntent": function () {
		   this.response.speak("Would you like to take part in a trial by quiz?").listen();
      this.emit(":responseReady");
   },
   "quizIntent": function () {
       var mydecision = this.event.request.intent.slots.decision.value;
       if(mydecision=='no'||mydecision=='nope'||mydecision=='naah'){
        this.response.speak("Battles have been won against harder odds! Even little Lyanna Mormont has more courage than you.");
        this.emit(":responseReady");
       }
       
       if(i<=got.length){
           var item = got[i].question;
           if(i == 0){
                this.response.speak("Be attentive; just like life, I won't repeat or give you a second chance. Say, The answer is, and the answer. Okay, Here you go; " + item).listen();
	            this.emit(":responseReady");
           }
           else {
	       this.response.speak(item).listen();
	       this.emit(":responseReady");
           }
        }
   },
    
    "answerIntent": function () {  
	        var myanswer = this.event.request.intent.slots.answer.value;
           
	        if(myanswer!=got[i].answer){
	            var x = got[i].answer;
	            var y = got[i].death;
	            var k = j;
	            i=0; j=0;
	            if(k==0){
	               this.response.speak("Wrong Answer. The correct answer is " + x + ". You were " + y + ". You perished in your first battle itself.");
	               this.emit(':responseReady'); 
	            }
	            else if(k==1){
	               this.response.speak("Wrong Answer. The correct answer is " + x + ". You were " + y + ". You perished after " + k + " battle.");
	               this.emit(':responseReady'); 
	            }
	            else {
	                this.response.speak("Wrong Answer. The correct answer is " + x + ". You were " + y + ". You perished after " + k + " battles.");
	                this.emit(':responseReady');
	            }
	        }
	        
	        if(i==got.length){
	            i=0;
	            j=0;
	            this.response.speak("You survived and emerged the ultimate victor, getting them all right. You are the best in all of Planetos.");
	            this.emit(':responseReady');
	        }
	        if(myanswer==got[i].answer){
	        i++;
	        j++;
	        this.response.speak("You survived battle "+ j +". Say ready, when you are, for the next question!").listen();
	        this.emit(':responseReady');
	        }
	        
    },
    'UnhandledIntent': function () {
        this.emit(':ask', 'I don\'t get it! Try saying Alexa, Open quiz of thrones!', 'I don\'t get it! Try saying Alexa, Open quiz of thrones!');
    },
   "LaunchRequest": function () {
    i=0; j=0;
    this.response.speak("Valar Morghulis. You just entered the toughest of all the quizzes in Planetos.").listen("You are supposed to say Valar Dohareis! or ask for help!"); 
    this.emit(":responseReady");
   },
    'AMAZON.HelpIntent': function () {
        this.response.speak('The night is dark and full of terrors, but you will get through it. Welcome to Quiz of Thrones, where you have to answer some of the hardest Planetos Trivia in order to survive and come out the successful victor. Say, The answer is, and the answer. Say ready, when you are.').listen('Battles have been won against harder odds! Say ready!');
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak('Winter is coming. Goodbye!');
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak('Winter is coming. Goodbye!');
        this.emit(':responseReady');
    },

};


// This is the function that AWS Lambda calls every time Alexa uses your skill.
exports.handler = function(event, context, callback) {

// Set up the Alexa object
var alexa = Alexa.handler(event, context); 

// Register Handlers
alexa.registerHandlers(handlers); 

// Start our Alexa code
alexa.execute(); 
  
};
