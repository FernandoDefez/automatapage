window.addEventListener("scroll",  function () {
    const email = this.document.getElementById("email-form");
    const card = this.document.getElementById("card");
    if(this.scrollY<200 && this.scrollY<600 ){
        card.style.animation="rightAnimation 1s ease-in";
        card.style.opacity="1";
    }
    if(this.scrollY>540 && this.scrollY<1200 ){
        email.style.animation="leftAnimation 1s ease-in";
        email.style.opacity="1";
    }
});

function openCity(cityName){
    var i;
    var tab = document.getElementById("tab-buttons");
    var x = document.getElementsByClassName("works"); //Devuelve todos los elementos con la clase city en este caso son 3, los oculta todos
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block"; //Accedo al elemento con la id del nombre del parámetro para mostrarlo
    tab.style.borderBottom = "none";
}
