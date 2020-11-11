const button = document.getElementById('button');
button.addEventListener('click',quoteGenerate);
function quoteGenerate(){
    const randomQuote = Number.parseInt(Math.random()*quoteArray.length+1);
    document.getElementById("authorName").textContent = `\"Author: ${quoteArray[randomQuote].author}\"`;
    document.getElementById("quoteDisplay").textContent = `\"${quoteArray[randomQuote].quote}\"`;
}