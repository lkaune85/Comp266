//This class is used to create qeustion objects

class questionData{
    constructor(qTxt, qAns, qTAns){
        const qText = qTxt;
        const qAnswers = qAns;
        const qTrueAnswer = qTAns;
    }

    getQuestionText(){
        return this.qText;
    }

    getQuestionAnswers(){
        return this.qAnswers;
    }

    getQuestionTrueAnswer(){
        return this.qTrueAnswer;
    }
}