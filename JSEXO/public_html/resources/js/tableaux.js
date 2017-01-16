var tab = [2, 4, 6];
var nombres = "";
var result = 0;
for (var i = 0; i < tab.length; i++) {
    if (!isNaN(tab[i])) {
        if (i === 0) {
            nombres = "&nbsp; &nbsp" + tab[i] + "<br/>";
        } else
        {
            nombres = nombres + "+ " + tab[i] + "<br/>";
        }
        result = result + tab[i];
    }
}
document.getElementById("nombres").innerHTML = nombres;
document.getElementById("result").innerHTML = result;


/*tab.forEach(function (element){
    debugger;
     alert(element);
     element=10;
     alert(element);
})*/