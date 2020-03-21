window.addEventListener("scroll",  function () {
    const email = this.document.getElementById("email-form");
    const card = this.document.getElementById("card");
    if(this.scrollY<250){
        card.style.animation="rightAnimation 1s ease-in";
        card.style.opacity="1";
    }
});


var _1st = $('#1stMonthBtn');   var _1stDisplay = $('#1stMonth');
var _2nd = $('#2ndMonthBtn');   var _2ndDisplay = $('#2ndMonth');
var _3rd = $('#3rdMonthBtn');   var _3rdDisplay = $('#3rdMonth');


$(_1st).click(function(){ 
    _1stDisplay.toggle();
    _2ndDisplay.hide();
    _3rdDisplay.hide();
});

$(_2nd).click(function(){
    _1stDisplay.hide();
    _2ndDisplay.toggle();
    _3rdDisplay.hide(); 
});

$(_3rd).click(function(){ 
    _1stDisplay.hide();
    _3rdDisplay.toggle();
    _2ndDisplay.hide();
});