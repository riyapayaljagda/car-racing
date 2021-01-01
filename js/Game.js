class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide()
    text("Game Start", 130,100)
    
    Player.getPlayerInfo()



    if(allPlayers !== undefined){
      var position = 140
      
      for(var plrs in allPlayers){

        if(plrs === "player" + player.index){
          fill("red")
        }else
        {
          fill("black")
        }

        position=position+20
        text(allPlayers[plrs].name +": "+ allPlayers[plrs].distance , 120,position )
      }
    
    }
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance += 10
      player.update() 
    }
  }
}
