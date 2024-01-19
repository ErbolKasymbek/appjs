const userNames = ["Aaron", "Blake", "Taker", "R.Sean", "Born"];
const userAges = [20, 24, 30, 19, 31, 22];
const userIds = [34, 79, 114, 11, 3,];

const tableRow = document.querySelectorAll(".trow");
const tableHead = document.querySelectorAll("[data-thead]");
const tableCellName = document.querySelectorAll("[data-tcell-name]");
const tableCellAge = document.querySelectorAll("[data-tcell-Age]");
const tableCellId = document.querySelectorAll("[data-tcell-id]");
const btnName = document.querySelector("[data-name-btn]");
const btnAge = document.querySelector("[data-age-btn]");
const btnId = document.querySelector("[data-id-btn]");
const btnReset = document.querySelector("[data-reset-btn]");

const btnsGroup = [btnId, btnName, btnAge, btnReset];

btnsGroup.forEach((btn) => {
  btn.addEventListener("click", checker);
});

function checker(e) {
  if (e.target.hasAttribute("data-id-btn")) {
    for (let i = 0; i < userIds.length; i++) {
      tableCellId[i].textContent = userIds[i];
      if (tableCellId.length === i + 1) return;
    }
  }
  if (e.target.hasAttribute("data-name-btn")) {
    for (let i = 0; i < userNames.length; i++) {
      tableCellName[i].textContent = userNames[i];
      if (tableCellName.length === i + 1) return;
    }
  }
  if (e.target.hasAttribute("data-age-btn")) {
    for (let i = 0; i < userAges.length; i++) {
      tableCellAge[i].textContent = userAges[i];
      if (tableCellAge.length === i + 1) return;
    }
  }
  if (e.target.hasAttribute("data-reset-btn")) {
    const tableCellGroup = [tableCellId, tableCellName, tableCellAge];
    for (let i = 0; i < tableCellGroup.length; i++) {
      tableCellGroup[i].forEach((tablecell) => {
        tablecell.textContent = "";
      });
    }
  }
}
