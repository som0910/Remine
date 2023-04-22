const counter = document.querySelectorAll(".counter")
const speed = 20

counter.forEach(function (current) {
    function update() {
        const target = parseInt(current.dataset.number)
        const initial = parseInt(current.innerText)
        const increment = Math.trunc(target / speed)
        if (initial < target) {
            current.innerText = `${initial + increment}+`
        }
        setTimeout(update, 10)
    }
    update()
});

//POPUP
const mycarousel = document.querySelector('.mycarousel')
const popup = document.querySelector('.schedule-call')
window.addEventListener("load", function () {
    setTimeout(function () {
        popup.classList.add('visibility')
        mycarousel.classList.add('dark')
    }, 2000)

    document.onclick = function (div) {
        if (div.target.id != 'schedule-call') {
            popup.style.display = 'none'
            mycarousel.classList.add('light')
        }
    }
})