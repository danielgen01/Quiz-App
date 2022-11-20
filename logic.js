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







//CONDITIONALS 

let randomQuestion = () =>{

    // NUMBER GENERATOR RANDOM 
    let numbers = [0,1,2,3];
    let randoNum = Math.floor(Math.random() * numbers.length) ;


if(randoNum === 0){
  document.getElementById('question').innerHTML = q1.question ; // JS conditional for the question 
  document.getElementById('answer-1').innerHTML = q1.options[0] ; // These are the belonging answers          CORRECT ANSWER
  document.getElementById('answer-2').innerHTML = q1.options[1] ; // These are the belonging answers 
  document.getElementById('answer-3').innerHTML = q1.options[2] ; // These are the belonging answers 
  document.getElementById('answer-4').innerHTML = q1.options[3] ; //These are the belonging answers 

}else if (randoNum === 1){
    document.getElementById('question').innerHTML = q2.question; // JS conditional for the question 
    document.getElementById('answer-1').innerHTML = q2.options[0];// These are the belonging answers 
    document.getElementById('answer-2').innerHTML = q2.options[1];// These are the belonging answers         CORRECT ANSWER
    document.getElementById('answer-3').innerHTML = q2.options[2];// These are the belonging answers 
    document.getElementById('answer-4').innerHTML = q2.options[3];// These are the belonging answers 

}else if(randoNum === 2){
    document.getElementById('question').innerHTML = q3.question; // JS conditional for the question 
    document.getElementById('answer-1').innerHTML = q3.options[0];// These are the belonging answers 
    document.getElementById('answer-2').innerHTML = q3.options[1];// These are the belonging answers 
    document.getElementById('answer-3').innerHTML = q3.options[2];// These are the belonging answers         CORRECT ANSWER
    document.getElementById('answer-4').innerHTML = q3.options[3];// These are the belonging answers                                                            
}else{
    document.getElementById('question').innerHTML = q4.question; // JS conditional for the question    
    document.getElementById('answer-1').innerHTML = q4.options[0];// These are the belonging answers         CORRECT ANSWER
    document.getElementById('answer-2').innerHTML = q4.options[1];// These are the belonging answers 
    document.getElementById('answer-3').innerHTML = q4.options[2];// These are the belonging answers 
    document.getElementById('answer-4').innerHTML = q4.options[3];// These are the belonging answers   
}
};

randomQuestion();

  
// Check which box was clicked by user 

let boxClick1 = document.getElementById('box-1');

boxClick1.addEventListener('click', function stapelCash(){
    console.log('Box 1 was clicked');
});

let boxClick2 = document.getElementById('box-2');

boxClick2.addEventListener('click', function stapelCash(){
    console.log('Box 2 was clicked');
});

let boxClick3 = document.getElementById('box-3');

boxClick3.addEventListener('click', function stapelCash(){
    console.log('Box 3 was clicked');
});

let boxClick4 = document.getElementById('box-4');

boxClick4.addEventListener('click', function stapelCash(){
    console.log('Box 4 was clicked');
});


//Configurate boxShadows when Clicking an answer 
   let checkActiveQuestion = () =>{
    
    let currentQuestion = document.getElementById('question');

    let box1 = document.getElementById('box-1');
    let result1 = document.getElementById('correctornot1');

    let box2 = document.getElementById('box-2');
    let result2 = document.getElementById('correctornot2');

    let box3 = document.getElementById('box-3');
    let result3 = document.getElementById('correctornot3');

    let box4 = document.getElementById('box-4');
    let result4 = document.getElementById('correctornot4');
    
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

   
};

   checkActiveQuestion();


// configurate next button 
let nextButton = document.getElementById('next-btn');
nextButton.addEventListener('click', function handleClick2() {
    if(nextClicks >=3){
        location.href ="result.html";
        
    }else{
    randomQuestion();
    checkActiveQuestion();
    }


} );


//remove boxShadow and p when clicking 'next' button 
let removeBoxShadow = () =>{
    document.getElementById('box-1').style.boxShadow = '1px 1px 1px 1px #000000';
    document.getElementById('correctornot1').style.visibility = 'hidden' ;
    document.getElementById('box-2').style.boxShadow = '1px 1px 1px 1px #000000';
    document.getElementById('correctornot2').style.visibility = 'hidden' ;
    document.getElementById('box-3').style.boxShadow = '1px 1px 1px 1px #000000';
    document.getElementById('correctornot3').style.visibility = 'hidden' ;
    document.getElementById('box-4').style.boxShadow = '1px 1px 1px 1px #000000';
    document.getElementById('correctornot4').style.visibility = 'hidden' ;
}

let counter = document.getElementById('next-btn');
let nextClicks = 0; 

counter.addEventListener("click", () => {
    nextClicks +=1;
    console.log(nextClicks);
});




