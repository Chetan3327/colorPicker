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
    document.getElementsByTagName('meta')['theme-color'].content = rgb22hex(r,g,b)
    // resultHex.innerText = rgb2hex(`rgb(${r},${g},${b})`)
    resultHex.innerText = rgb22hex(r,g,b)
    console.log(rgb22hex(r,g,b));
    
}

// const rgb2hex = (rgb) => `#${rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/).slice(1).map(n => parseInt(n, 10).toString(16).padStart(2, '0')).join('')}`

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



function copy(obj){
    // result.select()
    // navigator.clipboard.writeText(result.value)

    try {
        navigator.clipboard.writeText(obj.innerText);
        console.log(obj);
        console.log('Content copied to clipboard');
    }catch (err) {
        console.error('Failed to copy: ', err);
    }
}