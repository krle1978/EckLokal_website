
function HomeOnClick(){
  document.getElementById("starter-div").style.display="none";
    document.getElementById("maincourse-div").style.display="none";
    document.getElementById("openTime-div").style.display = "none";
    document.getElementById("contact").style.display="none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("aboutUs-div").style.display = "none";

    document.getElementById("logo-div").style.display = "block";
    Menu();
   
}

function OnMouseOver(id){
  if(id =='aboutUs-btn'){
    var btn =  document.getElementById(id);
    btn.innerText = 'Über uns';
  }else if(id == 'menu-btn'){
    document.getElementById(id).innerText = 'Menü';
  }
  else if(id =='starter-btn'){
    var btn =  document.getElementById(id);
    btn.innerText = 'A la Card';
  }
  else if(id =='OppenTime-btn'){
    var btn =  document.getElementById(id);
    btn.innerText = 'Öffnungs zeit';
  }
  else if(id =='home-btn'){
    var btn =  document.getElementById(id);
    var titleText = document.getElementById('title-navi');
   // var title = new String("Home");
   // btn.innerText = title;
   // titleText.innerText = "Home";
    btn.style.backgroundColor = '#000000';
    btn.style.fontFamily = 'Courier New';
  }
  else if(id =='Contact-btn'){
    var btn =  document.getElementById(id);
    btn.innerText = 'Öffnungs zeit';
  }
  else if('Picture-btn'){
    var btn = document.getElementById('Picture-btn');
    btn.innerText = 'Bilder'
  }
}

function OnMouseOut(id){
  if(id =='aboutUs-btn'){
    var btn = document.getElementById(id);
    btn.innerText = '';

  }else if(id == 'menu-btn'){
    var btn = document.getElementById(id);
    btn.innerText = '';
  }
  else if(id =='starter-btn'){
    var btn = document.getElementById(id);
    btn.innerText = '';
  }
  else if(id =='OppenTime-btn'){
    var btn = document.getElementById(id);
    btn.innerText = '';
  }
  else if(id =='home-btn'){
    var btn = document.getElementById(id);
    //var titleText = document.getElementById('title-navi');
    //titleText.style.display = 'none';
    btn.innerText = '';
  }
  else if(id =='Contact-btn'){
    var btn =  document.getElementById(id);
    btn.innerText = '';
  }
  else if(id == 'Picture-btn'){
    var btn =  document.getElementById(id);
    btn.innerText = '';
  }
}

function HomeOnHover(){
  var homebutton = document.getElementById('home-btn');
  homebutton.innerText = 'Home';
  homebutton.style.backgroundColor = "00000050";
}

function HomeOnHoverOut(){
  document.getElementById('home-btn').innerText = '';
}
function OnClickBtn(id){
  if(id =='home-btn'){
    //Menu();
    HomeOnClick();
  }else if(id=='aboutUs-btn'){
    aboutUsTitleSubmitById()
  }
  else if(id =='menu-btn'){
    Menu();
    document.getElementById("logo-div").style.display = "none";
  }else if(id =='starter-btn'){
    Card();
  }else if(id =='OppenTime-btn'){
    OppenTime();
  }else if(id =='Contact-btn'){
    Contact();
  }else if(id == 'Picture-btn'){
    Pictures()
  }
}
function aboutUsTitleSubmitById(){
    document.getElementById("aboutUs-div").style.display = "block";
    
    document.getElementById("starter-div").style.display="none";
    document.getElementById("maincourse-div").style.display="none";
    document.getElementById("wellcome").style.display="none";
    document.getElementById("openTime-div").style.display = "none";
    document.getElementById("contact").style.display="none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("card").style.display = "none";
    document.getElementById("picture-div").style.display = "none";
}
function Card(){
  document.getElementById("card").style.display="block";
  
  /*document.getElementById("right-side").style.backgroundImage="url('../pics/bg-reservations-big.jpg')";*/

  document.getElementById("wellcome").style.display="none";
  document.getElementById("contact").style.display="none";
  document.getElementById("aboutUs-div").style.display = "none";
  document.getElementById("openTime-div").style.display = "none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("picture-div").style.display = "none";
}

function Menu(){
  document.getElementById("menu").style.display = "block";
  document.getElementById("logo-div").style.display = "block";

  document.getElementById("aboutUs-div").style.display = "none";
  document.getElementById("google-maps").style.display="none";
  document.getElementById("card").style.display="none";
  document.getElementById("openTime-div").style.display = "none";
  document.getElementById("contact").style.display="none";
  document.getElementById("wellcome").style.display="none";
  document.getElementById("picture-div").style.display = "none";
  
}

function OppenTime(){
    document.getElementById("openTime-div").style.display = "block";
    
    document.getElementById("aboutUs-div").style.display = "none";
    document.getElementById("google-maps").style.display="none";
    document.getElementById("card").style.display="none";
    document.getElementById("logo-div").style.display = "none";
    document.getElementById("contact").style.display="none";
    document.getElementById("wellcome").style.display="none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("picture-div").style.display = "none";
}

function Pictures(){
  document.getElementById("picture-div").style.display = "flex";

  document.getElementById("openTime-div").style.display = "none";
  document.getElementById("aboutUs-div").style.display = "none";
  document.getElementById("google-maps").style.display="none";
  document.getElementById("card").style.display="none";
  document.getElementById("logo-div").style.display = "none";
  document.getElementById("contact").style.display="none";
  document.getElementById("wellcome").style.display="none";
  document.getElementById("menu").style.display = "none";
}
 
function Contact(){
  document.getElementById("aboutUs-div").style.display = "none";
  document.getElementById("card").style.display="none";
  document.getElementById("openTime-div").style.display="none";
  document.getElementById("wellcome").style.display="none";
  document.getElementById("wellcome").style.display="none";
  document.getElementById("menu").style.display = "none";
  document.getElementById("picture-div").style.display = "none";

  document.getElementById("contact").style.display="block";
  document.getElementById("logo-div").style.display = "block";
    
 }
  function Address(){
   document.getElementById("google-maps").style.display="flex";
   document.getElementById('address-div').src="https://goo.gl/maps/FA9pNirYTZJXDhGC8";

   document.getElementById("aboutUs-div").style.display = "none";
    document.getElementById("card").style.display="none";
    document.getElementById("openTime-div").style.display="none";
    document.getElementById("wellcome").style.display="none";
    document.getElementById("wellcome").style.display="none";
    document.getElementById("menu").style.display = "none";
    document.getElementById("picture-div").style.display = "none";
  }
 
 