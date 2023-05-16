const red = document.getElementById("red")
const green = document.getElementById("green")
const blue = document.getElementById("blue")

const r_value = document.getElementById("r_value")
const g_value = document.getElementById("g_value")
const b_value = document.getElementById("b_value")

// const page = document.getElementById("body")
const result = document.getElementById("result")
const resultHex = document.getElementById("resultHex")

function update(){
    let r = parseInt(red.value)
    let g = parseInt(green.value)
    let b = parseInt(blue.value)

    r_value.innerText = r
    g_value.innerText = g
    b_value.innerText = b

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`
    // result.value = `rgb(${r},${g},${b})`
    result.innerText = `rgb(${r},${g},${b})`
    resultHex.innerText = rgb22hex(r,g,b)
}

const rgb22hex = (...args) => {
    let r = '#'
    for(let arg of args){
        r += arg.toString(16).padStart(2,'0')
    }
    return r 
}





// result.onmouseover = () => {
//     result.style.backgroundColor = document.body.style.backgroundColor
// }
// result.onmouseout = () => {
//     result.style.backgroundColor = "#fffff"
// }

