function enter(){

    let splitTxt = document.getElementById("input").value;

    let col = document.getElementById("col");

    col.innerHTML = "<table class='table table-sm table-bordered table-dark'>" +
                        "<tbody id='vertical'>" +
                        "<tr id='horizontal'>" +
                            "<td>" +    
                            "</td>" +
                        "</tr>" +
                      "</tbody>" +
                    "</table>";


    let horizontal = document.getElementById("horizontal");
    let vertical = document.getElementById("vertical");

    for (let index = 0; index < splitTxt.length; index++) {
        horizontal.innerHTML += "<td>"+ splitTxt.charAt(index) +"</td>";
    }
    
    for (let index = 0; index < splitTxt.length; index++) {
        vertical.innerHTML += "<tr> <td>"+ splitTxt.charAt(index) +"</td> </tr>";
    }


    let col2 = document.getElementById("col2");

    var array = [];

    col2.innerHTML = 
    "<table class='table table-sm table-bordered table-dark'>" +
        "<tbody>" +
            "<tr id='col2-hor'>" +
            "</tr>" +
            "<tr id='col2-hor2'>" +
            "</tr>" +
        "</tbody>" +
    "</table>";

    let hor = document.getElementById("col2-hor");
    let hor2 = document.getElementById("col2-hor2");

    for (let index = 0; index < splitTxt.length; index++){
        array[index] = Math.floor(Math.random()*(2-0));
        hor.innerHTML += "<td>" + splitTxt.charAt(index) + "</td>";
        hor2.innerHTML += "<td>" + array[index] + "</td>";
    }
}