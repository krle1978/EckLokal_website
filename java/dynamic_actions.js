window.onload = function(){
    const btns = document.querySelectorAll('.button_navbar');
    const menu_show = document.getElementsByClassName('menu-show');
        
    console.log(`btns count: ${btns.length}`);
    console.log('menu is long: '+ menu_show.length);
    btns.forEach((btn) => {
      btn.addEventListener('click',()=>{OnClickBtn(btn.name, menu_show)});
      btn.addEventListener('mouseover',()=>{OnMouseOver(btn)});
      btn.addEventListener('mouseout',()=>{OnMouseOut(btn)});
    });

    const boxesOuter = document.querySelectorAll('.box');
    const boxesInner = document.querySelectorAll('.innerBox');
    const imgs = document.querySelectorAll('img');
    const btnSend = document.querySelector('#btnSent');
    boxesInner.forEach(box =>{
        box.addEventListener('click',()=>{toggleColor(box,'green')});
        box.addEventListener('click',()=>{toggleSubmeni(box)})
    });
    boxesOuter.forEach(box =>{
        box.addEventListener('mouseover',()=>{colorChange(box,'green')});
    });
    boxesOuter.forEach(box =>{
        box.addEventListener('mouseout',()=>{colorChange(box,'transparent')});
    });
    imgs.forEach(imig =>{
        imig.addEventListener('click',()=>{elementGenerator(imig)});
    });

    btnSend.addEventListener('click', sendMessage);
}
function OnClickBtn(id, menu_show){
    console.log('menu is long: '+ menu_show.length);
    console.log('ID is: '+ id);
    for (let index = 0; index < menu_show.length; index++) {
      const element = menu_show[index];
      console.log('element ID is:' + element.id);
      console.log('ID is: ' + id);
      if(element.id == id){
        console.log(element.id);
        element.style.display = 'block';
      }
      else{
        element.style.display = 'none';
      }
  };
}
function OnMouseOver(element){
  if(element.name == 'home-div'){
      element.innerText = 'home';
  }
  else if (element.name == 'aboutUs-div') {
      element.innerText = 'About Us';
  }
  else if (element.name == 'menu-div') {
      element.innerText = 'Menu';
  }
  else if (element.name == 'card-div') {
      element.innerText = 'Card';
  }
  else if (element.name == 'openTime-div') {
      element.innerText = 'Opening Time';
  }
  else if (element.name == 'picture-div') {
      element.innerText = 'Pictures';
  }
  else if (element.name == 'contact-div') {
      element.innerText = 'Contact Us';
  }
}
function OnMouseOut(element){
    if(element.name == 'home-div'){
        element.innerText = '';
    }
    else if (element.name == 'aboutUs-div') {
        element.innerText = '';
    }
    else if (element.name == 'menu-div') {
        element.innerText = '';
    }
    else if (element.name == 'card-div') {
        element.innerText = '';
    }
    else if (element.name == 'openTime-div') {
        element.innerText = '';
    }
    else if (element.name == 'picture-div') {
        element.innerText = '';
    }
    else if (element.name == 'contact-div') {
        element.innerText = '';
    }
}

function colorChange(el,color){
    //console.log(el);
    el.style.backgroundColor = color;
}
function toggleColor(el,color){
    if(color == 'red'){
        el.classList.toggle('colorRed');
    }
    else if(color == 'green'){
        el.classList.toggle('colorGreen');
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
function elementGenerator(el){
    const element = `<p class="explanation" data-name="${el.name}-text">${el.name}</p>`;
    document.querySelector('.output').innerHTML = element;
}
function sendMessage(){
    let p = event.target.parentElement;
    const userData = `name:${p.firstname.value} ${p.lastname.value},email:${p.email.value}`
    const link = document.createElement('a');
    const usertext = document.querySelector('textarea');
    const content = userData + ',' + usertext.value;
    const fileBlob = new Blob([content],{type:'text/plan'});
    //const saveFile = FileWriter.FileSaver;
    //saveFile.saveAs(fileBlob,'myFile.txt');
    link.href = URL.createObjectURL(fileBlob);
    link.innerHTML = content;
    console.log(link);
    
    link.download = "sample.txt";
    link.click();
    let mainElement = document.querySelector('#bx-mail');
    mainElement.appendChild(link);
}