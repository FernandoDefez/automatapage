//window.location.reload("load");
$(document).ready(function(){

var input = $("#input");
var button = document.getElementById("button");
var table = document.getElementById("table");

array = new Array(12);

array [0] = new Array(2);      
array [0][0] = "Hola";     
array [0][1] = "Qué tal";
array [0][2] = "Adiós";

array [1] = new Array(2);
array [1][0] = "Caminar";
array [1][1] = "Andar";
array [1][2] = "Parado";

array [2] = new Array(2);
array [2][0] = "barato";
array [2][1] = "económico";
array [2][2] = "caro";

array [3] = new Array(2);
array [3][0] = "Bonito";
array [3][1] = "hermoso";
array [3][2] = "feo";

array [4] = new Array(2);
array [4][0] = "cálido";
array [4][1] = "caliente";
array [4][2] = "frío";

array [5] = new Array(2);
array [5][0] = "iluminar";
array [5][1] = "alumbrar";
array [5][2] = "oscurecer";

array [6] = new Array(2);
array [6][0] = "SUMAR";
array [6][1] = "agregar";
array [6][2] = "restar";

array [7] = new Array(2);
array [7][0] = "Sanar";
array [7][1] = "curar";
array [7][2] = "enfermar";

array [8] = new Array(2);
array [8][0] = "veloz";
array [8][1] = "rápido";
array [8][2] = "lento";

array [9] = new Array(2);
array [9][0] = "fácil";
array [9][1] = "sencillo";
array [9][2] = "díficil";

array [10] = new Array(2);
array [10][0] = "grande";
array [10][1] = "enorme";
array [10][2] = "pequeño";

array [11] = new Array(2);
array [11][0] = "inteligencia";
array [11][1] = "sabiduria";
array [11][2] = "estupidez";

array [12] = new Array(2);
array [12][0] = "justicia";
array [12][1] = "equidad";
array [12][2] = "injusticia";



resetTable();

input.keyup(function(){

    let search = input.val(); 
    if(search==""){
        resetTable();
    }
    else{

        search = search.toUpperCase()
        searchText(search);
        button.addEventListener("click", function(){
            search = search.toUpperCase()
            searchText(search);    
        });
    }
});

function resetTable(){
    table.innerHTML = "";
    for (let i = 0; i < array.length ; i++){
        for (let j = 0; j < 1; j++){
            table.innerHTML += "<td>" + array[i][j].toUpperCase() + "</td>" + "<td>" + array[i][j+1].toUpperCase() + "</td>" + "<td>" + array[i][j+2].toUpperCase() + "</td>";
        }
    }
}

function searchText(string) {
    table.innerHTML = "";
    for (let i = 0; i < array.length ; i++){
        for (let j = 0; j < 1; j++){
        
            if( (string == array[i][j].toUpperCase()) || 
                (string == array[i][j+1].toUpperCase()) || 
                (string == array[i][j+2].toUpperCase()) )
            {
                table.innerHTML += "<td>" + array[i][j].toUpperCase() + "</td>" + "<td>" + array[i][j+1].toUpperCase() + "</td>" + "<td>" + array[i][j+2].toUpperCase() + "</td>";
            }
        }
    }
}

});