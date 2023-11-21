const questions = [
    {
        question: "which is largest animal in the world?",
        answers: [
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false},

        ]
    },
    {
        question: "which is smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},

        ]   
    },
    {
        question: "which is smallest city in the world?",
        answers: [
            {text: "Vatican City", correct: true},
            {text: "Bhutan", correct: false},
            {text: "Nepal", correct: false},
            {text: "Sri Lanka", correct: false},

        ]   
    },
    { 
        question: "which is largest desert in the world?",
    answers: [
         {text: "kalahari", correct: false},
        {text: "Gobi", correct: false},
        {text: "Sahara", correct: true},
        {text: "Thar", correct: false},
            
    ]
       
},
{
    question: "Which country drinks the most amount of coffee per person?",
    answers: [
        {text: "Finland", correct: true},
        {text: "Italy", correct: false},
        {text: "colombia", correct: false},
        {text: "singapore", correct: false},
    ]
},
{
    question: "What type of computer was the first laptop computer?",
    answers: [
        {text: "Osborne 1", correct: true},
        {text: " IBM PC ", correct: false},
        {text: "Apple Macintosh", correct: false},
        {text: "Epson HX-20", correct: false},
    ]  
},
{
    question: "Who is considered the founder of modern computer science?",
    answers: [
        {text: "Steve Jobs", correct: false},
        {text: " Alan Turing ", correct: true},
        {text: "Charles Baggage", correct: false},
        {text: "Heman Hollerith", correct: false},
    ]  
},
{
    question: "What year was the iPhone first released in?",
    answers: [
        {text: "2000", correct: false},
        {text: " 2006 ", correct: false},
        {text: "2005", correct: false},
        {text: "2007", correct: true},
    ]  
},
{
    question: "In Ancient Rome, how many days of the week were there?",
    answers: [
        {text: "6", correct: false},
        {text: " 7 ", correct: false},
        {text: "8", correct: true},
        {text: "5", correct: false},
    ]  
},
{
    question: "What was New York original name?",
    answers: [
        {text: "New Liverpool", correct: false},
        {text: "New Amsterdam", correct: true},
        {text: "New Brussels", correct: false},
        {text: "Athens", correct: false},
    ]    
}


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click" , selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
     if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
     }else{
        selectedBtn.classList.add("incorrect");
     }
     Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
     });
     nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
       showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
         
        startQuiz();
    }
});

startQuiz();   
    


 


