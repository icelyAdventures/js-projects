let btns = document.querySelectorAll(".tab-btn");
let contents = document.querySelectorAll(".content");
let about = document.querySelector(".about")


about.addEventListener("click", function(e){
    const id = e.target.dataset.id;

    if(id){
        btns.forEach(function(btn){
            console.log(btn.target.classList);
        })

        contents.forEach(function(content){
            content.classList.remove("active")
            // console.log(content);
        })
        
        const element = document.getElementById(id);
        element.classList.add("active");
        // btns.classList.add("active")
        // element.classList.add("active-btn");
        // element.style.backgroundColor = "#fff"
        // element
        // console.log();
        
        
    }
})

