// Select DOM elements
const questionContainer = document.getElementById("question-container");
const answerButtons = document.querySelectorAll(".answer-btn");
const nextButton = document.getElementById("next-button");
const correctAnswerContainer = document.getElementById(
  "correct-answer-container"
);
const correctAnswerText = document.getElementById("correct-answer");

let currentQuestionIndex = 0;
let questions = [];

// Function to load the next question
function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerHTML = `<p id="question-text">${currentQuestion.question}</p>`;

  answerButtons.forEach((button, index) => {
    button.textContent = currentQuestion.answers[index];
    button.style.backgroundColor = "#4caf50";
    button.onclick = () => checkAnswer(index);
  });

  correctAnswerContainer.style.display = "none";
  nextButton.disabled = true;

  updateProgress();
}

// Function to check the selected answer
function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correctAnswer) {
    answerButtons[selectedIndex].style.backgroundColor = "#27ae60";
  } else {
    answerButtons[selectedIndex].style.backgroundColor = "#e74c3c";
  }

  // Display the correct answer
  correctAnswerText.textContent =
    currentQuestion.answers[currentQuestion.correctAnswer];
  correctAnswerContainer.style.display = "block";

  nextButton.disabled = false;
}

// Event listener for the next question button
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    alert("Quiz completed!");
  }
});

// Fetch the questions from the JSON file
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    questions = data;
    loadQuestion();
  })
  .catch((error) => {
    console.error("Error loading the quiz data:", error);
  });
