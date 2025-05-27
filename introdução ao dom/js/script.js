const btns = document.querySelectorAll(".button")

function aleatoria() {
    return Math.random() * 255
}

btns.forEach((btn)=> {
    btn.addEventListener("mouseover", (el) => {
        btn.style.backgroundColor = `rgb(${aleatoria()}, ${aleatoria()}, ${aleatoria()})`
        btn.style.borderColor = `rgb(${aleatoria()}, ${aleatoria()}, ${aleatoria()})`
    })
    
    btn.addEventListener("click", (el) => {
        btn.style.backgroundColor = "white"
        btn.style.borderColor = "black"
    })
})