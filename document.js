


let click = document.querySelector(".sortear")


function clickButton() {

    const min = Math.ceil(document.querySelector(".left").value)
    const max = Math.floor(document.querySelector(".right").value)
    const number = document.querySelector(".result")
    const result = Math.floor(Math.random() * (max - min) + min);

    number.innerHTML = result

    if (max >= min) {
        console.log("valor correto")
        number.style.color = "#a486b0"
    } else {
        number.innerHTML = "ERRO!! O valor MÍNIMO tem que ser MENOR que o valor MÁXIMO "
        number.style.color = "red"
    }

}

click.addEventListener("click", clickButton)








