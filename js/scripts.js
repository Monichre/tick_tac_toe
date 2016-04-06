
function Player(mark) {
  this.mark = mark;
  this.playerMove = [];

}

function Game(){
  this.options = [];
  this.winningCombination = [];
  this.randomNumber = function(array){
    var random = Math.floor((Math.random() * (array.length - 1)));
    return random;
  };
  // this.winner = function(playermove){
  //   this.winningCombination.forEach(function(combo){
  //     for(i = 0; i < this.winningCombination.length; i++)
  //     if(Object.values(combo)[i] === playermove[i]
  //
  //   };
  // };
}



$(document).ready(function(){
  var win = {
    win1: ["A-1", "A-2", "A-3"],
    win2: ["B-1", "B-2", "B-3"],
    win3: ["C-1", "C-2", "C-3"],
    win4: ["A-1", "B-1", "C-1"],
    win5: ["A-2", "B-2", "C-2"],
    win6: ["A-3", "B-3", "C-3"],
    win7: ["A-1", "B-2", "C-3"],
    win8: ["A-3", "B-2", "C-1"]
  };
  var keysArray = Object.keys(win);

  var newGame = new Game();
  var newPlayer = new Player("x");

  $('.square').each(function(){
    var idArray =$(this).attr("id");
    newGame.options.push(idArray);
  });

  var turns = 0;
// ***********************************************
  $(".square").click(function(){
    $(this).addClass("x"); // Now we add class X for the USer click

    var UserClick = $(this).attr('id');
    newPlayer.playerMove.push(UserClick);
    console.log("player moves: " + newPlayer.playerMove);
    for(i=0; i < newGame.options.length; i++){
      if(UserClick === newGame.options[i]){
        newGame.options.splice(i, 1);
      }// end of IF for removing chosen ID
    }//end of related FOR loop

    console.log(newGame.options);

    var random = newGame.randomNumber(newGame.options);
    $("#" + newGame.options[random]).addClass("o");
    for(j=0; j < newGame.options.length; j++){
      if(newGame.options[random] === newGame.options[j]){
        newGame.options.splice(j, 1);
      }
    }

    turns = turns + 1;
    console.log(newPlayer.playerMove.length);
    if (newPlayer.playerMove.length >= 3){
      console.log("3 moves wTF");
      for(i=0; i<keysArray.length; i++){
        newGame.winningCombination.push(win[keysArray[i]]);
      }

      newGame.winningCombination.forEach(function(array){
        var spaces = 0;
        for (i=0; i < newGame.winningCombination.length; i++){
          if (array[i] === newPlayer.playerMove[i]){
            spaces = spaces + 1;
          }
        }
        if (spaces === 3){
          console.log("You Win!");
        }
      });
    }


  });

});
