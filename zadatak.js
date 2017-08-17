// 1)

var prviBroj = parseInt(prompt('Unesite prvi broj'));
var drugiBroj = parseInt(prompt('Unesite drugi broj'));

if(prviBroj > drugiBroj) {
    console.log('prvi broj je veci od drugog');
} else if (prviBroj < drugiBroj) {
    console.log('drugi broj je veci od prvog');
} else {
    console.log('brojevi su jednaki');
}

// ________________________________________________________________________
// 2)

var prviBroj = parseInt(prompt('Unesite prvi broj'));
var drugiBroj = parseInt(prompt('Unesite drugi broj'));

var zbir = prviBroj + drugiBroj;
var razlika = prviBroj - drugiBroj;
var proizvod = prviBroj * drugiBroj;
var kolicnik = prviBroj / drugiBroj;


if((zbir > 99)&&(zbir < 1000)) {
    console.log('zbir je: ' +zbir);
}
if((razlika > 99)&&(razlika < 1000)) {
    console.log('razlika je: ' +razlika);
}
if((proizvod > 99)&&(proizvod < 1000)) {
    console.log('proizvod je: ' +proizvod);
}
if((kolicnik > 99)&&(kolicnik < 1000)) {
    console.log('kolicnik je: ' +kolicnik);
}

// ________________________________________________________________________
// 3)

var prviBroj = (parseInt(Math.random() * 100));
var drugiBroj = (parseInt(Math.random() * 100));

var zbir = parseInt(prompt('Koliko iznosi: ' + prviBroj + "+" + drugiBroj));

if(prviBroj + drugiBroj == zbir) {
    console.log('tacan odgovor');
} else {
    console.log(prviBroj + drugiBroj);
}

// ________________________________________________________________________
// 4)

var sat = prompt("Unesite vrijednost sati")

if((sat < 9)&&(sat >=0)) {
    console.log('Dobro jutro');
}
if((sat > 8)&&(sat < 19)) {
    console.log('Dobar dan');
}
if((sat > 18)&&(sat < 24)) {
    console.log('Dobro vece');
}

// ________________________________________________________________________
// 5)

var a = parseInt(prompt('Unesite prvi broj'));
var b = parseInt(prompt('Unesite drugi broj'));
var c = parseInt(prompt('Unesite treci broj'));

if(a>b && a>c) {
    if(b>c) {
        console.log(c + ' ' + b + ' ' + a);
    } else {
        console.log(b + ' ' + c + ' ' + a);
    }

}

if(b>a && b>c) {
    if(a>c) {
        console.log(c + ' ' + a + ' ' + b);
    } else {
        console.log(a + ' ' + c + ' ' + b);
    }
}

if(c>a && c>b) {
    if(a>b) {
        console.log(b + ' ' + a + ' ' + c);
    } else {
        console.log(a + ' ' + b + ' ' + c);
    }
}