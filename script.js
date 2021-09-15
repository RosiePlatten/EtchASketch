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
            gridSquare.style.backgroundColor="rgba(0,0,0,0)"
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
            return "rgba(0,0,0,1)";
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
    deleteGridSquares();
    setUpGrid(sizeSlider.value);
})
gradientButton.addEventListener("click", function(){
    mode="gradient";
    deleteGridSquares();
    setUpGrid(sizeSlider.value);
})
classicButton.addEventListener("click", function(){
    mode="basic";
    deleteGridSquares();
    setUpGrid(sizeSlider.value);
})
 function generateRainbowColor(){
     return "rgba("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+",1)";
 }
function generateGradientColor(gridSquare){
    let color = gridSquare.style.backgroundColor;
    color=color.split(",");
    let alpha=color.pop();
    alpha=alpha.substring(0,alpha.length-1);
    alpha = +alpha + +0.1;
    alpha=alpha+")";
    color.push(alpha);
    color=color.join(",");
    return color;
}