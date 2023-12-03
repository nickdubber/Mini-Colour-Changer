//get click from anywhere on the page
document.getElementById("entireScreenButton").onclick = 


//Call all functions on click
function call(){
    alertClick();
    generateRandomColour();
    changeBackground();
}

//alert click
function alertClick (){
    console.log("Recieved Click")
}

//generate a random colour
function generateRandomColour(){
    let backgroundColors = ["blue", "red", "yellow", "green", "orange", "purple", "brown"];
    let selectedColorIndex = Math.floor(Math.random()*backgroundColors.length);
    let selectedColor = backgroundColors[selectedColorIndex];
    return selectedColor;
}

function changeBackground(){
    let selectedColor = generateRandomColour ();
    

//apply generated random colour to body style
document.getElementById("myBody").style.backgroundColor = selectedColor;

//log the word of the colour in the middle of the screen
document.getElementById("colChoice").innerHTML = selectedColor;
}


