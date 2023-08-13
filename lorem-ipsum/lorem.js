const text = [
    `A dropout will beat a genius through hard work.” –  Rock Lee from the anime Naruto.`,
    `Forgetting is like a wound. The wound may heal, but it has already left a scar. – Monkey D. Luffy from the anime One Piece`,
    `When you lose sight of your path, listen for the destination in your heart. – Allen Walker from the anime D.Gray Man`,
    `Enjoy your life today. Yesterday is gone, and tomorrow might never come. – Takeshi Yamamoto from the anime Katekyo Hitman Reborn!`,
    `Never trust anyone too much; remember, the devil was once an angel – Kaneki from the anime Tokyo Ghoul`,
    `How can you keep moving forward if you keep regretting the past? – Edward Elric from Fullmetal Alchemist: Brotherhood`,
    `It’s okay to feel depressed. It takes time to overcome things. And then, by taking that time, you just start moving forward again. That’s just what humans do. – Mondo Oowada from  the anime  Danganronpa: Trigger Happy Havoc`,
    `You focus on the trivial and lose sight of what is most important; change is impossible in this fog of ignorance. – Itachi Uchiha from the anime Naruto`,
    `Stop pitying yourself. Pity yourself, and life becomes an endless nightmare. – Dazai from the anime bungou stray dogs`,
    `You should never give up on life, no matter how you feel. No matter how badly you want to give up. – Canaan from the anime Canaan`,
    `People’s lives don’t end when they die, it ends when they lose faith.  – Itachi Uchiha from the anime Naruto`,
    `Even if we’re not confident that we’ll win, even if others tell us we don’t stand a chance, we must never tell ourselves that. – Daichi Sawamura from the anime Haikyuu!`,
];

const form = document.querySelector(".lorem-form");
const amount = document.getElementById("amount");
const result = document.querySelector(".lorem-text");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length)

    if(isNaN(value) || value <= 0 || value > text.length){
        result.innerHTML = `<p class="result">${text[random]}</p>`
    }

     else {
        let tempText = text.slice(0, value)
        tempText = tempText.map(function(item){
            return `<p class="result">${item}</p>`
        }).join("");

        result.innerHTML = tempText;
     }


})