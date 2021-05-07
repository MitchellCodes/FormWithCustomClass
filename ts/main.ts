class VideoGame{
    title:string;
    price:number;
    rating:string;
    isDigitalOnly:boolean;
}

// TEST/EXAMPLE CODE
/*
    let myGame = new VideoGame();
    myGame.title = "Tetris";
    myGame.price = 5;
    myGame.rating = "E";
    myGame.isDigitalOnly = false;
*/

window.onload = function(){
    let addBtn = <HTMLElement>document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
}

function addVideoGame(){
    clearAllErrors();
    if(isAllDataValid()){
        let game:VideoGame = getVideoGame();
        displayGame(game);
    }
}

/**
 * Clears all errors in validation summary
 */
function clearAllErrors(){
    let errorSummary = document.getElementById("validation-summary");
    errorSummary.innerText = "";
}

function getInputById(id:string):HTMLInputElement{
    return <HTMLInputElement>document.getElementById(id);
}

function isAllDataValid(){
    let isValid = true;

    let title = getInputById("title").value;
    if(title == ""){
        isValid = false;
        addErrorMessage("Title is required.");
    }

    let price = getInputById("price").value;
    let priceValue = parseFloat(price);
    if(price == "" || isNaN(priceValue)){
        isValid = false;
        addErrorMessage("Price is required and must be a number.");
    }
    else if(priceValue < 0){
        isValid = false;
        addErrorMessage("Price cannot be negative.");
    }

    let rating = (<HTMLOptionElement>document.getElementById("rating")).value;
    if(rating == ""){
        isValid = false;
        addErrorMessage("You must choose a rating.")
    }

    return isValid;
}

function addErrorMessage(errorMessage:string):void{
    let errorSummary = document.getElementById("validation-summary");
    let errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}

function displayGame(game:VideoGame):void{
    let displayDiv = document.getElementById("display");

    // Create <h2> with game title
    let gameHeading = document.createElement("h2");
    gameHeading.innerText = game.title;

    // Create <p> with game details
    let gameInfo = document.createElement("p");
    let gameMediumString = "";
    if(game.isDigitalOnly){
        gameMediumString = "This game is digital only.";
    }
    else{
        gameMediumString = "Physical copies are available.";
    }
    gameInfo.innerText = `${game.title} has a rating of ${game.rating}. ` +
        `It costs $${game.price.toFixed(2)}. ${gameMediumString}`;

    // Add <h2> in <div id="display">
    displayDiv.appendChild(gameHeading);
    // Add <p> of game info
    displayDiv.appendChild(gameInfo);
}

/**
 * Gets all game data from the form and returns
 * it in a VideoGame object
 * @returns a VideoGame object
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();

    // populate with data from the form
    let inputTitle = <HTMLInputElement>document.getElementById("title");
    game.title = inputTitle.value;

    let inputPrice = <HTMLInputElement>document.getElementById("price");
    game.price = parseFloat(inputPrice.value);

    let inputRating = <HTMLSelectElement>document.getElementById("rating");
    game.rating = inputRating.value;

    let digitalOnly = <HTMLInputElement>document.getElementById("digital");
    game.isDigitalOnly = digitalOnly.checked; // true if checked, false if not

    return game;
}