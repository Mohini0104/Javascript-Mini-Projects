
const button = document.getElementById('button');
const body = document.querySelector('body');
const hexColor =[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const hexValue = document.getElementById('hex-value')
button.addEventListener('click',changeHex)
function changeHex(){
  let hex ="#";
  for (let i=0;i<6;i++){
      const index =Math.floor(Math.random()*hexColor.length)
      hex+= hexColor[index];
  }
  hexValue.textContent = hex;
  body.style.backgroundColor = hex
}