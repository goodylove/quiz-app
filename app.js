const questionCon = document.querySelector(".question-holder");
const questions = document.querySelector(".question");
const scoreCon = document.querySelector(".score");
const quzCon = document.querySelector(".overallcontianer2");
const scoreContainer = document.querySelector(".score-con");
const span = document.querySelectorAll("span");
const displayQuNum = document.querySelector(".num-q");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const restartBtn = document.querySelector(".restart");
const nextPage = document.querySelector(".nextPage");
const selEl = document.querySelector("#sel");
const inpEl = document.querySelector("#name");
const $firstPage = document.querySelector(".page-container");
const $secondPage = document.querySelector(".container-2");
const errorCon = document.querySelector(".error-con");

let getScore = [];
let score = 0;
let i = 0;

nextPage.addEventListener("click", () => {
  console.log("working");
  $firstPage.style.display = "none";
  $secondPage.style.display = "flex";
});

// function to display the question to the DOM
function displayQuestion() {
  questions.innerHTML = "Q" + (i + 1) + "" + questionBank[i].question;

  const allMyOption = questionBank[i].options.map((p) => {
    return `<div class="option">
    <input type="radio" name="input" value="${p}">
    <span class="option1">${p}</span>
                    </div>`;
  });
  $list = document.querySelector(".list").innerHTML = allMyOption.join("");

  displayQuNum.innerHTML =
    "Question " + questionBank[i].id + " of " + " " + questionBank.length;
  selectedOpt();
}

// function select option
function selectedOpt() {
  let allMyOption = document.querySelectorAll("input");

  allMyOption.forEach((input) => {
    input.addEventListener("click", () => {
      let parentCon = input.parentElement;
      let optionCon = parentCon.querySelector(".option1");
      let correct = questionBank[i].answer;

      if (optionCon.innerText === correct) {
        score += 1;
      } else {
      }
    });
  });
}

// next question
function nextQuestion() {
  let isDisabled;
  let allMyOption = document.querySelectorAll("input");
  allMyOption.forEach((p) => {
    if (!p.checked) {
      errorCon.classList.add("show");
      next.disabled = isDisabled;
    } else {
      i += 1;

      if (i < questionBank.length) {
        displayQuestion();
      }
    }
  });
  allMyOption.forEach((p) => {
    if (p.checked) {
      errorCon.classList.remove("show");
    }
  });
}

function totalScore() {
  if (i >= questionBank.length) {
    quzCon.style.display = "none";
    scoreContainer.style.display = "flex";
    console.log(score);
    scoreCon.innerHTML = `Your Total Score ${score}   /  ${questionBank.length}`;
  }
}

// prevous question
function prevQuestion() {
  i -= 1;
  displayQuestion();
}

next.addEventListener("click", () => {
  selectedOpt();
  nextQuestion();
  totalScore();
});
prev.addEventListener("click", () => {
  prevQuestion();
});

restartBtn.addEventListener("click", () => {
  location.reload();
});

displayQuestion();
