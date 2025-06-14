const questions = [
  { question: "Audi is a car manufacturer from which country?", answer: "Germany" },
  { question: "Bugatti is owned by which parent company?", answer: "Volkswagen" },
  { question: "Chevrolet is a brand under which group?", answer: "General Motors" },
  { question: "Dodge produces what kind of performance variant of its cars?", answer: "SRT" },
  { question: "Ferrari’s prancing horse logo is colored what?", answer: "Black" }
];

// Sort questions alphabetically by question text
questions.sort((a, b) => a.question.localeCompare(b.question));

const questionContainer = document.getElementById("questions");

// Generate form inputs
questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.className = "question-block";
  
  const label = document.createElement("label");
  label.textContent = `${index + 1}. ${q.question}`;
  
  const input = document.createElement("input");
  input.type = "text";
  input.name = `q${index}`;
  
  div.appendChild(label);
  div.appendChild(input);
  questionContainer.appendChild(div);
});

// Handle form submission
document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;
  questions.forEach((q, index) => {
    const userAnswer = document.querySelector(`input[name="q${index}"]`).value.trim();
    if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
      score++;
    }
  });

  const result = document.getElementById("result");
  result.textContent = `You scored ${score} out of ${questions.length}!`;
});
