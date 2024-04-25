class Car{
    constructor(make,model,year,isAvailable){

        this.make = make.toString();
        this.model = model.toString();
        this.year = Number(year);
        this.isAvailable= Boolean(isAvailable);
    }

toggleAvailability(){
    console.log(`This car is ${!this.isAvailable}`)
}
}

class Rental extends Car {
    constructor(make,model,year,isAvailable,renterName,rentalStartDate,rentalEndDate){
        super(make,model,year,isAvailable);
        this.renterName = renterName.toString();
        this.rentalStartDate = new Date(rentalStartDate);
        this.rentalEndDate = new Date (rentalEndDate);
    }

calculateRentalDuration(){ 
    console.log(`The rental duration is ${this.rentalEndDate} - ${this.rentalEndDate}`)
}
}




const mazda = new Car('mazda','demio',"800",true);
console.log(mazda);
mazda.toggleAvailability()

const subaru = new Rental ('Subaru','legacy',true,'Amanda',"01/20/2024","01/25/2024");
console.log({subaru})



//2

class Question {
    constructor(text,options,correctAnswer){
        this.text = text.toString();
        this.options = String (options).split("").map((options) =>{
            return Number(options)
        })
        this.correctAnswer = String(correctAnswer);
    }
}
const firstQuestion = new Question("How many objects methods are in JavaScript?",[10,9,2,13,4,5,33,7,8],9)
    console.log({firstQuestion});
    console.log(firstQuestion.text);
    console.log(firstQuestion.options);
    console.log(firstQuestion.correctAnswer);
    // firstQuestion.checkAnswer(3)
    // firstQuestion.checkAnswer(8)
    const secondQuestion = new Question("How many types of cars do we have in the world?",[47,65,60,12,6,1],12)
    console.log({secondQuestion});
    const thirdQuestion = new Question("What is the cleanest city in Kenya?",["Nairobi","Nyeri","Meru","Eldoret", "Karen"],"Nairobi")
    console.log({thirdQuestion});
    const fourthQuestion = new Question("Who is the best  female dancer in Kenya",["Ajib","Nkatha","Kayet","Kendi","Ayra"],"Kayet")
    console.log({fourthQuestion});
    const lastQuestion = [fourthQuestion]
    console.log(lastQuestion);




  
    class Quiz{
    constructor(questions,index,score){
     this.questions = questions
     this.index = index
     this.score = score
    }
    
    addQuestion(lastQuestion){
     this.lastQuestion = lastQuestion
     const allFourQuestions = this.questions.concat(this.lastQuestion)
     console.log({allFourQuestions});
    }

    //nextQuestion: Advances to the next question in the quiz by incrementing the currentQuestionIndex. 

    nextQuestion(){
     const index = `${this.questions}`
     for (let index of `${this.questions}`) {
         index+=`$this.questions`
         return index
    }
    }


    // submitAnswer: Takes a user's answer as a parameter, checks if the answer is correct using the checkAnswer method of
    // the Question class, and updates the score if the answer is correct.

    submitAnswer(answer){
    if (`${this.answer}`!==`${this.correctAnswer}`) {
     score++;
     return score
    }
    else{
     return "wrong choice"
    }
    }
    }
    const quiz = new Quiz([firstQuestion,secondQuestion,thirdQuestion],2,30)
    console.log({quiz});
    quiz.addQuestion(lastQuestion)
    quiz.nextQuestion()
    quiz.submitAnswer(18)





























 //2 


// checkAnswer(answer){
// }
// }

// const question = new Question("How many planets do we have",[2,5,7,9],"9")

// question.checkAnswer()
