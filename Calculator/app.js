let input = document.getElementById('input-box')
// let x =[]

function cal(num){
    input.value += num
}

function calculate(){
    input.value = eval(input.value)
}
function clearAll(){
    input.value = "";
}
function del(){
    input.value = input.value.slice(0,-1)
}

function percentage(){
    let data = input.value.split('%')
    let y = (data[1] * (data[0] || 1) ) /100
    input.value = y
}


function answer(){
    let x = input.value
    let a = x.includes("%")
    if(a  == true){
        percentage()
    }
    else{
        calculate()
    }
}