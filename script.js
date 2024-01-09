const btnEl=document.getElementById("calculate");
const billInput=document.getElementById("bill");
const tipInput=document.getElementById("tip");
const totalSpan=document.getElementById("total");

function calculateTotal(){
    const billvalue=billInput.value;
    const tipvalue=tipInput.value;
    const totalvalue=billvalue*(1+tipvalue/100);
    totalSpan.innerHTML=totalvalue.toFixed(0);
}


btnEl.addEventListener("click",calculateTotal);