const questions = [
  { question: "What car brand starts with A and is known for luxury and performance?", answer: "Audi" },
  { question: "Which car manufacturer starts with B and is famous for luxury vehicles?", answer: "BMW" },
  { question: "What American car brand starts with C and is known for the Corvette?", answer: "Chevrolet" },
  { question: "Which muscle car brand starts with D?", answer: "Dodge" },
  { question: "Which British luxury brand starts with E?", answer: "Eagle" },
  { question: "Which car brand starts with F and produces the Fiesta and Mustang?", answer: "Ford" },
  { question: "Which Korean brand starting with G is Hyundai's luxury division?", answer: "Genesis" },
  { question: "Which car brand starts with H and is known for reliability?", answer: "Honda" },
  { question: "What car brand beginning with I was known for SUVs like the Scout?", answer: "International" },
  { question: "What car brand starting with J is known for its off-road vehicles?", answer: "Jeep" },
  { question: "What small UK sports car brand starts with K?", answer: "KTM" },
  { question: "Which car company starts with L and is known for luxury sedans and hybrids?", answer: "Lexus" },
  { question: "Which British car company known for the Elise starts with L?", answer: "Lotus" },
  { question: "What Italian luxury brand starts with M and features a trident logo?", answer: "Maserati" },
  { question: "Which Japanese automaker starts with N and makes the GT-R?", answer: "Nissan" },
  { question: "What brand starts with O and was once a part of General Motors?", answer: "Oldsmobile" },
  { question: "What German brand starting with O was known for rally success?", answer: "Opel" },
  { question: "What car brand that starts with P is known for the 911?", answer: "Porsche" },
  { question: "What classic British car company starts with Q?", answer: "Qvale" },
  { question: "Which luxury car brand starts with R and makes the Ghost?", answer: "Rolls-Royce" },
  { question: "Which car manufacturer starts with S and is known for the WRX?", answer: "Subaru" },
  { question: "What brand starting with T is famous for electric vehicles?", answer: "Tesla" },
  { question: "Which brand that starts with U made the Scout off-roader?", answer: "Ultima" },
  { question: "Which Swedish car brand starts with V?", answer: "Volvo" },
  { question: "Which luxury car brand that starts with W is based in Germany?", answer: "Wiesmann" },
  { question: "Which Chinese brand starts with X and focuses on EVs?", answer: "XPeng" },
  { question: "Which car brand starting with Y is from China and makes electric cars?", answer: "Yudo" },
  { question: "Which Japanese car brand starts with Z and made the Fairlady Z?", answer: "Zagato" }
];

questions.sort((a, b) => a.answer.localeCompare(b.answer)); // A-Z by answer

const questionContainer = document.getElementById("questions");

questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.className = "question-block";

  const label = document.createElement("label");
  label.textContent = `${index + 1}. ${q.question}`;

  const input = document.createElement("input");
  input.type = "text";
  input.name = `q${index}`;
  input.setAttribute("data-index", index);

  const feedback = document.createElement("div");
  feedback.className = "feedback";
  feedback.id = `feedback-${index}`;

  div.appendChild(label);
  div.appendChild(input);
  div.appendChild(feedback);
  questionContainer.appendChild(div);
});

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let score = 0;

  questions.forEach((q, index) => {
    const input = document.querySelector(`input[name="q${index}"]`);
    const userAnswer = input.value.trim();
    const feedbackDiv = document.getElementById(`feedback-${index}`);
    feedbackDiv.innerHTML = ""; // Clear previous feedback

    if (userAnswer.toLowerCase() === q.answer.toLowerCase()) {
      score++;
    } else {
      feedbackDiv.innerHTML = `<span style="color: red;">Correct answer: ${q.answer}</span>`;
    }

    input.disabled = true; // Lock input after submission
  });

  const result = document.getElementById("result");
  result.innerHTML = `<strong>You scored ${score} out of ${questions.length}!</strong>`;
});
