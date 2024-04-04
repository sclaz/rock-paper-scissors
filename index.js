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
    const title = document.createElement("h1");
    title.textContent = "Rock Paper Scissors";
    container.appendChild(title);

    const button = document.createElement("button");
    button.textContent = "Start";
    button.setAttribute("class", "btn-start");
    button.addEventListener("click", () => {
        clearPage();
        draw_userChoosePage();
    })
    container.appendChild(button);

}

function draw_userChoosePage() {
    const title = document.createElement("h1");
    title.textContent = "Rock Paper Scissors";
    container.appendChild(title);

    const chooseText = document.createElement("h2");
    chooseText.textContent = "Choose:";
    chooseText.setAttribute("class", "centered")
    container.appendChild(chooseText);

    const userBox = document.createElement("div");
    userBox.setAttribute("class", "userBox");
    container.appendChild(userBox);

    const userPhoto = document.createElement("img");
    userPhoto.setAttribute("src", "icons-login-user-avatars.png");
    userPhoto.style.margin = "50px";

    const rockBtn = document.createElement("button");
    rockBtn.textContent = "";
    rockBtn.setAttribute("class", "rockBtn");
    rockBtn.addEventListener("click", () => {
        clearPage();
        draw_computerChoosePage("rock");
    })
    const paperBtn = document.createElement("button");
    paperBtn.setAttribute("class", "paperBtn");
    paperBtn.addEventListener("click", () => {
        clearPage();
        draw_computerChoosePage("paper");
    })
    paperBtn.textContent = "";
    const scissorBtn = document.createElement("button");
    scissorBtn.setAttribute("class", "scissorBtn");
    scissorBtn.addEventListener("click", () => {
        clearPage();
        draw_computerChoosePage("scissor");
    })
    scissorBtn.textContent = "";
    userBox.appendChild(userPhoto);
    userBox.appendChild(rockBtn);
    userBox.appendChild(paperBtn);
    userBox.appendChild(scissorBtn);

    const computerBox = document.createElement("div");
    container.appendChild(computerBox);
    const computerPhoto = document.createElement("img");
    computerPhoto.setAttribute("src", "https://static-00.iconduck.com/assets.00/robot-face-emoji-2048x1991-6hcyptr3.png");
    computerBox.appendChild(computerPhoto);
    computerBox.style.margin = "50px";
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