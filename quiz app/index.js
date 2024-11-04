const quizData = [
    {
        question: "What is the capital of Pakistan?",
        a: "karachi",
        b: "Islamabad",
        c: "Lahore",
        d: "Multan",
        correct: "b"
    },
    {
        question: "Which language is used for web development?",
        a: "Python",
        b: "Java",
        c: "JavaScript",
        d: "C++",
        correct: "c"
    },
    {
        question: "What does CSS stand for?",
        a: "Computer Style Sheets",
        b: "Cascading Style Sheets",
        c: "Creative Style Sheets",
        d: "Colorful Style Sheets",
        correct: "b"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
];

const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");
const submitButton = document.getElementById("submit");

function loadQuiz() {
    quizData.forEach((item, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");
        questionElement.innerHTML = `
            <p>${item.question}</p>
            <label><input type="radio" name="question${index}" value="a"> ${item.a}</label>
            <label><input type="radio" name="question${index}" value="b"> ${item.b}</label>
            <label><input type="radio" name="question${index}" value="c"> ${item.c}</label>
            <label><input type="radio" name="question${index}" value="d"> ${item.d}</label>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function getScore() {
    let score = 0;
    quizData.forEach((item, index) => {
        const answer = document.querySelector(`input[name="question${index}"]:checked`);
        if (answer && answer.value === item.correct) {
            score++;
        }
    });
    return score;
}

submitButton.addEventListener("click", () => {
    const score = getScore();
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
});

loadQuiz();
