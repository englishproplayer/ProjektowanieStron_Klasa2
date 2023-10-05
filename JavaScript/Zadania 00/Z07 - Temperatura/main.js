const liczba1 = document.querySelector('#A');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba1.value);
    let f = a*1.8+32;
    let k = parseFloat(a+273,15);


    wynik.innerHTML = "Stopnie w skali Celsjusza : "+a+"<br>Stopnie w skali Fahrenheita : "+f+"<br>Stopnie w skali Kelwina : "+k;
})