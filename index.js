let dodger = document.querySelector('#dodger');
let game = document.querySelector('#game');
console.log(game);
  document.addEventListener('keydown',  (event) =>{
    // console.log(event);
    if(event.key === "ArrowRight"){
        moveDodgerRight();
    }
    else if(event.key === "ArrowLeft"){
        moveDodgerLeft();
    }

  })

function moveDodgerLeft(){

        dodger.style.backgroundColor = "red"
     let left1 = dodger.style.left.replace ("px", "");
     let left2 = parseInt(left1, 10);
     if(left2 > 0){
     dodger.style.left = `${left2 - 1}px`
    }
}

function moveDodgerRight (){
    dodger.style.backgroundColor = "red"
    let left1 = dodger.style.left.replace ("px", "");
    let left2 = parseInt(left1, 10);
    let dodgerWidth = dodger.offsetWidth;
    let gameWidth =  dodger.parentElement.clientWidth;
    dodger.style.left = `${left2 + 1}px`

}
