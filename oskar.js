const quizForm = document.getElementById('quizForm');
quizForm.addEventListener('submit', showResult);

function showResult(event) {
  event.preventDefault();
  const answers = ['b', 'b', 'a'];
  let score = 0;
  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value
  ];
  userAnswers.forEach(function(answer, index) {
    if (answer === answers[index]) {
      score++;
    }
  });
  const result = document.getElementById('result');
  const scoreDisplay = document.createElement('p');
  scoreDisplay.innerHTML = `Your score: ${score} out of ${answers.length} correct`;
  result.appendChild(scoreDisplay);
}
