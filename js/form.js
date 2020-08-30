class Form{

    constructor(){}

    display(){

        var title = createElement('h2');
        title.html('Car Racing game');
        title.position(130,0);

        var input = createInput('Name');
        input.position(130,160);

        var button = createButton('Play');
        button.position(250,250);

        var greeting = createElement('h3');

        button.mousePressed(function(){

            input.hide();
            button.hide();

            var myname = input.value();
            playerCount = playerCount + 1;

            player.update(myname);
            player.updateCount(playerCount);

            greeting.html("Hello "+ myname);
            greeting.position(130,160);

        })
    }
}    