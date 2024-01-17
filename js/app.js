const userNames = ["Aron", "Blake", "Taker"];
const userAges = [20, 24, 30];
const userIds = [34, 79, 114];

const tableRow = document.querySelectorAll(".trow");
const tableHead = document.querySelectorAll("[data-thead]");
const tableCellName = document.querySelectorAll("[data-tcell-name]");
const tableCellAge = document.querySelectorAll("[data-tcell-Age]");
const tableCellId = document.querySelectorAll("[data-tcell-id]");
const btnName = document.querySelector("[data-name-btn]");
const btnAge = document.querySelector("[data-age-btn]");
const btnId = document.querySelector("[data-id-btn]");
const btnReset = document.querySelector("[data-reset-btn]");

btnId.addEventListener("click", () => {
  function getId(idlist) {
    for (let i = 0; i < idlist.length; i++) {
      if (tableHead[i]) {
        tableCellId[i].textContent = idlist[i];
      }
    }
  }
  getId(userIds);
});

btnName.addEventListener("click", () => {
  function getNames(namelist) {
    for (let i = 0; i < namelist.length; i++) {
      if (tableHead[i]) {
        tableCellName[i].textContent = namelist[i];
      }
    }
  }
  getNames(userNames);
});

btnAge.addEventListener("click", () => {
  function getAges(agelist) {
    for (let i = 0; i < agelist.length; i++) {
      if (tableHead[i]) {
        tableCellAge[i].textContent = agelist[i];
      }
    }
  }
  getAges(userAges);
});

btnReset.addEventListener("click", () => {
  const tableCellGroup = [tableCellId, tableCellName, tableCellAge];
  tableCellGroup.forEach((tablecell) => {
    tablecell.forEach((cell) => {
      cell.textContent = "";
    });
  });
});
