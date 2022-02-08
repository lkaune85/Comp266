//This class is used to create a quiz of question objects and
//also use the quiz in various ways

class quiz{
    constructor(){
        //quiz question arrays
        this.questionEasy = [];
        this.questionMedium = [];       
        this.questionHard = [];
        //used to initialize question arrays       
        this.createQuestions();
        //save user selected difficulty
        this.difficulty = document.forms["quizStart"]["difficulty"].value;
        //call randomizeQuestions and save the resulting question array
        this.quizQuestions = this.randomizeQuestions(this.difficulty);
    }

    //initializes all question arrays
    createQuestions(){
        //create/instantiate question object
        //save object into question array of appropriate difficulty
        this.questionEasy[0] = {text:"What is a cards cost called?",
        answers:["Mana Value","Gem Cost","Gold Value","Color Cost"], trueAnswer:0};
        //repeat for every question
        this.questionEasy[1] = {text:"Name the mechanic: Excess combat damage is dealt to the defending creatures controller.", 
        answers:["Firststrike","Trample","Lifelink","Deathtouch"], trueAnswer:1};
        this.questionEasy[2] = {text:"What is the starting life-total in Standard Magic games", 
        answers:["15","30","20","40"], trueAnswer:2};
        this.questionEasy[3] = {text:"What is the first phase of a turn?", 
        answers:["Upkeep","Main Phase One","End Step","Untap"], trueAnswer:3};
        this.questionEasy[4] = {text:"What is the maximum hand-size?", 
        answers:["7","10","5","3"], trueAnswer:0};
        this.questionEasy[5] = {text:"During what phase can you cast Sorcery spells?", 
        answers:["Main Phase","End Step","Upkeep","Combat"], trueAnswer:0};
        this.questionEasy[6] = {text:"What happens when you mulligan a hand?", 
        answers:["You put your current hand on the bottom of your library and draw 7 new cards",
        "You discard your current hand and draw a hand of cards with one less card in it than the previous mulligan",
        "You shuffle your hand back into your library, draw a new hand of 7 cards, and put a number of cards equal to the number of times you mulliganed on the bottom of you library"
        ,"You shuffle your hand back into your library. draw a new hand of cards with one less card for each time you mulliganed"], 
        trueAnswer:2};
        this.questionEasy[7] = {text:"Can you cast any kind of spells on your opponents turn?", 
        answers:["Yes, you can always any kind of spell","No, you can never casts spells on your opponents turn",
        "Yes, but only if they are instants or have flash","Yes, except for sorceries"], trueAnswer:2};
        this.questionEasy[8] = {text:"How many of the same card are you allowed in a Standard Magic deck?", 
        answers:["1","4","2","Any number"], trueAnswer:1};
        this.questionEasy[9] = {text:"How many cards in total are allowed in a Standard Magic deck?", 
        answers:["At least 60","100 or more, but no duplicates except for basic lands","61","All of the above"], trueAnswer:3};

        //medium questions
        this.questionMedium[0] = {text:"Medium The answer is A", answers:["A","B","C","D"], trueAnswer:0};
        this.questionMedium[1] = {text:"Medium The answer is B", answers:["A","B","C","D"], trueAnswer:1};
        this.questionMedium[2] = {text:"Medium The answer is C", answers:["A","B","C","D"], trueAnswer:2};
        this.questionMedium[3] = {text:"Medium The answer is D", answers:["A","B","C","D"], trueAnswer:3};
        this.questionMedium[4] = {text:"Medium The answer is 1", answers:["1","B","C","D"], trueAnswer:0};
        this.questionMedium[5] = {text:"Medium The answer is !", answers:["!","B","C","D"], trueAnswer:0};
        this.questionMedium[6] = {text:"Medium The answer is __", answers:["__","B","C","D"], trueAnswer:0};
        this.questionMedium[7] = {text:"Medium The answer is test", answers:["test","B","C","D"], trueAnswer:0};
        this.questionMedium[8] = {text:"Medium The answer is -1", answers:["-1","B","C","D"], trueAnswer:0};
        this.questionMedium[9] = {text:"Medium The answer is     ", answers:["   ","B","C","D"], trueAnswer:0};

        //hard questions
        this.questionHard[0] = {text:"HARD The answer is A", answers:["A","B","C","D"], trueAnswer:0};
        this.questionHard[1] = {text:"HARD The answer is B", answers:["A","B","C","D"], trueAnswer:1};
        this.questionHard[2] = {text:"HARD The answer is C", answers:["A","B","C","D"], trueAnswer:2};
        this.questionHard[3] = {text:"HARD The answer is D", answers:["A","B","C","D"], trueAnswer:3};
        this.questionHard[4] = {text:"HARD The answer is 1", answers:["1","B","C","D"], trueAnswer:0};
        this.questionHard[5] = {text:"HARD The answer is !", answers:["!","B","C","D"], trueAnswer:0};
        this.questionHard[6] = {text:"HARD The answer is __", answers:["__","B","C","D"], trueAnswer:0};
        this.questionHard[7] = {text:"HARD The answer is test", answers:["test","B","C","D"], trueAnswer:0};
        this.questionHard[8] = {text:"HARD The answer is -1", answers:["-1","B","C","D"], trueAnswer:0};
        this.questionHard[9] = {text:"HARD The answer is     ", answers:["   ","B","C","D"], trueAnswer:0};
    }

