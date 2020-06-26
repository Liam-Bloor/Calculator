var number = []
var number2 = []
var operator = ""
var operatorUsed = false
var answer
var ansGiven = false
var i
document.addEventListener('DOMContentLoaded', () => {


 /*-----------  Initialise buttons ----------*/


const nine = document.querySelector("#nine")
const eight = document.querySelector("#eight")
const seven = document.querySelector("#seven")
const six = document.querySelector("#six")
const five = document.querySelector("#five")
const four = document.querySelector("#four")
const three = document.querySelector("#three")
const two = document.querySelector("#two")
const one = document.querySelector("#one")
const zero = document.querySelector("#zero")
const point = document.querySelector("#point")
const plus = document.querySelector("#plus")
const minus = document.querySelector("#minus")
const multiply = document.querySelector("#multiply")
const divide = document.querySelector("#divide")
const equals = document.querySelector("#equals")
const output = document.querySelector("#output")


/*-----------  Initialise variables ----------*/

var ans = "ans"
var num = 0
var exponent = false
var j = 12


seven.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = 7
  storeNum(num)
  ans = checkLength(ans, num)
  output.innerHTML = ans
})

eight.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = 8
  storeNum(num)
  ans = checkLength(ans, num)
  output.innerHTML = ans
})

nine.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = 9
  storeNum(num)
  ans = checkLength(ans, num)
  output.innerHTML = ans
})

four.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = 4
  storeNum(num)
  ans = checkLength(ans, num)
  output.innerHTML = ans
})

five.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = 5
  storeNum(num)
  ans = checkLength(ans, num)
  output.innerHTML = ans
})

six.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = 6
  storeNum(num)
  ans = checkLength(ans, num)
  output.innerHTML = ans
})

one.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = 1
  storeNum(num)
  ans = checkLength(ans, num)
  output.innerHTML = ans
})

two.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = 2
  storeNum(num)
  ans = checkLength(ans, num)
  output.innerHTML = ans
})

three.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = 3
  storeNum(num)
  ans = checkLength(ans, num)
  output.innerHTML = ans
})

zero.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = 0
  storeNum(num)
  ans = checkLength(ans, num)
  output.innerHTML = ans
})

point.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = "."
  storeNum(num)
  ans = checkLength(ans, num)
  output.innerHTML = ans
})



add.addEventListener("click", () => {
  reset()
  operatorUsed = true
  this.exponent = false
  i = 0
  operator = "+"
  ans = "+"
  output.innerHTML = ans
})

minus.addEventListener("click", () => {
  reset()
  operatorUsed = true
  operator = "-"
  ans = "-"
  output.innerHTML = ans
})

multiply.addEventListener("click", () => {
  reset()
  operatorUsed = true
  operator = "×"
  ans = "×"
  output.innerHTML = ans
})

divide.addEventListener("click", () => {
  reset()
  operatorUsed = true
  operator = "÷"
  ans = "÷"
  output.innerHTML = ans
})

equals.addEventListener("click", () => {
  if(operatorUsed){
    ansGiven = true
    console.log(number, number2)
    arrayToNumber()
    switch(operator){
      case "+":
        answer = parseFloat(this.number.join("")) + parseFloat(this.number2.join(""))
        answer = checkLength(answer.toString())
        output.innerHTML = answer
        break
      case "-":
        answer = parseFloat(this.number.join("")) - parseFloat(this.number2.join(""))
        console.log(number, number2, answer)
        output.innerHTML = answer
        break
      case "×":
        answer = parseFloat(this.number.join("")) * parseFloat(this.number2.join(""))
        console.log(number, number2, answer)
        output.innerHTML = answer
        break
      case "÷":
        answer = parseFloat(this.number.join("")) / parseFloat(this.number2.join(""))
        console.log(number, number2, answer)
        output.innerHTML = answer
        break
    }
  }
})

function reset(){
  if(ansGiven){
    ansGiven = false
    number = []
    number2 = []
    ans = ""
    operator = ""
    operatorUsed = false
  }
}

function arrayToNumber(number, number2){
  number = parseInt(this.number.join(""))
  number2 = parseInt(this.number2.join(""))
  console.log(number, number2)

  return number, number2
}

})
function storeNum(num){//push number pressed to array
  if(!operatorUsed){
    this.number.push(num.toString())
    console.log(number)
  }else{
    this.number2.push(num)
    console.log(number2)
  }
}
function checkLength(ans, num){
  console.log(num !== NaN)
  if(ans.length === 11){
    i = 13 //first standard form will be to the power of 13
  }
  if(this.exponent){ //If we have an exponent
    i += 1
    var ansArr = ans.split("")
    if(i >= 100){
      ansArr.splice(ansArr.length - 3, 3, i) //remove numbers after E and add new i
    }else if(i >= 10){
      ansArr.splice(-1,1)
      ansArr.splice(-1,1)
      ansArr.push(i)
    }else{
      ansArr.splice(ansArr.length - 1, 1, i)
    }
    ans = ansArr.join("")
    return ans
  }
  if(ans.length > 11){ //initialise exponent when ans length > length of box
    var ansArr = ans.split("", ans.length-6)
    ansArr.push("E", i.toString())
    ansArr.splice(1,0,".")
    ans = ansArr.join("")
    exponent = true
    return ans
  }else if(num !== NaN){
    ans += num
    return ans
  }

}
