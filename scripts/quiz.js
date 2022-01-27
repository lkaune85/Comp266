//This class is used to create a quiz of question objects and
//also use the quiz in various ways

class quiz{
    constructor(quizDifficulty){ 
        this.questionEasy = [];
        //this.questionMedium = [];       
        //this.questionHard = [];       
        this.createQuestions();
        this.quizQuestions = this.randomizeQuestions(quizDifficulty);
    }

    createQuestions(){
        //create/instantiate question object
        //save object into question array of appropriate difficulty
        this.questionEasy[0] = {text:"The answer is A", answers:["A","B","C","D"], trueAnswer:0};
        //repeat for every question
        this.questionEasy[1] = {text:"The answer is B", answers:["A","B","C","D"], trueAnswer:1};
        this.questionEasy[2] = {text:"The answer is C", answers:["A","B","C","D"], trueAnswer:2};
        this.questionEasy[3] = {text:"The answer is D", answers:["A","B","C","D"], trueAnswer:3};
        this.questionEasy[4] = {text:"The answer is 1", answers:["1","B","C","D"], trueAnswer:0};
        this.questionEasy[5] = {text:"The answer is !", answers:["!","B","C","D"], trueAnswer:0};
        this.questionEasy[6] = {text:"The answer is __", answers:[" ","B","C","D"], trueAnswer:0};
        this.questionEasy[7] = {text:"The answer is test", answers:["test","B","C","D"], trueAnswer:0};
        this.questionEasy[8] = {text:"The answer is -1", answers:["-1","B","C","D"], trueAnswer:0};
        this.questionEasy[9] = {text:"The answer is     ", answers:["   ","B","C","D"], trueAnswer:0};
    }

    displayQuestions(){
        var htmlDisplay = '<form name="quizForm" method="post">';
        //for each question
        for(var i = 0; i<this.quizQuestions.length; i++){
            htmlDisplay += this.quizQuestions[i].text+'<br/>';
            htmlDisplay += '<input type="radio" id="qq'+i+'0" name="question'+i+'" value="0"></input>';
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
        //hide quizBegin button !!CAN REMOVE BUTTON FROM FORM
        document.getElementById("quizBegin").style = "display: none;";
        //change element innner html to htmlDisplay
        document.getElementById("quizQuestions").innerHTML = htmlDisplay;
        
    }

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
    }

    //function to randomly select questions from qArray of specified difficulty
    randomizeQuestions(qDifficulty){
        var quizQuestions = [];
        var chooser = [0,1,2,3,4,5,6,7,8,9];
        var index;
        //for quiz length (5)
        for(var i=0;i<5;i++){
            //randomly choose an unchosen question
            index = Math.floor(Math.random()*chooser.length);
            //console.log("Index: "+index)
            //add it to quizQuestions array
            quizQuestions[i] = this.questionEasy[chooser[index]];
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
/*
const myQuiz = new quiz("easy");
console.log(myQuiz.quizQuestions[0].text);
console.log(myQuiz.quizQuestions[1].text);
console.log(myQuiz.quizQuestions[2].text);
console.log(myQuiz.quizQuestions[3].text);
console.log(myQuiz.quizQuestions[4].text);
const usrscr = myQuiz.userScore([0,0,0,0,0]);
console.log(myQuiz.calculateScore(usrscr));
*/
