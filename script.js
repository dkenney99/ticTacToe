let xArray = [];
let oArray = [];

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const gameBoard = (() => {
  const allButtons = document.querySelectorAll(".tic");
  const xButton = document.querySelector("#x-button");
  const oButton = document.querySelector("#o-button");
  const restartButton = document.querySelector("#restartButton");
  const playerAnnouncement = document.querySelector(".announcer");

  let count = 0;

  allButtons.forEach((button, i) => {
    button.setAttribute("id", i);
    button.addEventListener("click", () => {
      if (button.textContent === "X" || button.textContent === "O") {
        alert("Space already taken");
      } else if (count % 2 === 0) {
        addX(button);
        count++;

        xButton.style.backgroundColor = "white";
        oButton.style.backgroundColor = "red";

        winCondition(button.id, "X");
        winChecker(xArray);
      } else if (count % 2 === 1) {
        addO(button);
        count++;

        xButton.style.backgroundColor = "red";
        oButton.style.backgroundColor = "white";
        winCondition(button.id, "O");
        winChecker(oArray);
      }
    });
  });

  restartButton.addEventListener("click", () => {
    console.log("reset");
    allButtons.forEach((button) => {
      button.textContent = "";
      xButton.style.backgroundColor = "red";
      oButton.style.backgroundColor = "white";
    });
    count = 0;
    oArray = [];
    xArray = [];
    playerAnnouncement.textContent = "";
  });

  function addX(button) {
    button.textContent = "X";
  }

  function addO(button) {
    button.textContent = "O";
  }

  function winChecker(array) {
    winningConditions.forEach((condition) => {
      if (JSON.stringify(array) == JSON.stringify(condition)) {
        playerAnnouncement.textContent = "Winner!";
      }
    });
  }

  return { allButtons, addX, addO };
})();

const winCondition = (buttonIndex, letter) => {
  if (letter === "O") {
    oArray.push(parseInt(buttonIndex));
  } else {
    xArray.push(parseInt(buttonIndex));
  }
  xArray.sort();
  oArray.sort();
};
