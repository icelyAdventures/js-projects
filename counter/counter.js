
let count = 0;

const counter = document.querySelector(".count")
const btns = document.querySelectorAll(".btn")



btns.forEach(function(btn) {
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
       
        if(styles.contains("decrease")){
            count--;
        }

        if(styles.contains("increase")){
            count++;
        }

        if(styles.contains("reset")){
            count = 0;
        }

        if(count > 0){
            counter.style.color = "green"
        } else if(count < 0){
            counter.style.color = "red"
        } else {
            counter.style.color = "#000"
        }
        counter.textContent = count
    })
})