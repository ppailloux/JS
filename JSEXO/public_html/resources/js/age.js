"use strict";
//METTEZ TOUT LE JS DANS UN AUTRE FICHIER AFIN DE NE PAS MELANGER L'HTML ET LE JS
//INSPIREZ-VOUS DU FICHIER ../js/regions.js

var genre = null;
function giveFeature(age) {
    /* Indiquez par le biais d'alert ou d'un champ HTML la description qui correspond à l'âge saisi
     * 0 à 1 compris : Vous êtes un bébé.
     * 1 à 6 ans compris : Vous êtes un jeune enfant.
     * 7 à 11 ans compris : Vous êtes un enfant qui a atteint l'âge de raison.
     * 12 à 17 ans compris : Vous êtes un adolescent.
     * 17 à ???: Vous êtes un jeune adulte.
     * Supérieur à ??? : Vous êtes un sénior.
     */

    debugger;
    var determinant = "un";
    var ado = "adolescent";
    if(genre === "F"){
        determinant = "une";
        ado = "adolescente";
    }
    if (age < 2) {
        document.getElementById("resultat").innerHTML = 'Vous êtes ' + determinant + ' bébé.';
    } else if (age < 7) {
        document.getElementById("resultat").innerHTML = 'Vous êtes ' + determinant + ' jeune enfant.';
    } else if (age < 12) {
        document.getElementById("resultat").innerHTML = 'Vous êtes ' + determinant + ' enfant qui a atteint l\'âge de raison.';
    } else if (age < 18) {
        document.getElementById("resultat").innerHTML = 'Vous êtes ' + determinant + ' ' + ado + '.';
    } else if (age < 31) {
        document.getElementById("resultat").innerHTML = 'Vous êtes ' + determinant + ' jeune adulte.';
    } else if (age > 30) {
        document.getElementById("resultat").innerHTML = 'Vous êtes ' + determinant + ' sénior.';
    } else
    {
        document.getElementById("resultat").innerHTML = 'Je ne sais pas qui vous êtes.';
    }
}
   /* if (age > 0 && age < 2) {
        document.getElementById("resultat").innerHTML = 'Vous êtes un bébé.';
    } else if (age > 1 && age < 7) {
        document.getElementById("resultat").innerHTML = 'Vous êtes un jeune enfant.';
    } else if (age > 6 && age < 12) {
        document.getElementById("resultat").innerHTML = 'Vous êtes un enfant qui a atteint l\'âge de raison.';
    } else if (age > 11 && age < 18) {
        document.getElementById("resultat").innerHTML = 'Vous êtes un adolescent.';
    } else if (age > 17 && age < 31) {
        document.getElementById("resultat").innerHTML = 'Vous êtes un jeune adulte.';
    } else if (age > 30) {
        document.getElementById("resultat").innerHTML = 'Vous êtes un sénior.';
    } else
    {
        document.getElementById("resultat").innerHTML = 'Je ne sais pas qui vous êtes.';
    }*/

function changeGenre() {
    debugger;
    var radiobuttons = 
            document.getElementsByName("genre");
    for (var i = 0; i < radiobuttons.length; i++) {
        if (radiobuttons[i].checked) {
            genre = radiobuttons[i].value;
            break;
        }
    }
}

/* SUITE DE L'EXERCICE :
 * Vous pouvez aussi ajouter un radio button grâce auquel vous déterminerez le sexe de l’utilisateur. 
 * A l’aide de ternaires, vous pourrez ainsi accorder les phrases en fonction de l’utilisateur.
 */