    //tells html page how to display questions and adds a quiz submit button to the page
    displayQuestions(){
        var htmlDisplay = '<form name="quizForm" method="post">';
        //for each question
        for(var i = 0; i<this.quizQuestions.length; i++){
            htmlDisplay += '<strong>'+this.quizQuestions[i].text+'</strong><br/>';
            htmlDisplay += '<input type="radio" checked=true id="qq'+i+'0" name="question'+i+'" value="0"></input>';
            htmlDisplay += '<label for="qq'+i+'0" id="ql'+i+'0">'+this.quizQuestions[i].answers[0]+'</label><br/>';
            htmlDisplay += '<input type="radio" id="qq'+i+'1" name="question'+i+'" value="1"></input>';
            htmlDisplay += '<label for="qq'+i+'1" id="ql'+i+'1">'+this.quizQuestions[i].answers[1]+'</label><br/>';
            htmlDisplay += '<input type="radio" id="qq'+i+'2" name="question'+i+'" value="2"></input>';
            htmlDisplay += '<label for="qq'+i+'2" id="ql'+i+'2">'+this.quizQuestions[i].answers[2]+'</label><br/>';
            htmlDisplay += '<input type="radio" id="qq'+i+'3" name="question'+i+'" value="3"></input>';
            htmlDisplay += '<label for="qq'+i+'3" id="ql'+i+'3">'+this.quizQuestions[i].answers[3]+'</label><br/>';
        }
        //add quiz submit input
        htmlDisplay += '<input type="button" id="submitQuiz" value="Submit Quiz" onclick="currentQuiz.displayQuestionsAndAnswers()"></input>'
        htmlDisplay += '</form><br/>';
        document.getElementById("quizStart").style = "display: none;";
        //change element innner html to htmlDisplay
        document.getElementById("quizQuestions").innerHTML = htmlDisplay;
        
    }

    //modifies page to indicate correct/incorrect answers, calculate/display user score, and modify submit quiz button to be used to take another quiz
    displayQuestionsAndAnswers(){
        //set userScore to 0
        var userScore = 0;
        var curr;
        //get userAnswers for each question
        for(var i = 0; i<this.quizQuestions.length; i++){
            //get value from radio button based on name
            curr = document.forms["quizForm"]["question"+i].value;
            //if it matches the true answer for the question
            if(curr==this.quizQuestions[i].trueAnswer){
                //set question highlight to green
                var elementID = "ql"+i.toString()+curr.toString();
                document.getElementById(elementID).style = "background-color: green";
                //increment userScore
                userScore++;
            }else{
                //set question highlight to red
                var elementIDWrong = "ql"+i.toString()+curr.toString();
                document.getElementById(elementIDWrong).style = "background-color: red";
                //indicate correct answer and users inccorect answer
                var elementIDRight = "ql"+i.toString()+this.quizQuestions[i].trueAnswer.toString();
                document.getElementById(elementIDRight).style = "background-color: green";
            }
                
        }
        //display user score at bottom of page
        document.getElementById("score").innerHTML = "You got "+userScore+" out of "+(this.quizQuestions.length);
        document.getElementById("submitQuiz").value = "Take Another Quiz";
        document.getElementById("submitQuiz").setAttribute("onclick","location.reload()");
    }

    //function to randomly select questions from the array of specified difficulty
    randomizeQuestions(){
        var quizQuestions = [];
        var chooser = [0,1,2,3,4,5,6,7,8,9];
        var index;
        //for quiz length (5)
        for(var i=0;i<5;i++){
            //randomly choose an unchosen question
            index = Math.floor(Math.random()*chooser.length);
            //console.log("Index: "+index)
            //add it to quizQuestions array
            if(this.difficulty == "easy"){
                quizQuestions[i] = this.questionEasy[chooser[index]];
            }else if(this.difficulty == "medium"){
                quizQuestions[i] = this.questionMedium[chooser[index]];
            }else{
                quizQuestions[i] = this.questionHard[chooser[index]];
            }
            //remove index for no repeats
            if(index==chooser.length-1){//end of array
                //console.log("Removing End: "+chooser[index]);
                chooser = chooser.slice(0,index);
                //console.log(chooser);
            }else{//middle/beginning of array
                //console.log("Removing middle/beginning: "+chooser[index]);
                chooser = chooser.slice(0,index).concat(chooser.slice(index+1,chooser.length));
                //console.log(chooser);
            }
        }
        return quizQuestions
    }
}
