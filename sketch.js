var ball,database,pos;

var playerCount =0;
var gameState;
var game,player,form;

function setup(){

    database = firebase.database();

    createCanvas(500,500);

    game = new Game();
    game.getState();

    game.start();


   
}

function draw(){
}