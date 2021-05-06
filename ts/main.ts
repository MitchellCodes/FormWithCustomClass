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
    alert("test");

    if(isAllDataValid()){
        let game = getVideoGame();
        displayGame(game);
    }
}

// TODO: ADD VALIDATION************************************************************
function isAllDataValid(){
    return true;
}

function displayGame(addedGame:VideoGame):void{
    // TODO: DISPLAY VIDEO GAME BELOW FORM*****************************************
}

/**
 * Gets all game data from the form and returns
 * it in a VideoGame object
 * @returns a VideoGame object
 */
function getVideoGame():VideoGame{
    let game = new VideoGame();

    // POPULATE WITH DATA FROM FORM
    let inputTitle = <HTMLInputElement>document.getElementById("title");
    game.title = inputTitle.value;

    let inputPrice = <HTMLInputElement>document.getElementById("price");
    game.price = parseFloat(inputPrice.value);

    let inputRating = <HTMLSelectElement>document.getElementById("rating");
    game.rating = inputRating.value;

    let digitalOnly = <HTMLInputElement>document.getElementById("online");
    game.isDigitalOnly = digitalOnly.checked; // true if checked, false if not

    return game;
}