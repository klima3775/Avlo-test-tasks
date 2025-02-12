const questions = [
  {
    question: "What are you looking <br />for in a relationship?",
    answers: [
      "Long-term commitment",
      "Casual dating",
      "Friendship",
      "Fun and adventure",
    ],
  },
  {
    question: "What’s your preferred <br />communication style?",
    answers: [
      "Face-to-face conversations",
      "Text messages",
      "Phone calls",
      "Video chats",
    ],
  },
  {
    question: "How do you like to<br /> spend your free time?",
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
          <h2>Please click the link<br /> below so that your <br />answers can be <br />evaluated</h2>
          <button class="button">Evaluate answers</button>
        `;
}

const wrapper = document.querySelector(".wrapper");

// Array of background images
const images = [
  "/img/man/image1.webp",
  "/img/man/image1.webp",
  "/img/man/img2.webp",
  "/img/man/img3.webp",
  "/img/man/img4.webp",
  // ...add as many as needed
];

let currentIndex = 0;
let switchInterval = null;

// Функция переключения фонового изображения
function switchBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  wrapper.style.backgroundImage = `url("${images[currentIndex]}")`;
}

// Функция, отслеживающая изменение ширины экрана
function handleMediaChange(e) {
  if (e.matches) {
    // мобильная версия
    if (!switchInterval) {
      // Запускаем переключение (для теста 1000 мс, можно заменить на 15000)
      switchInterval = setInterval(switchBackground, 1000);
    }
  } else {
    // десктоп версия
    if (switchInterval) {
      clearInterval(switchInterval);
      switchInterval = null;
      // Сбрасываем фоновое изображение, если необходимо
      wrapper.style.backgroundImage = "";
    }
  }
}

// Создаем медиа-запрос для экрана с max-width 480px
const mq = window.matchMedia("(max-width: 480px)");

// Привязываем функцию-обработчик к изменениям медиа-запроса
mq.addEventListener("change", handleMediaChange);

// Инициализируем состояние при загрузке страницы
handleMediaChange(mq);
