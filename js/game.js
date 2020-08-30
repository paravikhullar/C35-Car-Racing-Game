class Game{
    constructor(){}

    getState(){
        var gamestateref = database.ref('gamestate');
        gamestateref.on("value", function(data){
            gameState = data.val();
        })
    }

    start(){
        player = new Player();
        form = new Form();
        player.getCount();
        form.display();
    }
}