//Menu
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

//Busca
function filter() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    ul = document.getElementById("ul");
    li = ul.getElementsByTagName("li");


    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (!input.value) {
            li[i].style.display = "none";
        } else if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "block";
        } else {
            li[i].style.display = "none";
        }

    }
}

//Calendario
 //Janeiro
  function mostrar1(){
      document.getElementById('janeiro').style.display = 'block';
  }
  function ocultar1(){
      document.getElementById('janeiro').style.display = 'none';
  }
  
  //Fevereiro
  function mostrar2(){
      document.getElementById('fevereiro').style.display = 'block';
  }
  function ocultar2(){
      document.getElementById('fevereiro').style.display = 'none';
  }
  
  //Março
  function mostrar3(){
      document.getElementById('marco').style.display = 'block';
  }
  function ocultar3(){
      document.getElementById('marco').style.display = 'none';
  }
  
  //Abril
  function mostrar4(){
      document.getElementById('abril').style.display = 'block';
  }
  function ocultar4(){
      document.getElementById('abril').style.display = 'none';
  }
  
  //Maio
  function mostrar5(){
      document.getElementById('maio').style.display = 'block';
  }
  function ocultar5(){
      document.getElementById('maio').style.display = 'none';
  }
  
  //Junho
  function mostrar6(){
      document.getElementById('junho').style.display = 'block';
  }
  function ocultar6(){
      document.getElementById('junho').style.display = 'none';
  }
  
  //Julho
  function mostrar7(){
      document.getElementById('julho').style.display = 'block';
  }
  function ocultar7(){
      document.getElementById('julho').style.display = 'none';
  }
  
  //Agosto
  function mostrar8(){
      document.getElementById('agosto').style.display = 'block';
  }
  function ocultar8(){
      document.getElementById('agosto').style.display = 'none';
  }
  //Setembro
  function mostrar9(){
      document.getElementById('setembro').style.display = 'block';
  }
  function ocultar9(){
      document.getElementById('setembro').style.display = 'none';
  }
  
  //Outubro
  function mostrar10(){
      document.getElementById('outubro').style.display = 'block';
  }
  function ocultar10(){
      document.getElementById('outubro').style.display = 'none';
  }
  
  //Novembro
  function mostrar11(){
      document.getElementById('novembro').style.display = 'block';
  }
  function ocultar11(){
      document.getElementById('novembro').style.display = 'none';
  }
  
  //Dezembro
  function mostrar12(){
      document.getElementById('dezembro').style.display = 'block';
  }
  function ocultar12(){
      document.getElementById('dezembro').style.display = 'none';
  }