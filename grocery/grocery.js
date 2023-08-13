// SELECT ITEMS 
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");


//edit option
let editElement;
let editFlag = false;
let editId = "";

// checked option
let checkElement;
let checkFlag = false;

// Event listeners 
// submit form 
form.addEventListener("submit", addItem);
// clear items 
clearBtn.addEventListener("click", clearItems);
// load items 
window.addEventListener("DOMContentLoaded", setupItems);


// FUNCTIONS 
function addItem(e){
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();

    if(value && !editFlag){
        createListItem(id, value)
        // display alert 
        displayAlert(`"${value}" added to list!`, "success")
        // show container 
        container.classList.add("show-container");

        // add to local storage
        addToLocalStorage(id, value);

        // set back to default 
        setBackToDefault();

    } else if(value && editFlag) {
        editElement.innerHTML = value;
        displayAlert("edited item succesfully!", "edit");
        // edit local storage
        editLocalStorage(editId, value);

        // submitBtn.classList.remove("editing");
        setBackToDefault();
    } else {
        displayAlert("please enter value", "danger")
    }
    
    
}

function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    //remove alert
    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}

// clear items 
function clearItems() {
    const allItems = document.querySelectorAll(".grocery-item");

    if(allItems.length > 0){
        allItems.forEach(function(item){
            list.removeChild(item)
        })
    }

    container.classList.remove("show-container");
    displayAlert("cleared list", "success");
    localStorage.removeItem("list");
    setBackToDefault();

}

// edit function 
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;

    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    
    //set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = "edit";
    submitBtn.classList.add("editing")

}


// delete function 
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;

    list.removeChild(element);

    if(list.children.length === 0){
        container.classList.remove("show-container")
    }

    displayAlert(`item removed`, "danger");
    setBackToDefault();

    // remove from local storage 
    removeFromLocalStorage(id);
}


// check function
function checkItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const checkElement = e.currentTarget.parentElement.previousElementSibling;
    
    if(!checkElement.checkFlag){
        list.lastElementChild = list.appendChild(element);
        checkElement.classList.add("checked");
        displayAlert(`item checked`, "success");
        checkElement.checkFlag = true;
    } else {
        checkElement.classList.remove("checked");
        // list.removeChild(element);
        list.insertBefore(element, list.firstElementChild);
        displayAlert(`item unchecked`, "danger");
        checkElement.checkFlag = false;
    }

    setBackToDefault();
}



// set back to default 
function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editId = "";
    submitBtn.textContent = "submit";

    if(submitBtn.classList.contains("editing")){
        submitBtn.classList.remove("editing")
    }
}

// LOCAL STORAGE 
function addToLocalStorage(id, value){
    const grocery = {id:id, value:value};
    let items = getLocalStorage();

    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));

}

function getLocalStorage(){
    return localStorage.getItem("list") 
            ? JSON.parse(localStorage.getItem("list"))
            : [];
}

function editLocalStorage(id, value){
    let items = getLocalStorage();
    items = items.map(function(item){
        if(item.id === id){
            item.value = value;
        }

        return item;
    })

    localStorage.setItem("list", JSON.stringify(items))
}

// localStorage API 
// setItem 
// getItem 
// removeItem 
// save as strings 

// localStorage.setItem("milk", JSON.stringify(["item", "item2"]));
// const milkies = JSON.parse(localStorage.getItem("milk"))
// localStorage.removeItem("milk")

function removeFromLocalStorage(id){
    let items = getLocalStorage();
    items = items.filter(function(item){
        if(item.id !== id){
            return items;
        }
    })

    localStorage.setItem("list", JSON.stringify(items));
}

// SETUP ITEMS 

function setupItems(){
    let items = getLocalStorage();
    if(items.length > 0){
        items.forEach(function(item){
            createListItem(item.id, item.value);
        })
        container.classList.add("show-container")
    }
}

function createListItem(id, value){
    const element = document.createElement("article");

    // add class 
    element.classList.add("grocery-item");

    // add id 
    const attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `<p class="title">${value}</p>
                        <div class="btn-container">
                            <button class="edit-btn" type="button">
                                <i class="fas fa-edit"></i>
                            </button>
                            <button class="delete-btn" type="button">
                                <i class="fas fa-trash"></i>
                            </button>
                            <button type="button" class="check-btn">
                                <i class="fa-solid fa-check"></i>
                            </button>
                        </div>`;

    const editBtn = element.querySelector(".edit-btn");
    const deleteBtn = element.querySelector(".delete-btn");
    const checkBtn = element.querySelector(".check-btn");

    editBtn.addEventListener("click", editItem);
    deleteBtn.addEventListener("click", deleteItem);
    checkBtn.addEventListener("click", checkItem);

    
    // append child 
    list.appendChild(element);
}