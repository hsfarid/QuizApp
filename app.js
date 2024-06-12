const correctAnswers = ["A", "A", "B", "B", "B"];
const form = document.querySelector(".quiz-form");
const scoreContainer = document.querySelector(".score-screen");
const scoreScreen = document.querySelector(".score-screen span");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  //check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 20;
    }
  });

  let count = 0;
  const timer = setInterval(() => {
    if (count === score) {
      clearInterval(timer);
    } else {
      count++;
    }
    scoreContainer.style.display = "block";
    scoreScreen.textContent = `${count}%`;
  }, 10);
  window.scrollTo(0, 0);
});
