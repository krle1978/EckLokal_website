
window.onload = ()=>{
    const boxesOuter = document.querySelectorAll('.box');
    const boxesInner = document.querySelectorAll('.innerBox');
    const imgs = document.querySelectorAll('img');
    boxesInner.forEach(box =>{
        box.addEventListener('click',()=>{toggleColor(box,'red')});
        box.addEventListener('click',()=>{toggleSubmeni(box)})
    });
    boxesOuter.forEach(box =>{
        box.addEventListener('mouseover',()=>{colorChange(box,'yellow')});
    });
    boxesOuter.forEach(box =>{
        box.addEventListener('mouseout',()=>{colorChange(box,'white')});
    });
    imgs.forEach(imig =>{
        imig.addEventListener('click',()=>{elementGenerator(imig)});
    });
    function colorChange(el,color){
        //console.log(el);
        el.style.backgroundColor = color;
    }
}

function elementGenerator(el){
    const element = `<p class="explanation" data-name="${el.name}-text">${el.name}</p>`;
    document.querySelector('.output').innerHTML = element;
}
function toggleColor(el,color){
    if(color == 'red'){
        el.classList.toggle('colorRed');
    }
    else if(color == 'blue'){
        el.classList.toggle('colorBlue');
    }
    else if(color == 'white'){
        el.classList.toggle('colorWhite');
    }
}
function toggleSubmeni(el){
    const mail_el = document.getElementById('bx-mail');
    const tel_el = document.getElementById('bx-telephone');
    const gmp_el = document.getElementById('bx-googleMap');
    console.log(el.id);
    if(el.id=='bx11'){
        mail_el.classList.toggle('show');
        console.log(mail_el);
    }
    else if(el.id=='bx12'){
        tel_el.classList.toggle('show');
        console.log(tel_el);
    }
    else if(el.id=='bx13'){
        gmp_el.classList.toggle('show');
        console.log(gmp_el);
    }
}