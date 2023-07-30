//using selectors inside the element
//Option 1:
const questions = document.querySelectorAll(".questions-box")

questions.forEach(function(question){
    const btn = question.querySelector(".questions-btn");
    
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text")
            }
        })

        question.classList.toggle("show-text")
    })
})


//traversing the dom
//Option 2:

// const buttons = document.querySelectorAll(".questions-btn")

// buttons.forEach(function (btn) {
//     btn.addEventListener("click", function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text")
//     })
// })