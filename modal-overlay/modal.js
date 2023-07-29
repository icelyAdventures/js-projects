const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const model = document.querySelector(".modal-overlay");


openBtn.addEventListener("click", function(){
    model.classList.add("show-modal")
})

closeBtn.addEventListener("click", function(){
    model.classList.remove("show-modal")
})