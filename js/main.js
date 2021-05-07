var VideoGame = (function () {
    function VideoGame() {
    }
    return VideoGame;
}());
window.onload = function () {
    var addBtn = document.querySelector("input[type=button]");
    addBtn.onclick = addVideoGame;
};
function addVideoGame() {
    clearAllErrors();
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function clearAllErrors() {
    var errorSummary = document.getElementById("validation-summary");
    errorSummary.innerText = "";
}
function getInputById(id) {
    return document.getElementById(id);
}
function isAllDataValid() {
    var isValid = true;
    var title = getInputById("title").value;
    if (title == "") {
        isValid = false;
        addErrorMessage("Title is required.");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        isValid = false;
        addErrorMessage("Price is required and must be a number.");
    }
    else if (priceValue < 0) {
        isValid = false;
        addErrorMessage("Price cannot be negative.");
    }
    var rating = document.getElementById("rating").value;
    if (rating == "") {
        isValid = false;
        addErrorMessage("You must choose a rating.");
    }
    return isValid;
}
function addErrorMessage(errorMessage) {
    var errorSummary = document.getElementById("validation-summary");
    var errorItem = document.createElement("li");
    errorItem.innerText = errorMessage;
    errorSummary.appendChild(errorItem);
}
function displayGame(game) {
    var displayDiv = document.getElementById("display");
    var gameHeading = document.createElement("h2");
    gameHeading.innerText = game.title;
    var gameInfo = document.createElement("p");
    var gameMediumString = "";
    if (game.isDigitalOnly) {
        gameMediumString = "This game is digital only.";
    }
    else {
        gameMediumString = "Physical copies are available.";
    }
    gameInfo.innerText = game.title + " has a rating of " + game.rating + ". " +
        ("It costs $" + game.price.toFixed(2) + ". " + gameMediumString);
    displayDiv.appendChild(gameHeading);
    displayDiv.appendChild(gameInfo);
}
function getVideoGame() {
    var game = new VideoGame();
    var inputTitle = document.getElementById("title");
    game.title = inputTitle.value;
    var inputPrice = document.getElementById("price");
    game.price = parseFloat(inputPrice.value);
    var inputRating = document.getElementById("rating");
    game.rating = inputRating.value;
    var digitalOnly = document.getElementById("digital");
    game.isDigitalOnly = digitalOnly.checked;
    return game;
}
