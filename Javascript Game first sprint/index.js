

var player = document.getElementsByClassName('spartan')[0];


  function StartGame()
  {
    window.addEventListener('keydown', moveSelection);
    detectCollisions();

  }

    function moveSelection(evt) {
    switch (evt.keyCode) {
    case 37:
    leftArrowPressed();
    break;
    case 39:
    rightArrowPressed();
    break;
    case 38:
    upArrowPressed();
    break;
    case 40:
    downArrowPressed();
    break;
    }
    };


    function removePX(string){
      return parseInt(string.replace('px', ''));
    }
      function leftArrowPressed() {
      player.style.left = removePX(window.getComputedStyle(player,null).getPropertyValue('left')) - 5 + 'px';
      }

      function rightArrowPressed() {
      player.style.left = removePX(window.getComputedStyle(player,null).getPropertyValue('left')) + 5 + 'px';

      }

      function upArrowPressed() {
      player.style.top = removePX(window.getComputedStyle(player,null).getPropertyValue('top')) - 5 + 'px';
      }

      function downArrowPressed() {
      player.style.top = removePX(window.getComputedStyle(player,null).getPropertyValue('top')) + 5 + 'px';
      }


      // var token = {width:token1.offsetWidth, height:player.offsetHeight, xPosition:token1.offsetLeft, yPosition: token1.offsetHeight};
// create objects to build more tokens


function detectCollisions() {
  var playerWidth = player.offsetWidth;
	var playerHeight = player.offsetHeight;
	var playerX = player.offsetLeft;
	var playerY = player.offsetTop;
	token1Width = token1.offsetWidth;
	token1Height = token1.offsetHeight;
	token1X = token1.offsetLeft;
	token1Y = token1.offsetTop;
  token2Width = token1.offsetWidth;
  token2Height = token1.offsetHeight;
  token2X = token1.offsetLeft;
  token2Y = token1.offsetTop;



  if((playerX+playerWidth) > token1X && playerX < (token1X+token1Width) && (playerY+token1Height) > token1Y && playerY < (token1Y+token1Height)){
    console.log("Collision detected");
    var token2 = document.getElementById('token1');
    		token2.style.display = "none";


    	}
      window.requestAnimationFrame(detectCollisions);
    }


// create alert of game over for when 'token.style.display' = 'none' , for every tokens
// create timer activated when arrow key pressed and which stops when all tokens have been intertacted with
//create restart button
