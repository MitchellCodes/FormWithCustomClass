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
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    return true;
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
