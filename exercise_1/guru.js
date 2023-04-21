let questionList = [];

const form = document.getElementById("question-form");
const questionInput = document.getElementById("question-input");
const categorySelect = document.getElementById("category-select");
const filterSelect = document.getElementById("category-filter");
const addButton = document.getElementById("add-btn");
const cancelButtons = document.querySelectorAll("button[type='button']");

const openForm = () => {
  document.getElementById("form-popup").style.display = "block";
};

const closeForm = () => {
  document.getElementById("form-popup").style.display = "none";
};

const addQuestion = (event) => {
    event.preventDefault();
    const question = questionInput.value;
    const category = categorySelect.value;
    const date = new Date().toLocaleString();
    const newQuestion = { question, category, date };
    questionList.push(newQuestion);
    localStorage.setItem("questionList", JSON.stringify(questionList));
    closeForm();
    displayQuestions();
  };
  

  const displayQuestions = () => {
    const questionContainer = document.getElementById("question-list");
    questionContainer.innerHTML = "";
    let filteredQuestions = questionList;
    if (filterSelect.value) {
      filteredQuestions = questionList.filter((q) => q.category === filterSelect.value);
    }
    filteredQuestions.reverse().forEach((q) => {
      const questionElement = document.createElement("div");
      questionElement.classList.add("question");
      const questionText = document.createElement("h3");
      questionText.textContent = q.question;
      const categoryText = document.createElement("p");
      categoryText.textContent = `Category: ${q.category}`;
      const dateText = document.createElement("p");
      dateText.textContent = `Date: ${q.date}`;
      questionElement.appendChild(questionText);
      questionElement.appendChild(categoryText);
      questionElement.appendChild(dateText);
      questionContainer.appendChild(questionElement);
    });
  };
  

form.addEventListener("submit", addQuestion);
filterSelect.addEventListener("change", displayQuestions);
addButton.addEventListener("click", openForm);
cancelButtons.forEach((btn) => btn.addEventListener("click", closeForm));
