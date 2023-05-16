const red = document.getElementById("red")
const green = document.getElementById("green")
const blue = document.getElementById("blue")

const r_value = document.getElementById("r_value")
const g_value = document.getElementById("g_value")
const b_value = document.getElementById("b_value")

// const page = document.getElementById("body")
const result = document.getElementById("result")

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
}

// result.onmouseover = () => {
//     result.style.backgroundColor = document.body.style.backgroundColor
// }
// result.onmouseout = () => {
//     result.style.backgroundColor = "#fffff"
// }

