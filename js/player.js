class Player{
    constructor(){}

    getCount(){
        var playerCountref = database.ref('playercount');
        playerCountref.on("value", function(data){
            playerCount = data.val();
        });
    }

    updateCount(count){
        database.ref('/').update({
            playercount : count
        })
    }

    update(myname){
        var playerindex = "players/player"+ playerCount;
        database.ref(playerindex).set({
            name : myname
        })
    }
}