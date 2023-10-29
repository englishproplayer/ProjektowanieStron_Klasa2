const liczba1 = document.querySelector('#A');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let l = parseInt(liczba1.value);
    let k = Math.pow(l,2);
    let s = Math.pow(l,3);


    wynik.innerHTML = l+"<sup>2</sup> = "+k+"<br>"+l+"<sup>3</sup> = "+s;

})