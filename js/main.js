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
    alert("test");
    if (isAllDataValid()) {
        var game = getVideoGame();
        displayGame(game);
    }
}
function isAllDataValid() {
    return true;
}
function displayGame(addedGame) {
}
function getVideoGame() {
    var game = new VideoGame();
    var inputTitle = document.getElementById("title");
    game.title = inputTitle.value;
    var inputPrice = document.getElementById("price");
    game.price = parseFloat(inputPrice.value);
    var inputRating = document.getElementById("rating");
    game.rating = inputRating.value;
    var digitalOnly = document.getElementById("online");
    game.isDigitalOnly = digitalOnly.checked;
    return game;
}
