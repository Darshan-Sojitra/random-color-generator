let btn = document.querySelector('.btn');

btn.addEventListener("click",function(){
    let body = document.querySelector("body");
    let color = document.querySelector("h3");
    let randomColor = getrandomcolor();
    color.innerText = randomColor
    
    console.log("button was clicked!")

    body.style.backgroundColor = randomColor;
})

function getrandomcolor(){
    //rbg goes from 0-255 
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = `rgb(${red},${green},${blue})`;
    
    return color;
}