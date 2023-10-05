const liczba1 = document.querySelector('#A');
const liczba2 = document.querySelector('#B');
const liczba3 = document.querySelector('#C')
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let a = parseInt(liczba1.value);
    let b = parseInt(liczba2.value);
    let c = parseInt(liczba3.value);
    let pole = 0.5*(a+b+c);
    let s = Math.sqrt(pole*(pole-a)*(pole-b)*(pole-c));

    wynik.innerHTML = "Pole trojkata o bokach :"+"<br> a = "+a+"<br>b = "+b+"<br>c = "+c+"<br>Wynosi = "+s+"cm2";
})