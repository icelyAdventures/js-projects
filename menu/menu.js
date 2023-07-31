// const menu = ["breakfast", "lunch"]
const menu = [
    {
        id: 1,
        title: "Buttermilk Pancakes",
        price: 10.00,
        category: "breakfast",
        img: "./menu-images/buttermilk-pancake.jpg",
        desc: "This is a buttermilk pancake. It will taste like a buttermilk pancake, what else?"
    },
    {
        id: 2,
        title: "Eggs Benedict",
        price: 15.00,
        category: "breakfast",
        img: "./menu-images/eggs-benedict.jpg",
        desc: "The best eggs benedict you can find. No, it's not made by Benedict Cucumberbatch."
    },
    {
        id: 3,
        title: "French Toast",
        price: 10.00,
        category: "breakfast",
        img: "./menu-images/french-toast.jpg",
        desc: "It's called French Toast but it wasn't made by the French."
    },
    {
        id: 4,
        title: "Pandan Waffle",
        price: 10.00,
        category: "breakfast",
        img: "./menu-images/pandan-waffle.jpg",
        desc: "The \"Let's Go Green\" slogan didn\'t just end at global warming issues."
    },
    {
        id: 5,
        title: "Bacon Carbonara",
        price: 20.00,
        category: "lunch",
        img: "./menu-images/buttermilk-pancake.jpg",
        desc: "Trust me, eating this won't make you Italian. Mamma mia!"
    },
    {
        id: 6,
        title: "Seafood Risotto",
        price: 25.00,
        category: "lunch",
        img: "./menu-images/seafood-risotto.jpg",
        desc: "Prince Eric from Lil Mermaid tasted this and started liking seawomen."
    },
    {
        id: 7,
        title: "Chicken Quesadillas",
        price: 18.00,
        category: "lunch",
        img: "./menu-images/quesadillas.jpg",
        desc: "Your ticket to Mexico starts here."
    },
    {
        id: 8,
        title: "Strawberry Milkshake",
        price: 6.00,
        category: "shakes",
        img: "./menu-images/strawberry-milkshake.jpg",
        desc: "It's not wrong to like pink anymore."
    },
    {
        id: 9,
        title: "Chocolate Milkshake",
        price: 6.00,
        category: "shakes",
        img: "./menu-images/chocolate-milkshake.jpg",
        desc: "Here's your cheatday drink!"
    },
    {
        id: 10,
        title: "Banana Milkshake",
        price: 6.00,
        category: "shakes",
        img: "./menu-images/banana-milkshake.jpg",
        desc: "Bananas are just a substitute for... vanilla duh!"
    },
    {
        id: 11,
        title: "Classic Steak",
        price: 36.00,
        category: "dinner",
        img: "./menu-images/steak.jpg",
        desc: "Support the vegans by stopping the cows from eating all their food!"
    },
    {
        id: 12,
        title: "Peking Duck",
        price: 33.00,
        category: "dinner",
        img: "./menu-images/peking-duck.jpg",
        desc: "I guess you know what you'll be peking for dinner tonight!"
    },
]


// buttons 

//food container
// const items = document.querySelectorAll(".items");
const itemContainer = document.querySelector(".items-container");
const filterContainer = document.querySelector(".filter");



// load items 
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu);
    getCategories(menu)
})

//get unique categories

function getCategories(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category)
        }
        return values
    }, ["all"])

    const categoryBtns = categories.map(function(category){
        return `<button class="filter-btn filter-breakfast"  data-id="${category}">${category}</button>`
    }).join("");
    filterContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".filter-btn");

    filterBtns.forEach(function(btn){
        btn.addEventListener("click", function(e){
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function(menuItem) {
                if(menuItem.category === category){
                    return menuItem;
                }
            })
    
            if(category === "all"){
                displayMenuItems(menu)
            } else {
                displayMenuItems(menuCategory)
            }
        })
        
    })
}


//Display items
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
        return `<div class="items ${item.category}">
                    <img src=${item.img} alt=${item.title}>
                    <div class="items-info">
                        <div class="item-title">
                            <h3>${item.title}</h3>
                            <h3 class="price">$${item.price}</h3>
                        </div>
                        <div class="items-description">
                            <hr>
                            <p>${item.desc}</p>
                        </div>
                    </div>
                </div>`
    })

    displayMenu = displayMenu.join("");
    itemContainer.innerHTML = displayMenu;
}