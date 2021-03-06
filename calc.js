/*------------------------------------------------------------------------------------------------------
--------------------------------Author : Liam Bloor-----------------------------------------------------
--------------------------------Basic calculator app, made from scratch---------------------------------
------------------------------------------------------------------------------------------------------*/

/*-----------  Initialise variables ----------*/


var number = []
var number2 = []
var operator = ""
var operatorUsed = false
var answer
var ansGiven = false
var exponent = false
var ansArr
var finalAns = false
decimal = false
var alreadyExp = false
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


var ans = "ans"
var num = 0

 /*----------- Button functionality ----------*/

seven.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  reset()
  num = 7
  storeNum(num)
  ans = checkLength(ans, num)
  changeSize(ans)
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
  changeSize(ans)
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
  changeSize(ans)
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
  changeSize(ans)
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
  changeSize(ans)
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
  changeSize(ans)
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
  changeSize(ans)
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
  changeSize(ans)
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
  changeSize(ans)
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
  changeSize(ans)
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
  changeSize(ans)
  output.innerHTML = ans
})

add.addEventListener("click", () => {
  reset()
  operatorUsed = true
  decimal = false
  alreadyExp = false
  this.exponent = false
  operator = "+"
  ans = "+"
  output.innerHTML = ans
})

minus.addEventListener("click", () => {
  reset()
  operatorUsed = true
  this.exponent = false
  decimal = false
  alreadyExp = false
  operator = "-"
  ans = "-"
  output.innerHTML = ans
})

multiply.addEventListener("click", () => {
  reset()
  operatorUsed = true
  this.exponent = false
  decimal = false
  alreadyExp = false
  operator = "×"
  ans = "×"
  output.innerHTML = ans
})

divide.addEventListener("click", () => {
  reset()
  operatorUsed = true
  this.exponent = false
  decimal = false
  alreadyExp = false
  operator = "÷"
  ans = "÷"
  output.innerHTML = ans
})

equals.addEventListener("click", () => {
  if(operatorUsed){
    ansGiven = true
    arrayToNumber()
    switch(operator){
      case "+":
        answer = parseFloat(this.number.join("")) + parseFloat(this.number2.join(""))
        answer = roundDecimal(answer.toString())
        answer = checkLength(answer.toString())
        changeSize(answer)
        output.innerHTML = answer
        break
      case "-":
        answer = parseFloat(this.number.join("")) - parseFloat(this.number2.join(""))
        answer = roundDecimal(answer.toString())
        answer = checkLength(answer.toString())
        changeSize(answer)
        output.innerHTML = answer
        break
      case "×":
        answer = parseFloat(this.number.join("")) * parseFloat(this.number2.join(""))
        answer = roundDecimal(answer.toString())
        answer = checkLength(answer.toString())
        changeSize(answer)
        output.innerHTML = answer
        break
      case "÷":
        answer = parseFloat(this.number.join("")) / parseFloat(this.number2.join(""))
        answer = roundDecimal(answer.toString())
        answer = checkLength(answer.toString())
        changeSize(answer)
        output.innerHTML = answer
        break
    }
  }
})

 /*-----------  Rounds decimals to avoid wrong standard form  ----------*/
function roundDecimal(num){
  regex = /([0-9])\1+/
  const result = num.match(regex)
  if(result != null){
    if(result[0].length >=5){
      num = num.split("", 7)
      if(result[1] == 9){ //correctly round floating point error (eg. 0.6 - 0.2 = 0.39999999 -> 0.4)
        num = parseFloat(num.join(""))
        num += 0.00001
        return num
      }
      return num.join("")
    }
  }else{
    return num
  }
  return num
}

 /*-----------  As length of answer increases the font size decreases, so it remains in the ans box ----------*/
function changeSize(ans){
  if(ans.length > 11){
    let coefficient = ans.length - 11
    let fontSize = 7 - (coefficient * 0.3)
    fontSize += "vh"
    document.getElementById("output").style.fontSize = fontSize;
  }else{
    let fontSize = 7 + "vh"
    document.getElementById("output").style.fontSize = fontSize;
  }
}

 /*-----------  After each calculation reset all variables ----------*/
function reset(){
  if(ansGiven){
    ansGiven = false
    number = []
    number2 = []
    ansArr = []
    ans = ""
    operator = ""
    operatorUsed = false
    decimal = false
    alreadyExp = false
    exponent = false
    changeSize(ans)
  }
}

 /*-----------  Converts the two numbers from their arrays ----------*/
function arrayToNumber(number, number2){
  number = parseFloat(this.number.join(""))
  number2 = parseFloat(this.number2.join(""))
  return number, number2
}

})


function storeNum(num){//push number pressed to array
  if(!operatorUsed){
    this.number.push(num.toString())
  }else{
    this.number2.push(num.toString())
  }
}

 /*-----------  Check how long the number is and if it exeeds 11, it will convert to standard form  ----------*/
function checkLength(ans, num){
  let exp
  if(num !== NaN && num !== undefined){
    ans += num
  }
  if(!operatorUsed){
    exp = number.length
    if(decimal){ //if a decimal then exp is -2 to account for the "0."
      exp -=2
      alreadyExp = true
    }
  }else{
    exp = number2.length
    if(decimal){
      exp -=2
      alreadyExp = true
    }
  }
  if(exp == 11 && !alreadyExp && !ansGiven){
    if(operatorUsed){ //removes operator from start of ans
      ansArr = ans.split("")
      ansArr.shift()
      ans = ansArr.join("").toString()
      ansArr = ans.split("", 5)
    }else{
      ansArr = ans.split("", 5)
    }
    if(ansArr[1] == "."){
      decimal = true
      exp -= 2
      ansArr.push("E-", exp.toString())
    }else{
      ansArr.push("E", exp.toString())
      ansArr.splice(1,0,".")
    }
    exponent = true
  }
  if((ansGiven && ans.length > 11) || (ansGiven && ans >= 1e+21 || (ansGiven && ans <= 1e-20))){ //if ansGiven have to find where to cut string
    if(ans >= 1e+20 || ans <= 1e-20){
      return ans
    }
    exp = ans.length
    ansArr = ans.split("", 5)
    if(ansArr[1] == "."){
      decimal = true
      exp -= 2
      ansArr.push("E-", exp.toString())
    }else{
      ansArr.push("E", exp.toString())
      ansArr.splice(1,0,".")
    }
    exponent = true
  }
  if(exponent){
    if(exp >= 100){
      ansArr.splice(ansArr.length - 2, 2, exp) //remove numbers after E and add new exp
    }else if(exp >= 10){
      ansArr.splice(-1,1)
      ansArr.push(exp)
    }
    ans = ansArr.join("")
  }
  return ans
}
