//Questions
const q1 = 
{
    question:'What is the capital of France ?',
    options:['Paris', 'Madrid', 'Strasbourg', 'Cologne'],
    answer:0
    };

const q2 = 
    {
        question:'How many buttons or keys has an ordinary english keyboard ? ',
        options:[92, 104, 54, 72],
        answer:1
        };


const q3 =  
    {
            question: 'In which year was JavaScript introduced ?',
            options:[2000, 1999, 1995, 1996],
            answer:2
            };
   
   const q4 =
            {
                question: 'Which of these languages is only useful for frontend development ? ',
                options:['HTML', 'JavaScript', 'Python', 'C#'],
                answer:2
                };

                // get DOM elements 


                let currentQuestion = document.getElementById('question');

                let box1 = document.getElementById('box-1');
                let answer1 = document.getElementById('answer-1')
                let result1 = document.getElementById('correctornot1');
            
                let box2 = document.getElementById('box-2');
                let result2 = document.getElementById('correctornot2');
                let answer2 = document.getElementById('answer-2')
            
                let box3 = document.getElementById('box-3');
                let result3 = document.getElementById('correctornot3');
                let answer3 = document.getElementById('answer-3')
            
                let box4 = document.getElementById('box-4');
                let result4 = document.getElementById('correctornot4');
                let answer4 = document.getElementById('answer-4')






                // get correct answers

                const correctUserChoices = [];

                   
//CONDITIONALS FOR GENERATING RANDOM QUESTION + THE BELONGING ANSWERS

let randomQuestion = () =>{

    // NUMBER GENERATOR RANDOM 
    let numbers = [0,1,2,3];
    let randoNum = Math.floor(Math.random() * numbers.length) ;


if(randoNum === 0){
  currentQuestion.innerHTML = q1.question ; // JS conditional for the question 
  answer1.innerHTML = q1.options[0] ; // These are the belonging answers          CORRECT ANSWER
  answer2.innerHTML = q1.options[1] ; // These are the belonging answers 
  answer3.innerHTML = q1.options[2] ; // These are the belonging answers 
  answer4.innerHTML = q1.options[3] ; // These are the belonging answers 

}else if (randoNum === 1){
    currentQuestion.innerHTML = q2.question; // JS conditional for the question 
    answer1.innerHTML = q2.options[0];// These are the belonging answers 
    answer2.innerHTML = q2.options[1];// These are the belonging answers         CORRECT ANSWER
    answer3.innerHTML = q2.options[2];// These are the belonging answers 
    answer4.innerHTML = q2.options[3];// These are the belonging answers 

}else if(randoNum === 2){
    currentQuestion.innerHTML = q3.question; // JS conditional for the question 
    answer1.innerHTML = q3.options[0];// These are the belonging answers 
    answer2.innerHTML = q3.options[1];// These are the belonging answers 
    answer3.innerHTML = q3.options[2];// These are the belonging answers         CORRECT ANSWER
    answer4.innerHTML = q3.options[3];// These are the belonging answers                                                            
}else{
    currentQuestion.innerHTML = q4.question; // JS conditional for the question    
    answer1.innerHTML = q4.options[0];// These are the belonging answers         CORRECT ANSWER
    answer2.innerHTML = q4.options[1];// These are the belonging answers 
    answer3.innerHTML = q4.options[2];// These are the belonging answers 
    answer4.innerHTML = q4.options[3];// These are the belonging answers   
}
};

randomQuestion();

 //Check current question
 let checkActiveQuestion = () =>{

    if(currentQuestion.innerHTML === q1.question){
        console.log('paris');
        let correctAnswer = q1.options[0];
    }else if(currentQuestion.innerHTML === q2.question){
        console.log('keyboard');
        let correctAnswer = q2.options[1];
    }else if(currentQuestion.innerHTML === q3.question){
        console.log('javascript introduced');
        let correctAnswer = q3.options[2];
    }else if(currentQuestion.innerHTML === q4.question){
        console.log('html ');
        let correctAnswer = q4.options[0];
    }
};

    checkActiveQuestion();


  
// Check which box was clicked by user 

let boxClick1 = box1;

boxClick1.addEventListener('click', function stapelCash(){
    console.log('Box 1 was clicked');
});

let boxClick2 = box2;

boxClick2.addEventListener('click', function stapelCash(){
    console.log('Box 2 was clicked');
});

let boxClick3 = box3;

boxClick3.addEventListener('click', function stapelCash(){
    console.log('Box 3 was clicked');
});

let boxClick4 = box4;

boxClick4.addEventListener('click', function stapelCash(){
    console.log('Box 4 was clicked');
});

    

//Configurate boxShadows when Clicking an answer 
   
    
    
    
if(currentQuestion.innerHTML === q1.question ){
const ansCorrect = document.getElementById('box-1');
ansCorrect.addEventListener('click', function handleClick(){
    result1.style.visibility = 'visible' ;
    box1.style.boxShadow = '5px 5px 5px rgb(0,255,0, 0.5)' ;
});
const ansFalse = document.getElementById('box-2');
ansFalse.addEventListener('click', function handleClick(){
    result2.style.visibility = 'visible' ;
    box2.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
});

const ansFalse2 = document.getElementById('box-3');
ansFalse2.addEventListener('click', function handleClick(){
    result3.style.visibility = 'visible' ;
    box3.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
});

const ansFalse3 = document.getElementById('box-4');
ansFalse3.addEventListener('click', function handleClick(){
    result4.style.visibility = 'visible' ;
    box4.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
});


   }

   



// configurate next button 
let nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', function handleClick2() {
    if(nextClicks >=3){
        location.href ="result.html";
        
    }else{
    randomQuestion();
    
    }


} );


//remove boxShadow and p when clicking 'next' button 
let removeBoxShadow = () =>{
    box1.style.boxShadow = '1px 1px 1px 1px #000000';
    result1.style.visibility = 'hidden' ;
    box2.style.boxShadow = '1px 1px 1px 1px #000000';
    result2.style.visibility = 'hidden' ;
    box3.style.boxShadow = '1px 1px 1px 1px #000000';
    result3.style.visibility = 'hidden' ;
    box4.style.boxShadow = '1px 1px 1px 1px #000000';
    result4.style.visibility = 'hidden' ;
};

let counter = document.getElementById('next-btn');
let nextClicks = 0; 

counter.addEventListener("click", () => {
    nextClicks +=1;
    console.log(nextClicks);
    checkActiveQuestion();
    
});


