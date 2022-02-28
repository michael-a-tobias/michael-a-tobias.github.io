alert ("JavaScript enabled")
// //const emojiChanger = (id) => {
// if(id === '0') {
//   return document.getElementByID().innerHTML = '🧱'
// }

const random8 = (num) => {


  var randomFood = Math.floor(Math.random() * 8)
  var randomBomb = Math.floor(Math.random() * 8)
if (num === randomFood){
  alert ('YES')
 return document.getElementById(num).innerHTML= '🥫'
 }
else if (num === randomBomb){
  return document.getElementById(num).innerHTML= '💣'
} else {
  return document.getElementById(num).innerHTML= '🧱'
}

  }
