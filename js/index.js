const image = document.querySelectorAll(".image")
const imageSlide2 = document.querySelector(".imageSlide2")
let i = 5

const imageCar = () => {
    if (i >= -7){
        if ( i === 4) image[i].style.transform = `translateX(${imageSlide2.clientWidth}px)`
        else if (i === 3) image[i].style.transform = `translateX(-${imageSlide2.clientWidth}px)`
        else if (i === 2 || i === 1 ) image[i].style.opacity = '0'
        else if (i === 0 || i === -6) {
            image[3].style.transform = `translateX(0px)`
            image[3].style.transform = `translateY(0px)`
        }
        else if (i === -1) image[4].style.transform = `translateX(0px)`
        else if (i === -2) {
            image[1].style.opacity = '1'
            image[2].style.opacity = '1'
            image[4].style.transform = `translateY(${imageSlide2.clientHeight}px)`}
        else if (i === -3) image[3].style.transform = `translateY(-${imageSlide2.clientHeight}px)`
        else if (i === -4) image[2].style.opacity = '0'
        else if (i === -5) image[1].style.opacity = '0'
        else if (i === -7) {
            image[1].style.opacity = '1'
            image[2].style.opacity = '1'
            image[4].style.transform = `translateY(0px)`
            return i = 5
        }
    }
}

setInterval(() => { i--; imageCar() },3000)