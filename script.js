const gameBoard = (() => {
  const allButtons = document.querySelectorAll(".tic");
  const xButton = document.querySelector("#x-button");
  const oButton = document.querySelector("#o-button");

  let count = 0;

  allButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.textContent === "X" || button.textContent === "O") {
        alert("Space already taken");
      } else if (count % 2 === 0) {
        addX(button);
        count++;

        xButton.style.backgroundColor = "white";
        oButton.style.backgroundColor = "red";
      } else if (count % 2 === 1) {
        addO(button);
        count++;

        xButton.style.backgroundColor = "red";
        oButton.style.backgroundColor = "white";
      }
    });
  });

  function addX(button) {
    button.textContent = "X";
    console.log("X Added");
  }

  function addO(button) {
    button.textContent = "O";
    console.log("O Added");
  }

  return { allButtons, addX, addO };
})();

const Player = (personName, letter) => {
  const playerName = personName;
  const playerLetter = letter;
};
