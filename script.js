let mode ="basic"
let gridSize = 16;
console.log("hello");
getPageElements();
setUpGrid(gridSize,mode);

function getPageElements(){
    canvas = document.querySelector('#canvas');
    clearButton = document.querySelector('#clearButton')
}
function setUpGrid(gridSize,mode){
    canvas.style.display = "grid";
    canvas.style.gridTemplateColumns= "repeat("+gridSize+",1fr)";
    canvas.style.gridTemplateRows= "repeat("+gridSize+",1fr)";
    gridSquares =[];
    for(let c=0; c<gridSize ; c++){
        for(let r=0; r<gridSize; r++){
            let gridSquare = document.createElement('div');
            gridSquare.addEventListener("mouseover",function(){
                this.style.backgroundColor=getPenColor(mode);
            });
            canvas.appendChild(gridSquare);
            gridSquares.push(gridSquare);
        }
    }
}
function getPenColor(mode){
    return "black";
}
clearButton.addEventListener('click',function(){
    for(let i=0; i<gridSquares.length; i++){
        gridSquares[i].style.backgroundColor="white";
    }
})
