const buttonadd = document.querySelector('.counterBtn_nextBtn');
const buttonminus = document.querySelector('.counterBtn_prevBtn');
const counter = document.getElementById('counter')
let count = 0;

buttonminus.addEventListener('click',minus);
function minus(){
  count-=1;
  counter.innerHTML = count;
}
buttonadd.addEventListener('click',add);
function add(){
   count+=1;
   counter.innerHTML = count;

}


  