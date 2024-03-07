let start = document.querySelector(".start"),
    settings = document.querySelector(".settings"),
    start_btn = document.querySelector(".start-btn"),
    settings_btn = document.querySelector(".settings-btn"),
    first_page = document.querySelector(".first-page"),
    finish = document.querySelector(".finish"),
    back = document.querySelector(".back"),
    hard = document.querySelector(".hard"),
    normal = document.querySelector(".normal"),
    easy = document.querySelector(".easy"),
    easy_e = document.querySelector(".easy-e"),
    normal_n = document.querySelector(".normal-n"),
    hard_h = document.querySelector(".hard-h"),
    finish_game = document.querySelector(".finish-game")



start.style.display = "none"
settings.style.display = "none"

hard.style.display = "none"
normal.style.display = "none"
easy.style.display = "none"
settings_btn.style.display = "none"
finish_game.style.display = "none"


start_btn.addEventListener("click", () => {
    settings.style.display = "block"
    first_page.style.display = "none"
})

easy_e.addEventListener("click", () => {
    start.style.display = "block"
    easy.style.display = "block"
    setTimeout(() => {
        settings.style.display = "none"
    }, 300);
})

hard_h.addEventListener("click", () => {
    start.style.display = "block"
    hard.style.display = "block"
    setTimeout(() => {
        settings.style.display = "none"
    }, 300);
})

normal_n.addEventListener("click", () => {
    start.style.display = "block"
    normal.style.display = "block"
    setTimeout(() => {
        settings.style.display = "none"
    }, 300);
})

settings_btn.addEventListener("click", () => {
    settings.style.display = "block"
    first_page.style.display = "none"
})

finish.addEventListener("click", () => {
    start.style.display = "none"
    finish_game.style.display = 'block'
})

back.addEventListener("click", () => {
    first_page.style.display = "block"
    settings.style.display = "none"
})

let first_question = document.querySelector(".first-question"),
    second_question = document.querySelector(".second-question"),
    third_question = document.querySelector(".third-question"),
    fourth_question = document.querySelector(".fourth-question"),
    fiveth_question = document.querySelector(".fiveth-question"),
    sixth_question = document.querySelector(".sixth-question"),
    seventh_question = document.querySelector(".seventh-question"),
    eighth_question = document.querySelector(".eighth-question"),
    nineth_question = document.querySelector(".nineth-question"),
    tenth_question = document.querySelector(".tenth-question"),
    end = document.querySelector(".end"),
    thanks = document.querySelector(".thanks")


    function result() {
        var i = 0

        if(document.getElementById("correct1").checked) {
            i++;
        } else if(document.getElementById("correct2").checked) {
            i++;
        } else if(document.getElementById("correct3").checked) {
            i++;
        } else if(document.getElementById("correct4").checked) {
            i++;
        } else if(document.getElementById("correct5").checked) {
            i++;
        } else if(document.getElementById("correct6").checked) {
            i++;
        }

        alert("your score: " + i)

        first_page.style.display = "block"
        start.style.display = "none"

    }

let yes = document.querySelector(".yes"),
    no = document.querySelector(".no")


yes.addEventListener("click", () => {
    finish_game.style.display = "none"
    end.style.display = "block"
})

no.addEventListener("click", () => {
    start.style.display = "block"
    finish_game.style.display = "none"
})

normal_n.addEventListener("click", () => {
    easy.style.display = "none"
    hard.style.display = "none"
})

easy_e.addEventListener("click", () => {
    normal.style.display = "none"
    hard.style.display = "none"
})

hard_h.addEventListener("click", () => {
    easy.style.display = "none"
    normal.style.display = "none"
})

end.style.display = "none"

thanks.addEventListener("click", () => {
    first_page.style.display = "block"
    end.style.display = "none"
})