let faqButtons = document.querySelectorAll("div.question-bar");
let symbols = document.querySelectorAll("p.symbol");

for (let i=0; i < faqButtons.length; i++) {
    faqButtons[i].addEventListener("click", function () {
        let nextPart = this.nextElementSibling;

        var symbolParagraph = symbols[i];

        while(!(nextPart.classList.contains('answer'))) {
            nextPart = nextPart.nextElementSibling;
        }

        let answerParagraph = nextPart;
        
        var questionContainer = this.parentElement;
        if (answerParagraph.style.display == "block") {
            symbolParagraph.innerHTML = "+";
            answerParagraph.style.display = "none";
        } else {
            answerParagraph.style.display = "block";
            symbolParagraph.innerHTML = "-";
        }
    });
}