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
        options:[92, 101, 54, 72],
        answer:1
        };


const q3 =  
    {
            question: 'In which year was JavaScript invented ?',
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
           

    // declare next button 
    let nextButton = document.getElementById('next-btn');

    // Gray out next btn || func

    let disableNextButton = () =>{
    nextButton.style.backgroundColor = 'grey';
    nextButton.setAttribute('disabled', 'true');
    nextButton.style.cursor = 'not-allowed';
    nextButton.title = 'Please choose an answer before going to the next question'

    }

    // enable next button func


    let enableNextButton = () =>{
    nextButton.style.backgroundColor = '#e6cb04';
    nextButton.removeAttribute('disabled', 'false');
    nextButton.style.cursor = 'pointer';

    };
    

    //Configurate question Attributes depending on which number was generated

    let questionOneAttributes = () =>{

        currentQuestion.innerHTML = q1.question ; // JS conditional for the question 
        answer1.innerHTML = q1.options[0] ; // These are the belonging answers          CORRECT ANSWER
        answer2.innerHTML = q1.options[1] ; // These are the belonging answers 
        answer3.innerHTML = q1.options[2] ; // These are the belonging answers 
        answer4.innerHTML = q1.options[3] ; // These are the belonging answers 
        result1.innerHTML = 'You got it ! Nice' + ' <i class="fa-solid fa-hands-clapping"></i>';
        result2.innerHTML = 'Im sorry, youre wrong. Try again';
        result3.innerHTML = 'Im sorry, youre wrong. Try again';
        result4.innerHTML = 'Im sorry, youre wrong. Try again';
        box1.addEventListener('click', function(){
          box1.style.boxShadow = '5px 5px 5px rgb(0,255,0, 0.5)' ;
          result1.style.visibility = 'visible' ;
          enableNextButton();
          correctUserChoices.push(1);
          })
          box2.addEventListener('click', function(){
              box2.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
              result2.style.visibility = 'visible' ;
              enableNextButton();
              })
              box3.addEventListener('click', function(){
                  box3.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
                  result3.style.visibility = 'visible' ;
                  enableNextButton();
                  })
      
                  box4.addEventListener('click', function(){
                      box4.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
                      result4.style.visibility = 'visible' ;
                      enableNextButton();
                      })


    };

    let questionTwoAttributes = () =>{

    currentQuestion.innerHTML = q2.question; // JS conditional for the question 
    answer1.innerHTML = q2.options[0];// These are the belonging answers 
    answer2.innerHTML = q2.options[1];// These are the belonging answers         CORRECT ANSWER
    answer3.innerHTML = q2.options[2];// These are the belonging answers 
    answer4.innerHTML = q2.options[3];// These are the belonging answers 
    result1.innerHTML = 'Im sorry, youre wrong. Try again';
    result2.innerHTML = 'You got it ! Nice'  + ' <i class="fa-solid fa-hands-clapping"></i>';
    result3.innerHTML = 'Im sorry, youre wrong. Try again';
    result4.innerHTML = 'Im sorry, youre wrong. Try again';

    box1.addEventListener('click', function(){
        box1.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
        result1.style.visibility = 'visible' ;
        enableNextButton();
        })
        box2.addEventListener('click', function(){
            box2.style.boxShadow = '5px 5px 5px rgb(0,255,0, 0.5)' ;
            result2.style.visibility = 'visible' ;
            enableNextButton();
            correctUserChoices.push(1);
            })
            box3.addEventListener('click', function(){
                box3.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
                result3.style.visibility = 'visible' ;
                enableNextButton();
                })
    
                box4.addEventListener('click', function(){
                    box4.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
                    result4.style.visibility = 'visible' ;
                    enableNextButton();
                    })




    };

    let questionThreeAttributes = () =>{
        currentQuestion.innerHTML = q3.question; // JS conditional for the question 
        answer1.innerHTML = q3.options[0];// These are the belonging answers 
        answer2.innerHTML = q3.options[1];// These are the belonging answers 
        answer3.innerHTML = q3.options[2];// These are the belonging answers         CORRECT ANSWER
        answer4.innerHTML = q3.options[3];// These are the belonging answers       
        result1.innerHTML = 'Im sorry, youre wrong. Try again';
        result2.innerHTML = 'Im sorry, youre wrong. Try again';
        result3.innerHTML = 'You got it ! Nice'  + ' <i class="fa-solid fa-hands-clapping"></i>' ;
        result4.innerHTML = 'Im sorry, youre wrong. Try again';            
        
        box1.addEventListener('click', function(){
            box1.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
            result1.style.visibility = 'visible' ;
            enableNextButton();
                    })
            box2.addEventListener('click', function(){
                box2.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
                result2.style.visibility = 'visible' ;
                enableNextButton();
                })
                box3.addEventListener('click', function(){
                    box3.style.boxShadow = '5px 5px 5px rgb(0,255,0, 0.5)' ;
                    result3.style.visibility = 'visible' ;
                    enableNextButton();
                    correctUserChoices.push(1);
                    })
        
                    box4.addEventListener('click', function(){
                        box4.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
                        result4.style.visibility = 'visible' ;
                        enableNextButton();
                        })
    };


    let questionFourAttributes = () =>{

    currentQuestion.innerHTML = q4.question; // JS conditional for the question    
    answer1.innerHTML = q4.options[0];// These are the belonging answers         CORRECT ANSWER
    answer2.innerHTML = q4.options[1];// These are the belonging answers 
    answer3.innerHTML = q4.options[2];// These are the belonging answers 
    answer4.innerHTML = q4.options[3];// These are the belonging answers   
    result1.innerHTML = 'You got it ! Nice'  + ' <i class="fa-solid fa-hands-clapping"></i>';
    result2.innerHTML = 'Im sorry, youre wrong. Try again';
    result3.innerHTML = 'Im sorry, youre wrong. Try again';
    result4.innerHTML = 'Im sorry, youre wrong. Try again';


    box1.addEventListener('click', function(){
        box1.style.boxShadow = '5px 5px 5px rgb(0,255,0, 0.5)' ;
        result1.style.visibility = 'visible' ;
        enableNextButton();
        correctUserChoices.push(1);
        })


        box2.addEventListener('click', function(){
            box2.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
            result2.style.visibility = 'visible' ;
            enableNextButton();
            })


            box3.addEventListener('click', function(){
                box3.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
                result3.style.visibility = 'visible' ;
                enableNextButton();
                })

    
                box4.addEventListener('click', function(){
                    box4.style.boxShadow = '5px 5px 5px rgb(255,0,0, 0.5)' ;
                    result4.style.visibility = 'visible' ;
                    enableNextButton();
                    })
                  

    };
    

    let prevNumbers = [];
    let numbers = [0,1,2,3];

   
    //CONDITIONALS FOR GENERATING RANDOM QUESTION + THE BELONGING ANSWERS

    let randomQuestion = () =>{
            

    // NUMBER GENERATOR RANDOM || QUESTION GENERATOR 
        
    
    let randoNum = Math.floor(Math.random() * numbers.length) ;

                  
        for(let i = 0 ; i < numbers.length; i++){
            for(let j = 0 ; j < prevNumbers.length; j++){
                if(randoNum === prevNumbers[j]){
                    console.log('MATCH');      
                    randomQuestion();
                    return;                                                   
                    
                }
            }
        }
       
        
    if       (randoNum === 0){       
    questionOneAttributes();
    }else if (randoNum === 1){    
    questionTwoAttributes();
    }else if (randoNum === 2){
    questionThreeAttributes(); 
    }else{
    questionFourAttributes();
    }
  

    if(prevNumbers.includes(randoNum)){
        return
    }else{
        prevNumbers.push(randoNum);
    }
        console.log(prevNumbers);  
};
    

disableNextButton();
randomQuestion();


//remove boxShadow and 'p'(result) when clicking 'next' button 
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


    // Configurate next button
    nextButton.addEventListener('click', function handleClick() {

    if(nextClicks >=3){
        location.href ="result.html";
        
    }else{
        
        randomQuestion();
        disableNextButton();
    
    }


} );



// configurate counter for clicked 'next button'  
let counter = document.getElementById('next-btn');
let nextClicks = 0; 

counter.addEventListener("click", () => {
    
    nextClicks +=1;
    console.log(nextClicks);
    
    
    
});




