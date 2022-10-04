const questionCon = document.querySelector(".question-holder");
const questions = document.querySelector(".question");
let scoreCon = document.querySelector(".score");
const quzCon = document.querySelector(".overallcontianer2");
const scoreContainer = document.querySelector(".score-con");
const span = document.querySelectorAll("span");
const displayQuNum = document.querySelector(".num-q");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const restartBtn = document.querySelector(".restart");
const nextPage = document.querySelector(".nextPage");
const inpEl = document.querySelector("#name");
const $firstPage = document.querySelector(".page-container");
const $secondPage = document.querySelector(".container-2");
const errorCon = document.querySelector(".error-con");
const $name = document.querySelector(".name");
const selEl = document.querySelector("#sel");

let getScore = [];
let score1 = 0;
let score2 = 0;
let currentPosition = 0;
let i = 0;

nextPage.addEventListener("click", () => {
  $firstPage.style.display = "none";
  $secondPage.style.display = "flex";
  displayQuestion();
});

// function to display the question to the DOM
function displayQuestion() {
  if (selEl.value === "English") {
    questions.innerHTML =
      "Q" +
      (currentPosition + 1) +
      ".  " +
      questionBank[0][currentPosition].question;

    const allMyOption = questionBank[0][currentPosition].options.map((p) => {
      return `<div class="option">
      <input type="radio" name="input" value="${p}">
      <span class="option1">${p}</span>
                      </div>`;
    });
    $list = document.querySelector(".list").innerHTML = allMyOption.join("");

    displayQuNum.innerHTML =
      "Question " +
      questionBank[0][currentPosition].id +
      " of " +
      " " +
      questionBank[0].length;
    selectedOpt();
  } else if (selEl.value === "Maths") {
    questions.innerHTML =
      "Q" +
      (currentPosition + 1) +
      "" +
      questionBank[1][currentPosition].question;

    const allMyOption = questionBank[1][currentPosition].options.map((p) => {
      return `<div class="option">
        <input type="radio" name="input" value="${p}">
        <span class="option1">${p}</span>
                        </div>`;
    });
    $list = document.querySelector(".list").innerHTML = allMyOption.join("");

    displayQuNum.innerHTML =
      "Question " +
      questionBank[1][currentPosition].id +
      " of " +
      " " +
      questionBank[1].length;
    selectedOptMaths();
  }
}

// function select option for English
function selectedOpt() {
  let allMyOption = document.querySelectorAll("input");

  allMyOption.forEach((input) => {
    input.addEventListener("click", () => {
      if (questionBank[0]) {
        let parentCon = input.parentElement;
        let correct = questionBank[0][currentPosition].answer;
        if (input.value === correct) {
          console.log("true");
          score1 += 1;
        }
      }
    });
  });
}
// function select option for maths

function selectedOptMaths() {
  let allMyOption = document.querySelectorAll("input");

  allMyOption.forEach((input) => {
    input.addEventListener("click", () => {
      if (questionBank[1]) {
        let parentCon = input.parentElement;
        let correct2 = questionBank[1][currentPosition].answer;
        if (input.value === correct2) {
          console.log("true");
          score2 += 1;
        }
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
    }
  });
  allMyOption.forEach((p) => {
    if (p.checked) {
      errorCon.classList.remove("show");
    }
  });
  if (currentPosition < questionBank[0].length) {
    currentPosition += 1;
    console.log(currentPosition);
    displayQuestion();
  } else if (currentPosition < questionBank[1].length) {
    currentPosition += 1;
    console.log(currentPosition);
    displayQuestion();
  }
}

// total score for english
// function totalScore() {
//   if (currentPosition === questionBank[0].length - 1) {
//     quzCon.style.display = "none";
//     scoreContainer.style.display = "flex";

//     $name.innerHTML = inpEl.value;
//     scoreCon.innerHTML = `Your Total Score ${score1}   /  ${questionBank[0].length}`;
//   }
//   // else {
//   //   if (currentPosition === questionBank[1].length) {
//   //     quzCon.style.display = "none";
//   //     scoreContainer.style.display = "flex";

//   //     $name.innerHTML = inpEl.value;
//   //     scoreCon.innerHTML = `Your Total Score ${score2}   /  ${questionBank[1].length}`;
//   //     console.log(score2);
//   //   }
//   // }
// }
// total score for maths

const totalScore = (score, i) => {
  if (currentPosition === questionBank[i].length - 1) {
    quzCon.style.display = "none";
    scoreContainer.style.display = "flex";
    console.log(score);

    $name.innerHTML = inpEl.value;
    scoreCon.innerHTML = `Your Total Score ${score}   /  ${questionBank[i].length}`;
  }
};

// prevous question
function prevQuestion() {
  currentPosition -= 1;
  displayQuestion();
}

const select = document.querySelector(".select");

next.addEventListener("click", () => {
  nextQuestion();
  if (select.value == "English") {
    totalScore(score1, 0);

    console.log("english");
  }
  if (select.value == "Maths") {
    totalScore(score2, 1);

    console.log("maths");
  }
});
prev.addEventListener("click", () => {
  prevQuestion();
});

restartBtn.addEventListener("click", () => {
  location.reload();
});
