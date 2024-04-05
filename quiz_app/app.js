var questions = [
    {
        question: "The full form of CSS is: ",
        options: [
            "Cascading Style Sheet",
            "coloured Special Sheet",
            "color and style sheet",
            "None of the above"
        ],
        answer: 0,
    },
    {
        question: "The < hr > tag in HTML is used for ",
        options: ["new line ", " vertical ruler ", "new paragraph", "horizontal ruler"],
        answer: 3,
    },
    {
        question: "Which of the following tag is used to insert a line-break in HTML ",
        options: [
            "< br >", 
            "< a >",
            "< pre >",
            "< b >"
        ],
        answer: 0,
    },
    {
        question: "The property in CSS used to change the background color of an element is  ",
        options: [
            "bgcolor",
            "color ",
            "background-color",
            "All of the above"
        ],
        answer: 2,
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is ",
        options: [
            "Head, Title, HTML, body",
            "HTML, Body, Title, Head",
            "XTML, Head, Title, Body",
            "HTML, Head, Title, Body"
        ],
        answer: 3,
    },
];

var currentQuestion = 0;
var score = 0;

function loadQuestion() {
    var questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = "<p>" + questions[currentQuestion].question + "</p>";

    // Generate an unordered list for options
    var optionsHTML = "<ul>";
    for (var i = 0; i < questions[currentQuestion].options.length; i++) {
        optionsHTML += '<li><label><input type="radio" name="answer" value="' + i + '">' + questions[currentQuestion].options[i] + '</label></li>';
    }
    optionsHTML += "</ul>";

    questionContainer.innerHTML += optionsHTML;
    document.getElementById("prev-btn").disabled = currentQuestion === 0;
    document.getElementById("next-btn").disabled = currentQuestion === questions.length - 1;

    // Add event listeners for buttons
    document.getElementById("prev-btn").addEventListener("click", showPreviousQuestion);
    document.getElementById("next-btn").addEventListener("click", showNextQuestion);
}

function showPreviousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function showNextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function submitQuiz() {
    var selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (selectedAnswer !== null) {
        if (parseInt(selectedAnswer.value) === questions[currentQuestion].answer) {
            score++;
        }
        if (currentQuestion === questions.length - 1) {
            displayResult();
        } else {
            showNextQuestion();
        }
    }
}

function displayResult() {
    var resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "Your score: " + score + "/" + questions.length;
}

window.onload = loadQuestion;
