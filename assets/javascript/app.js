// PseudoCode
// Create theme for trivia game--DONE
// Create HTML and CSS styling ---DONE--
// Game begins with start button displayed--DONE--
// Once timer is clicked, the user has 30 seconds to select trivia answer
    // Create an on-click funciton using jquery that slideshows to the first question and starts timeer (30 seconds)
    
    $(document).ready(function() { 
    var correctSelection=0;
    var incorrectSelection=0;
    var questionIndex=0;
    var time= 15000;
    var userClck;
    var correctAnswer;
   
    
    // Create an array of object questions for the user to answer one at a time.
    var friendsQuestions = [
        {question: "Who does Monica marry?",
        answer: ["Joey", "Richard", "Chandler", "Ross"],
        correctAnswer: "Chandler",
        image:"<img src='assets/images/friends1.gif'>"
        },
        {question: "What is Rachel's middle name?",
        answer: ["Regina", "Karen", "Ellen", "Bethany"],
        correctAnswer: "Karen",
        image:"<img src='assets/images/friends2.gif'>"
        },
        {question: "Who was Chandler roommates with before Joey?",
        answer: ["Gunther", "Tom", "Ross", "Kip"],
        correctAnswer: "Kip",
        image:"<img src='assets/images/friends3.gif'>"
        },
        {question: "wWhat is Phoebe's fake name?",
        answer: ["Regina Phlange", "Betty Davis", "Karen Tarsal", "Sandra Dee"],
        correctAnswer: "Regina Phlange",
        image:"<img src='assets/images/friends4.gif'>"
        },
        {question: "Who told Rachel that Ross had slept with the copy girl?",
        answer: ["Joey", "Gunther", "Chandler", "Monica"],
        correctAnswer: "Gunther",
        image:"<img src='assets/images/friends1.gif'>"
        },
        {question: "Who does Monica marry?",
        answer: ["Joey", "Richard", "Chandler", "Ross"],
        correctAnswer: "Chandler",
        image:"<img src='assets/images/friends1.gif'>"
        },
        {question: "Who does Monica marry?",
        answer: ["Joey", "Richard", "Chandler", "Ross"],
        correctAnswer: "Chandler",
        image:"<img src='assets/images/friends1.gif'>"
        },
        {question: "Who does Monica marry?",
        answer: ["Joey", "Richard", "Chandler", "Ross"],
        correctAnswer: "Chandler",
        image:"<img src='assets/images/friends1.gif'>"
        },
        {question: "Who does Monica marry?",
        answer: ["Joey", "Richard", "Chandler", "Ross"],
        correctAnswer: "Chandler",
        image:"<img src='assets/images/friends1.gif'>"
        },
        {question: "Who does Monica marry?",
        answer: ["Joey", "Richard", "Chandler", "Ross"],
        correctAnswer: "Chandler",
        image:"<img src='assets/images/friends1.gif'>"
        } 
       
    ];
    
    function asking(){
        $("#gameOn").append("<p><strong>"+ friendsQuestions[questionIndex].question+ 
        "</p>")

        
        for(var i=0; i<friendsQuestions[questionIndex].answer.length; i++){
            $(".answerChoices").append("<button><p>" +friendsQuestions[questionIndex].answer[i]+ "</button></p>");
            // $(".answerChoices").html("<br>");
            console.log("answerdisplayed");
            // $("#answerChoice0").text(friendsQuestions[questionIndex].answer[0]);
            // $("#answerChoice1").text(friendsQuestions[questionIndex].answer[1]);
            // $("#answerChoice2").text(friendsQuestions[questionIndex].answer[2]);
            // $("#answerChoice3").text(friendsQuestions[questionIndex].answer[3]);

        }
        ;}
   
    
                   
     function userWin(){
         $("#gameOn").append("OH. MY. GAWWDDD! You got it correct!!");
         correctSelection ++;
        //  userClick = friendsQuestions[questionIndex].correctAnswer;
         $("#image-holder").append("The correct answer was " + friendsQuestions[questionIndex].correctAnswer + friendsQuestions[questionIndex].image);
         setTimeout(nextQuestion, 5000);
         questionIndex ++; 
     }   

     function userLoss(){
         $("#gameOn").append("Could you be anymore wrong?")
         incorrectSelection ++;
         $("#gameOn").append("The correct answer was " + friendsQuestions[questionIndex].correctAnswer + friendsQuestions[questionIndex].image);
         
         setTimeout(nextQuestion, 5000);
         questionIndex ++;
     }
     function outOfTime(){
         if(time===0){
             $("#gameOn").append("You weren't there for me!")
             incorrectSelection ++;
             $("#gameOn").append("The correct answer was " + friendsQuestions[questionIndex].correctAnswer + friendsQuestions[questionIndex].image);
             setTimeout(nextQuestion, 5000);
             questionIndex++;
         }
     }
     function nextQuestion(){
        $("#gameOn").append("<p><strong>"+ friendsQuestions[questionIndex].question+ 
        "</p>")
        for(var i=0; i<friendsQuestions[questionIndex].answer.length; i++){
            $(".answerChoices").prepend("<button><p>" +friendsQuestions[questionIndex].answer[i]+ "</button></p>");
            // $(".answerChoices").html("<br>");
            console.log("answerdisplayed");
        }

     }
     function timer(){
        intervalId = setInterval(decrement, 15000);
     }
    //  function restartGame(){
    //     $("#gameOn").html("<p>Correct answers: "+ correctSelection +"</p><p>Incorrect answers: "+ incorrectSelection +"</p>")
    //     $("#gameOn").html("<p> Press Start to play")
    //     $("#start").show();
    //  }
    //  restartGame;
           
       
        
    
     $("#start").click(function(){
        //  var output=[];
         console.log("click");
         $("#start").hide();
         asking(); 
        //  timer();
        //  setTimeout(nextQuestion, 5000);   
               
     
     
        
     })
     $(".answerChoices").click(function(){
        userClick= $(this).val();
        console.log("buttonclicked");
        console.log(this);
     
        if(userClick === friendsQuestions[questionIndex].correctAnswer){
            console.log(friendsQuestions[questionIndex].correctAnswer);
            userWin();
        }
        else if ( time===0){
            outOfTime();
        }
        else{
            userLoss();
        }    
        nextQuestion();
    });
    
     
// Once a selection is made, the user answer is compared with the correct answer. 
// If correct answer is made, add a point to the correct variable
// If answer is incorrect, add a point to the inccorect variable
// Either way, a gif of the correct answer is displayed for 5 seconds.--Think Slideshow--
// Next question is displayed and the comparisons/score additions repeat. 
// Game ends with a correct answers versus incorrect answers displayed. 
// The game does not immediately start over, instead asks the user to start over. 
});
 
