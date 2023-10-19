"use strict";

// input
const form = document.querySelector('.form');
const nameInput = document.querySelector('.hName');
const numInput = document.querySelector('.hNum');
const mm = document.querySelector('.mm');
const yy = document.querySelector('.yy');
const cvvInput = document.querySelector('.cvv');

const cardNum = document.querySelector('.card-num');
const cardName = document.querySelector('.card-name');
const cardMm = document.querySelector('.card-mm');
const cardYy = document.querySelector('.card-yy');
const cardCvv = document.querySelector('.cardCvv');

let submitBtn =document.querySelector('.s-btn');
const subStatus = document.querySelector('.s-status')
const inputs =[nameInput, numInput, mm, yy,cvvInput];
const errorLabel = document.querySelectorAll('small');

const errLabelArr = Array.from(errorLabel)

nameInput.addEventListener('input', (e)=>{
    if(e.target.value.length <= 16){    
        cardName.textContent = e.target.value;
};
e.target.value.length > 16 ? e.target.style.borderColor ='red':e.target.style.borderColor ='';


})
numInput.addEventListener('input', (e)=>{

    const input = e.target.value.replace('/\s/g', '')
    const numPattern = input.replace(/(\d{4})/g, '$1 ').trim()
     e.value = numPattern
    cardNum.textContent = e.value;

    e.target.value.length < 16 ? e.target.style.borderColor ='red':e.target.style.borderColor ='';

})
mm.addEventListener('input', (e)=>{
    if(e.target.value.length <= 2){  
        cardMm.textContent = Number(e.target.value);      
} ;
e.target.value.length > 2 ? e.target.style.borderColor ='red':e.target.style.borderColor ='';

})
yy.addEventListener('input', (e)=>{
    if(e.target.value.length <= 2){    
        cardYy.textContent = Number(e.target.value);
};
e.target.value.length > 2 ? e.target.style.borderColor ='red':e.target.style.borderColor ='';
})
cvvInput.addEventListener('input', (e)=>{
    if(e.target.value.length <= 3){    
        cardCvv.textContent = Number(e.target.value);
};
e.target.value.length > 3? e.target.style.borderColor ='red':e.target.style.borderColor ='';
})


// submit btn
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    const isValid = (inputs[0].value.length >=4 || inputs[0].value.length === 16) && inputs[1].value.length === 16 && inputs[2].value.length === 2 && inputs[3].value.length === 2 && inputs[4].value.length === 3 ? 'true': 'false';

    if(isValid === 'true'){
       form.classList.toggle('opacity-0')
    subStatus.classList.toggle('scale-0')
        return;
    };

    if(isValid === 'false'){
        inputs.forEach((e,i) =>{
            if(e.value === ''){
                e.style.color = 'hsl(0, 100%, 66%)';
            e.style.borderColor='hsl(0, 100%, 66%)';
           errLabelArr[i].textContent = 'this field is required';
            }
            else{
                e.style.color = '';  
                e.style.borderColor='';
                errLabelArr[i].textContent = '';
                
            }
       return;     
    }) 

    };

    inputs[0].value.length > 16? errLabelArr[0].textContent ='Name too long':null;
    inputs[1].value.length > 0 && inputs[1].value.length < 16? errLabelArr[1].textContent ='enter correct number':null;
    inputs[2].value.length > 2 || inputs[4].value.length < 2 ? errLabelArr[2].textContent = 'incorrect month':null;
    inputs[3].value.length > 2 || inputs[4].value.length < 2 ? errLabelArr[3].textContent = 'incorrect year':null;
    inputs[4].value.length > 3 ||inputs[4].value.length < 3 ? errLabelArr[4].textContent ='incorrect':null;
    console.log(isValid);

})
 
         

// continue btn
const continueBtn = document.querySelector('.status-btn')
continueBtn.addEventListener('click', e=>{
    form.classList.toggle('opacity-0')
    subStatus.classList.toggle('scale-0')
    form.reset()
    location.reload()

})