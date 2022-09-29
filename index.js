const nextPage = document.querySelector(".nextPage");
const selEl = document.querySelector("#sel");
const inpEl = document.querySelector("#name");

nextPage.addEventListener("click", () => {
  if (inpEl.value == "" || selEl.value == "") {
  } else {
    location.href = "./index2.html";
  }
});
