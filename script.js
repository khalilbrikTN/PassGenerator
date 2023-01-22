const btn = document.querySelector('.btn');
const textOut = document.querySelector('#text');
let lenValue =6;

const para1 = document.getElementById('para1');
const para2 = document.getElementById('para2');
const para3 = document.getElementById('para3');
const para4 = document.getElementById('para4');
let len = document.querySelector('#size');

let domain = {
    lower: [],
    upper: [],
    special: [],
    digit: [],
}

for(let i = 65; i<90+1; i++){
    domain.upper.push(i);
}
for(let i = 97; i<122+1; i++){
    domain.lower.push(i);
}
for(let i = 33; i<47+1; i++){
    domain.special.push(i);
}
for(let i = 58; i<64+1; i++){
    domain.special.push(i);
}
for(let i = 48; i<57+1; i++){
    domain.digit.push(i);
}
let sample = Array();


btn.addEventListener('click', function(){

    if(para1.checked){
        for(let i = 0; i<domain.lower.length; i++){
            sample.push(domain.lower[i]);
        }
    }

    if(para2.checked){
        for(let i = 0; i<domain.upper.length; i++){
            sample.push(domain.upper[i]);
        }    
    }

    if(para3.checked){
        for(let i = 0; i<domain.special.length; i++){
            sample.push(domain.special[i]);
        }
    }

    if(para4.checked){
        for(let i = 0; i<domain.digit.length; i++){
            sample.push(domain.digit[i]);
        }
    }

    if(!(para1.checked||para2.checked||para3.checked||para4.checked)){
        for(let i = 0; i<domain.lower.length; i++){
            sample.push(domain.lower[i]);
        }

        for(let i = 0; i<domain.upper.length; i++){
            sample.push(domain.upper[i]);
        }    
        for(let i = 0; i<domain.special.length; i++){
            sample.push(domain.special[i]);
        }

        for(let i = 0; i<domain.digit.length; i++){
            sample.push(domain.digit[i]);
        }
    }

    let pass = '';
    if(Number(len.value)>=3){
        lenValue = Number(len.value);
    }
    
    for(let i =0; i<lenValue; i++){
        pass+=String.fromCharCode(sample[randomGenerator(0,sample.length-1)]);
    }

    textOut.textContent = pass;

    sample = Array();


})

function randomGenerator(min, max){
    let number = Math.floor(Math.random() * (max-min+1))+min;
    return number;
}

