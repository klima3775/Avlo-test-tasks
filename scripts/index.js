const questions = [
  {
    question: "What are you looking for in a relationship?",
    answers: [
      "Long-term commitment",
      "Casual dating",
      "Friendship",
      "Fun and adventure",
    ],
  },
  {
    question: "What’s your preferred communication style?",
    answers: [
      "Face-to-face conversations",
      "Text messages",
      "Phone calls",
      "Video chats",
    ],
  },
  {
    question: "How do you like to spend your free time?",
    answers: [
      "Reading books",
      "Watching TV shows",
      "Engaging in hobbies",
      "Spending time with family and friends",
    ],
  },
];

let currentQuestionIndex = 0;

function nextQuestion(answerIndex) {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    const questionBox = document.getElementById("question-box");
    const question = questions[currentQuestionIndex];
    questionBox.innerHTML = `
            <h2>${question.question}</h2>
            ${question.answers
              .map(
                (answer, index) =>
                  `<button class="button" onclick="nextQuestion(${index})">${answer}</button>`
              )
              .join("")}
          `;
  } else {
    showFinalBlock();
  }
}

function showFinalBlock() {
  const questionBox = document.getElementById("question-box");
  questionBox.innerHTML = `
          <h2>Thank you.</h2>
          <p>Please click the link below so that your answers can be evaluated</p>
          <button class="button">Evaluate answers</button>
        `;
}
