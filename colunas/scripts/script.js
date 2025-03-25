const main = document.getElementById("main")

function clique(num) {
    if(num === 1) {
        main.style.backgroundImage = "url('./imgs/system-of-a-down-53dff3149ce3f.jpg')"
    } else if(num === 2) {
        main.style.backgroundImage = "url('./imgs/a28a81253e919298beab2295e39a56b7a5140ef15abdb56135655e5c221b2a3a.avif')"
    } else {
        main.style.backgroundImage = "url('./imgs/images.jpg')"
    }
}