const container = document.querySelector("#game");
draw_welcomePage();

function clearPage() {
    let children = Array.from(container.children)
    for (let child of children) {
        console.log(child);
        child.remove();
    }
}

function draw_welcomePage() {
    const button = document.createElement("button");
    button.textContent = "Start";
    button.addEventListener("click", () => {
        clearPage();
        draw_userChoosePage();
    })
    container.appendChild(button);
}

function draw_userChoosePage() {
    const userBox = document.createElement("div");
    container.appendChild(userBox);

    const userPhoto = document.createElement("img");
    userPhoto.setAttribute("src", "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png");
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    rockBtn.addEventListener("click", () => {
        clearPage();
        draw_computerChoosePage("rock");
    })
    const paperBtn = document.createElement("button");
    paperBtn.addEventListener("click", () => {
        clearPage();
        draw_computerChoosePage("paper");
    })
    paperBtn.textContent = "Paper";
    const scissorBtn = document.createElement("button");
    scissorBtn.addEventListener("click", () => {
        clearPage();
        draw_computerChoosePage("scissor");
    })
    scissorBtn.textContent = "Scissor";
    userBox.appendChild(userPhoto);
    userBox.appendChild(rockBtn);
    userBox.appendChild(paperBtn);
    userBox.appendChild(scissorBtn);

    const computerBox = document.createElement("div");
    container.appendChild(computerBox);
    const computerPhoto = document.createElement("img");
    computerPhoto.setAttribute("src", "https://static-00.iconduck.com/assets.00/robot-face-emoji-2048x1991-6hcyptr3.png");
    computerBox.appendChild(computerPhoto);
}

function draw_computerChoosePage(userChoice) {
    const userBox = document.createElement("div");
    container.appendChild(userBox);

    const userPhoto = document.createElement("img");
    userPhoto.setAttribute("src", "https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png");
    userBox.appendChild(userPhoto);

    const userChoiceBox = document.createElement("p");
    userChoiceBox.textContent = userChoice;
    userBox.appendChild(userChoiceBox);


    const computerBox = document.createElement("div");
    container.appendChild(computerBox);
    const computerPhoto = document.createElement("img");
    computerPhoto.setAttribute("src", "https://static-00.iconduck.com/assets.00/robot-face-emoji-2048x1991-6hcyptr3.png");
    computerBox.appendChild(computerPhoto);

    let n = Math.floor((100 * Math.random()) % 3); // number in the set { 0. 1, 2 }
    let choices = ["rock", "paper", "scissors"]
    let computerChoice = choices[n]; 
    const computerChoiceBox = document.createElement("span");
    computerChoiceBox.textContent = computerChoice;
    computerBox.appendChild(computerChoiceBox);

    const resultBox = document.createElement("span");
    if ((computerChoice === "rock" && userChoice === "scissors") ||
        (computerChoice === "scissors" && userChoice === "paper") ||
        (computerChoice === "paper" && userChoice === "rock")) {
        resultBox.textContent = "You lose";
    } else if (computerChoice == userChoice) {
        resultBox.textContent = "It's a draw!";
    } else {
        resultBox.textContent = "You win!";
    }
    container.appendChild(resultBox);
}