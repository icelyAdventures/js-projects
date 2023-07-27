const colors = [
    "green",
    "yellow",
    "red",
    "white",
    "#c54444",
    "#44c5bacb",
    "#ba44c5"
];


const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", function(){
    //get random number btwn 0 - 3
    // const randomNumber = 2;
    const randomNumber = Math.floor(Math.random() * (colors.length - 1));

    document.body.style.backgroundColor = colors[randomNumber];
    document.body.style.transition = "0.5s";

    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.random()
}