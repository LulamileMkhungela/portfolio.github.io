// Let's have some fun //
$(document).ready(function () {
  // Variables //
  var question1;
  var question2;
  var question3;
  var question4;
  var question5;
  var question6;
  var question7;
  var question8;
  var question9;
  var question10;
  var listOfQuestions = [];
  var triviaQuestions;
  var wins = 0;
  var losses = 0;
  var unanswered = 0;
  var userGuess;
  var timeLeft = 30;

  var timerId;

  resetToBeginning();

  function resetToBeginning() {
    triviaQuestions = [
      {
        //  Questions for Le-Musica Game //
        question: "Who won the 2018 grammy Award for Record of the Year?",
        choices: {
          a: "Cardi B",
          b: "Drake",
          c: "Childish Gambino",
          d: "Post Malone",
        },
        answer: "c",
      },

      {
        question: "Michael Jackson was known as the King of what genre?",
        choices: {
          a: "Rap",
          b: "Rock",
          c: "Disco",
          d: "Pop",
        },
        answer: "d",
      },

      {
        question: "Who was the first Rapper to win an Academy Award (Oscar)?",
        choices: {
          a: "Kendrick Lamar",
          b: "Jay-Z",
          c: "Eminem",
          d: "Tupac",
        },
        answer: "c",
      },

      {
        question:
          "What female holds the Guinness World Records best-selling artist?",
        choices: {
          a: "Madonna",
          b: "Rihanna",
          c: "Mariah Carey",
          d: "Whitney Houston",
        },
        answer: "a",
      },

      {
        question:
          "What song was the MOST watched music videos on YouTube for 2018?",
        choices: {
          a: "Dame Tu Cosita",
          b: "God’s Plan",
          c: "Te Boté (Remix)",
          d: "Girls Like You",
        },
        answer: "c",
      },

      {
        question: "What band named one of their albums: Dark Side of the Moon?",
        choices: {
          a: "The Beatles",
          b: "Pink Floyd",
          c: "Coldplay",
          d: "The Rolling Stones",
        },
        answer: "b",
      },

      {
        question: "Which musician popularized the Reggae Genre?",
        choices: {
          a: "UB40",
          b: "Sean Paul",
          c: "Shaggy",
          d: "Bob Marley",
        },
        answer: "d",
      },

      {
        question: "What city is the birthplace of the Jazz?",
        choices: {
          a: "New Orleans",
          b: "Memphis",
          c: "Detroit",
          d: "Nashville",
        },
        answer: "a",
      },

      {
        question:
          "Do I Wanna Know? is a popular song from what Indie Rock Band?",
        choices: {
          a: "The Killers",
          b: "Arctic Monkeys",
          c: "Radiohead",
          d: "Imagine Dragons",
        },
        answer: "b",
      },

      {
        question: "Who wrote the Christmas Song Feliz Navidad?",
        choices: {
          a: "Ricky Martin",
          b: "Frank Sinatra",
          c: "Jose Feliciano",
          d: "Mariah Carey",
        },
        answer: "c",
      },
    ];

    $("#start").show();

    $("#submit").hide();
    $("#playAgain").hide();
    $("#Results").empty();

    wins = 0;
    losses = 0;
    unanswered = 0;
  }

  function countdown() {
    if (timeLeft == 0) {
      clearTimeout(timerId);
      timeLeft = 30;
      alert("Sorry looks like you DON'T know your Music!");
      displayScore();
    } else {
      $("#timeRemaining").text(timeLeft + " seconds remaining");
      timeLeft--;
    }
  }

  function displayScore() {
    for (var i = 0; i < triviaQuestions.length; i++) {
      userGuess = $(`input[name=${i}]:checked`).val();
      console.log(userGuess);

      if (userGuess === triviaQuestions[i].answer) {
        wins++;
      } else if (typeof userGuess === "undefined") {
        unanswered++;
      } else {
        losses++;
      }
    }

    $("#timeRemaining").hide();
    $("#LeMusicaGame").empty();
    $("#submit").hide();

    var correct = $("<div> Correct : " + wins + "</div>");
    var incorrect = $("<div> Incorrect : " + losses + "</div>");
    var didntAnswer = $("<div> Unanswered : " + unanswered + "</div>");

    $("#Results").append(correct, incorrect, didntAnswer);
    $("#Results").show();
    $("#playAgain").show();
  }

  $(".startButton").on("click", function () {
    $("#timeRemaining").hide();
    timerId = setInterval(countdown, 1000);

    // hide button //
    $(this).hide();

    // show submit button //
    $("#submit").show();

    $("#timeRemaining").show();

    //display questions & use for CSS//
    for (var i = 0; i < triviaQuestions.length; i++) {
      console.log(triviaQuestions[i].question);
      console.log(triviaQuestions[i].choices[0]);
      var newQuestionDiv = $("<div>").addClass("seperateQuestions");
      var newAnswerDiv = $("<div>").addClass("seperateAnswers");
      var newQuestion = i + 1 + ": " + triviaQuestions[i].question + "</br>";
      var listOfAnswers = [];

      newQuestionDiv.attr("name", i);

      for (letter in triviaQuestions[i].choices) {
        listOfAnswers.push(
          `<label> <input type="radio" name="${i}" value="${letter}">  ${triviaQuestions[i].choices[letter]}</label>`
        );
      }
      newQuestionDiv.html(newQuestion);
      newAnswerDiv.html(listOfAnswers);
      $("#LeMusicaGame").append(newQuestionDiv, newAnswerDiv);
    }
  });

  $("#submit").on("click", function () {
    clearTimeout(timerId);

    displayScore();
  });

  $("#playAgain").on("click", function () {
    $("#Results").hide();
    $(this).hide();
    resetToBeginning();
  });
});
