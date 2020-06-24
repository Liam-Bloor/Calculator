
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
var num1 = ""
var num2 = ""
var operatorUsed = false
var i
var exponent = false
var j = 12

seven.addEventListener("click", () => {
  if(ans === "ans"){
    ans = ""
  }
  if(!operatorUsed){
    num1 += "7"
    ans = checkLength(ans)
    output.innerHTML = ans
  }
})

})

function checkLength(ans){
  let regex = /[E]/g
  if(ans.length === 11){
    i = 13
  }
  if(this.exponent){
    i += 1
    console.log(i)
    var ansArr = ans.split("")
    console.log(ansArr)
    if(i >= 100){
      ansArr.splice(ansArr.length - 3, 3, i)
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
  if(ans.length > 11){
    var ansArr = ans.split("", ans.length-6)
    ansArr.push("E", i.toString())
    ansArr.splice(1,0,".")
    ans = ansArr.join("")
    exponent = true
    return ans
  }else{
    ans += "7"
    return ans
  }
}
