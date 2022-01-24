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
        var htmlDisplay = "";
        //for each question
            //add text to htmlDisplay
            //randomize question order and add to htmlDisplay
            //add radio button for each question
        //add quiz submit button
        return htmlDisplay;
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
            //add it to quizQuestions array
            quizQuestions[i] = this.questionEasy[index];
            //remove index for no repeats
            if(index==chooser.length-1){//end of array
                chooser = chooser.slice(0,index);
            }else{//middle/beginning of array
                //console.log(chooser.slice(0,index).concat(chooser.slice(index+1,chooser.length)));
                chooser = chooser.slice(0,index).concat(chooser.slice(index+1,chooser.length));
            }
        }
        return quizQuestions
    }

    userScore(userAnswers){
        var score = [];
        //for each question in quizQuestions
        for(var i=0;i<this.quizQuestions.length;i++){
            //check user answer with trueAnswer of quizQuestions
            if(userAnswers[i]=this.quizQuestions.trueAnswer){
                score[i] = 1;
            }else{
                score[i] = 0;
            }
        }
        return score;
    }

    calculateScore(userScore){
        var totalScore = 0;
        //for each element in userScore
        for(var i = 0; i<userScore.length; i++){
            //add userScore at current element to totalScore
            totalScore+=userScore[i];
        }
        return totalScore;
    }
}

const myQuiz = new quiz("easy");
console.log(myQuiz.quizQuestions[0].text);
console.log(myQuiz.quizQuestions[1].text);
console.log(myQuiz.quizQuestions[2].text);
console.log(myQuiz.quizQuestions[3].text);
console.log(myQuiz.quizQuestions[4].text);