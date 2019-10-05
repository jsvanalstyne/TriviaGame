// PseudoCode
// Create theme for trivia game--DONE
// Create HTML and CSS styling ---DONE--
// Game begins with start button displayed--DONE--
// Once timer is clicked, the user has 30 seconds to select trivia answer
    // Create an on-click funciton using jquery that slideshows to the first question and starts timeer (30 seconds)
    // <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    $(document).ready(function() { 
    var showGif;
    var correctAnswer = [];
    var correctSelection=0;
    var incorrectSelection=0;
    var questionIndex=0;
    var answer; 
    // Create an array of object questions for the user to answer one at a time.
    var tarheelQuestions = [
        {questions: "tarheel question 1",
        answer: {
            a: "answer a1",
            b: "answer b1",
            c: "answer c1",
            d: "answer d1"
        },
        correctAnswer: "answer c"
        },
        {questions: "tarheel question 1",
        answer: {
            a: "answer a2",
            b: "answer b2",
            c: "answer c2",
            d: "answer d2"
        },
        correctAnswer: "answer a "
        },
        {questions: "tarheel question 1",
        answer: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d"
        },
        correctAnswer: "answer d"
        },
        {questions: "tarheel question 1",
        answer: {
            a: "answe ra",
            b: "answer b",
            c: "answer c",
            d: "answer d"
        },
        correctAnswer: "answer c"
        },
        {questions: "tarheel question 1",
        answer: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d"
        },
        correctAnswer: "answer b"
        },
        {questions: "tarheel question 1",
        answer: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d"
        },
        correctAnswer: "answer a"
        },
        {questions: "tarheel question 1",
        answer: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d"
        },
        correctAnswer: "answer a"
        },
        {questions: "tarheel question 1",
        answer: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d:"answer d"
        },
        correctAnswer: "answer b"
        },
        {questions: "tarheel question 1",
        answer: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d"

        },
        correctAnswer: "answer c"
        },
        {questions: "tarheel question 1",
        answer: {
            a: "answer a",
            b: "answer b",
            c: "answer c",
            d: "answer d"
        },
        correctAnswer: "answer d"
        }
    ];
    // $(".answerChoices").hide();
    function asking(){
        var answers;
         if(questionIndex<tarheelQuestions.length){
             console.log("asking");
            for(var i=0; i<tarheelQuestions[0].questions.length; i++){
         console.log("clickStart");
         
         }
         $("#question").text (tarheelQuestions[questionIndex].questions);
         for(var i)
         $(".answerChoices").text(tarheelQuestions[questionIndex].answer)
         
         $(".answerChoices").click(tarheelQuestions[questionIndex].answer);
        //  answers = answer.values(tarheelQuestions);
        //     console.log("answer displayed");
        
         console.log("questions");
           
            }
        
    }
    
     $("#start").click(function(){
         var output=[];
         console.log("click");
         $("#start").hide();
         asking();
        //  $(".answerChoices").unhide();

       
     });
     
// Once a selection is made, the user answer is compared with the correct answer. 
// If correct answer is made, add a point to the correct variable
// If answer is incorrect, add a point to the inccorect variable
// Either way, a gif of the correct answer is displayed for 5 seconds.--Think Slideshow--
// Next question is displayed and the comparisons/score additions repeat. 
// Game ends with a correct answers versus incorrect answers displayed. 
// The game does not immediately start over, instead asks the user to start over. 

    });
