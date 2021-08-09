let mode ="basic";
getPageElements();
setUpGrid(16,mode);

function getPageElements(){
    canvas = document.querySelector('#canvas');
    clearButton = document.querySelector('#clearButton');
    sizeSlider = document.querySelector('#sizeSlider');
    sizeLabel = document.querySelector('#sizeLabel');
    gradientButton = document.querySelector("#gradientButton");
    rainbowButton = document.querySelector("#rainbowButton");
    classicButton = document.querySelector("#basicButton");
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
                this.style.backgroundColor=getPenColor(this);
            });
            canvas.appendChild(gridSquare);
            gridSquares.push(gridSquare);
        }
    }
}
function getPenColor(gridSquare){
    switch (mode){
        case "basic":
            return "black";
            break;
        case "rainbow":
            return generateRainbowColor();
            break;
        case "gradient":
            return generateGradientColor(gridSquare);
            break;
    }
}
clearButton.addEventListener('click',function(){
    for(let i=0; i<gridSquares.length; i++){
        gridSquares[i].style.backgroundColor="white";
    }
})
sizeSlider.addEventListener('input', function(){
    sizeLabel.textContent = this.value+"x"+this.value;
    deleteGridSquares();
    setUpGrid(this.value);
});

function deleteGridSquares(){
    for(let i=0; i<gridSquares.length; i++){
        canvas.removeChild(gridSquares[i]);
    }
}

rainbowButton.addEventListener("click", function(){
    mode="rainbow";
})
gradientButton.addEventListener("click", function(){
    mode="gradient";
})
classicButton.addEventListener("click", function(){
    mode="basic";
})
 function generateRainbowColor(){
     return "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";
 }
function generateGradientColor(gridSquare){
    let currentColor = gridSquare.style.backgroundColor;
    return "black";
}