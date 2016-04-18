/**
 * Created by WalidT on 18/04/2016.
 */

function addition(n1, n2) {
    var ent1 = parseInt(n1);
    var ent2 = parseInt(n2);
    alert(ent1 + ent2);
}

function soustraction(n1, n2) {
    var ent1 = parseInt(n1);
    var ent2 = parseInt(n2);
    alert(ent1 - ent2);
}

function multiplication(n1, n2) {
    var ent1 = parseInt(n1);
    var ent2 = parseInt(n2);
    alert(ent1 * ent2);
}

function saisirEntiers() {
    var entier1 = prompt("Saisissez le premier entier :", "0");
    var entier2 = prompt("Saisissez le deuxième entier :", "0");
    var operator = prompt("Saisissez l'opérateur :", "+");

    if(operator == "+")
        addition(entier1, entier2);
    else if(operator == "-" )
        soustraction(entier1, entier2);
    else
        multiplication(entier1, entier2);

}