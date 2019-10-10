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
    var number= 15;
    var timerRunning= false;
    var timerInterval;
    // var userClck; 
    
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
        // {question: "Chanlder's previous roomate was...",
        // answer: ["Gunther", "Tom", "Ross", "Kip"],
        // correctAnswer: "Kip",
        // image:"<img src='assets/images/friends3.gif'>"
        // },
        // {question: "wWhat is Phoebe's fake name?",
        // answer: ["Regina Phalange", "Betty Davis", "Karen Tarsal", "Sandra Dee"],
        // correctAnswer: "Regina Phalange",
        // image:"<img src='assets/images/friends4.gif'>"
        // },
        // {question: "Who told Rachel that Ross had cheated?",
        // answer: ["Joey", "Gunther", "Chandler", "Monica"],
        // correctAnswer: "Gunther",
        // image:"<img src='assets/images/friends5.gif'>"
        // },
        // {question: "Joey worked at which casino?",
        // answer: ["Caesars Palace", "Taj Mahal", "Bellagio", "Mandalay Bay"],
        // correctAnswer: "Caesars Palace",
        // image:"<img src='assets/images/friends6.gif'>"
        // },
        // {question: "What was Rachel's first job after Central Perk?",
        // answer: ["Ralph Lauren", "Bloomingdale's", "Fortunata Fashions", "Macy's"],
        // correctAnswer: "Fortunata Fashions",
        // image:"<img src='assets/images/friends7.gif'>"
        // },
        // {question: "What was the name of Pheobe's roommate?",
        // answer: ["Denise", "Sharon", "Katie", "Alice"],
        // correctAnswer: "Denise",
        // image:"<img src='assets/images/friends8.gif'>"
        // },
        // {question: "Where did Ross take Rachel on their first date?",
        // answer: ["Central Park", "Dinner", "The Museum", "The movies"],
        // correctAnswer: "The movies",
        // image:"<img src='assets/images/friends9.gif'>"
        // },
        // {question: "What Monica's apartment number?",
        // answer: ["20", "21", "22", "23"],
        // correctAnswer: "20",
        // image:"<img src='assets/images/friends10.gif'>"
        // } 
       
    ];

    //Funciton to create and display question and the appropriate answers
    function asking(){
        if(questionIndex>friendsQuestions.length-1){
            endOfGame();
            }   
        $("#questions").html("<p>"+ friendsQuestions[questionIndex].question+ 
        "</p>");

        // Loop generating answers with according to the question index

        for(var i=0; i<friendsQuestions[questionIndex].answer.length; i++){
            $(".answerChoices").append("<button><p class='choice'>" +friendsQuestions[questionIndex].answer[i]+ "</button></p>");
            console.log("answerdisplayed");
        }
        $("#timer").html("<p> Time remaining: " + 15 + "</p>");
        questionTimer();   
        
       
    }
    //Function to clear divs stated globally
    function clearDivs (){
        $("#questions").html("");
        $(".answerChoices").html("");
        $("#img").html("");

    }
    // Time countdown function
    
    //Function to used to display a notification to the user that the answer selected was correct and display the correlating image  
     function userWin(){
        //  
         $("#questions").text("OH. MY. GAWWDDD! You got it correct!!");
         correctSelection ++;
         $(".answerChoices").html("<p class='answerLoop'>The correct answer was " + friendsQuestions[questionIndex].correctAnswer + "</p>"+ "<p>" + friendsQuestions[questionIndex].image+"</p>");
         setTimeout(nextQuestion, 5000);
     }   
     //Function to used to display a notification to the user that the answer selected was incorrect and display the correlating image  
     function userLoss(){
         $("#questions").text("Could you be anymore wrong?")
         incorrectSelection ++;
         $(".answerChoices").html("<p class='answerLoop'>The correct answer was " + friendsQuestions[questionIndex].correctAnswer + "</p>"+ "<p id='img'>" + friendsQuestions[questionIndex].image+"</p>");
         
         setTimeout(nextQuestion, 5000);
     }
     //Function to used to display a notification to the user that they ran out of time and display the correlating image  
     function outOfTime(){
             $("#questions").text("You weren't there for me!")
             incorrectSelection ++;
             $(".answerChoices").html("<p class='answerLoop'>The correct answer was " + friendsQuestions[questionIndex].correctAnswer + "</p>"+ "<p>" + friendsQuestions[questionIndex].image+"</p>");
             setTimeout(nextQuestion, 5000);            
         
     }
    //  Function to transition to next question after displaying the correct answer and image. 
     function nextQuestion(){
        // clear out divs (image and win/loss/outoftime)
        clearDivs();
        questionIndex ++;
        asking();
     }

     function questionTimer(){
         if(!timerRunning){
             timerRunning=true;
             timerInterval = setInterval(countdown, 1000);
         }
        
     }
     function countdown(){
         number--;

        $("#timer").html("<p> Time remaining: " + number + "</p>");
        if (number === 0) {
            stopTimer();
          }
     }
     function stopTimer(){
         timerRunning=false;
        clearInterval(timerInterval);
        number= 15;
        outOfTime();
     }
     
     function restartGame(){
        correctSelection=0;
        incorrectSelection=0;
        questionIndex=0;
        number= 15;
     }

     function endOfGame(){
         $("#questions").html("<p> GAME OVER</p>"+ "<p>"+ "<p> Incorrectly answered: "+incorrectSelection +"</p>"+ "<p> Correctly answered: "+ correctSelection+ "</p>" + "<p> To play again, press START!</p>")
         $("#start").show();
         restartGame();

     }  

    // Trying to get the theme song to play when game loads. Just for fun. 
     function themeSong(){
        var friendsTheme = "assets/images/friends.mp3"
        var songPlay = $("#songPlay")
        songPlay.attr("src", friendsTheme);
        songPlay.play();
     }
// ------------------------Main Game---------------------------------------
    // A function to start the game. User clicks the button and the start button is hidden allowing questions to be displayed. 
   
    //  themeSong();
     $("#start").click(function(){
         console.log("click");
         $("#start").hide();
         asking();          
     })

    //  Once a user selects their anser it is then compared against the correct ansewr and the appropriate function is ran
   
     $(document).on("click", ".choice", function(){ 
        var userClick= $(this).text();
        console.log(userClick);
        stopTimer();
        if(userClick === friendsQuestions[questionIndex].correctAnswer){
            console.log(friendsQuestions[questionIndex].correctAnswer);
            userWin();
        }
        else if (number===0){
            outOfTime();
        }
        else{
            userLoss();
        };  
       
    });
    // endOfGame();
    


    
     

// Next question is displayed and the comparisons/score additions repeat. 
// Game ends with a correct answers versus incorrect answers displayed. 
// The game does not immediately start over, instead asks the user to start over. 
});
 
