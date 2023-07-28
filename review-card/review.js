const reviews = [
    {
        id: 1,
        name: "Michael Scott",
        job: "Regional Manager",
        image: "./images/michael.png",
        text: "Oh, Dunder Mifflin! The greatest paper company in the world, or at least in Scranton, Pennsylvania. As the regional manager, I have to say that Dunder Mifflin is like a family—a slightly dysfunctional one, but still a family nonetheless."
    },
    {
        id: 2,
        name: "Jim Halpert",
        job: "Sales Representative",
        image: "./images/jim.png",
        text: "Dunder Mifflin, where paper dreams come true, or at least, where we try to make the best of it. As a salesman, I've spent countless hours in this office, and it's been quite the ride."
    },
    {
        id: 3,
        name: "Dwight Schrute",
        job: "Assistant to the Regional Manager",
        image: "./images/dwight.png",
        text: "Dunder Mifflin, the pinnacle of paper excellence! As a dedicated employee and Assistant to the Regional Manager, I take immense pride in this company and all it represents."
    },
    {
        id: 4,
        name: "Creed Bratton",
        job: "Quality Assurance Manager",
        image: "./images/creed.png",
        text: "Dunder Mifflin? Ah, yes, it's an interesting place, to say the least. As the mysterious quality assurance director, I've seen it all from the sidelines, and boy, what a ride it's been."
    },
    {
        id: 5,
        name: "Kevin Malone",
        job: "Accountant",
        image: "./images/kevin.png",
        text: "Dunder Mifflin, yeah! It's the paper company where I work, and let me tell you, the best part of Dunder Mifflin? The snacks! We have this vending machine that's filled with candy, and I can't resist it. Sometimes I eat too much candy, but it's just so good!"
    },
    {
        id: 6,
        name: "Stanley Hudson",
        job: "Salesman",
        image: "./images/stanley.png",
        text: "Dunder Mifflin, the paper company I've spent way too many years working at. It's a typical office setting with all the usual office drama. The best moments at Dunder Mifflin are when it's time to go home. Nothing beats the feeling of leaving this place behind and heading home to relax."
    }
];

const img = document.getElementById("img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const review = document.getElementById("review");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const random = document.querySelector(".random");

const length = reviews.length;

//set starting item
let currentItem = 0;

//load initial item
window.addEventListener("DOMContentLoaded", function(){
    showPerson(currentItem);
})

//show person based on item
function showPerson() {
    const item = reviews[currentItem];
    img.src = item.image;
    author.textContent = item.name;
    job.textContent = item.job;
    review.textContent = item.text;
}

next.addEventListener("click", function(){
    currentItem++;
    if(currentItem > (length - 1)){
        currentItem = 0;
    }
    showPerson()
})

prev.addEventListener("click", function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = (length - 1);
    }
    showPerson()
})


random.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * length);
    console.log(currentItem)
    showPerson()
})
