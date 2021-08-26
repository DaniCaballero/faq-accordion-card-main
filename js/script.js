const accordionBtns = document.querySelectorAll(".accordion");
const box = document.getElementById("box");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
        
        this.classList.toggle("is-open");

        let arrow = this.firstElementChild;
        let content = this.nextElementSibling;

        arrow.classList.toggle("arrow-up");

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    };

    accordion.onmouseover = function () {
        console.log(this);
        this.style.color = "hsl(14, 88%, 65%)";

        
        console.log(box);

        box.classList.add("box-hover");
    };

    accordion.onmouseout = function() {
        this.style.color = "";

        box.classList.remove("box-hover");
    };
});