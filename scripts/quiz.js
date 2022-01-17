//This class is used to create a quiz of question objects and
//also use the quiz in various ways

class quiz{
    constructor(quizDifficulty){ 
        this.createQuestions();
        this.quizQuestions = this.randomizeQuestions(quizDifficulty);       
    }

    createQuestions(){
        //create instantiate question object
        //save object into question array of appropriate difficulty
        //repeat for every question
        //return question array
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
        //for quiz length (10)
            //randomly choose an unchosen question
            //add it to quizQuestions array
        return quizQuestions
    }

    userScore(userAnswers){
        var score = [];
        //for each question in qQuestions
            //check user answer with questionTrueAnswer
            //if same set score at current index to 1
            //otherwise set score at current index to 0;
        return score;
    }

    calculateScore(userScore){
        var totalScore = 0;
        //for each element in userScore
            //add userScore at current element to totalScore
        return totalScore;
    }
}