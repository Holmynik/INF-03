let i=0;
function Promocja(){

    let krotkie = document.getElementById("krotkie").checked;
    let srednie = document.getElementById("srednie").checked;
    let poldlugie = document.getElementById("poldlugie").checked;
    let dlugie = document.getElementById("dlugie").checked;
    let wynik = document.getElementById("second-left");
    let cena=0;
    if(i>0){
        wynik.removeChild(wynik.lastChild);
    }else{

    }
    if (krotkie) cena = 15;
    if (srednie) cena = 20;
    if (poldlugie) cena = 30;
    if (dlugie) cena = 40;
    let note = document.createTextNode("cena promocyjna: "+cena);
    wynik.appendChild(note)
    i++;
}