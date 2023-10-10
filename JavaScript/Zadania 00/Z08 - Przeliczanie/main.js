const liczba1 = document.querySelector('#A');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let s = parseInt(liczba1.value);
    let h = (s/3600).toFixed(0);
    s = s - (h*3600);

    wynik.innerHTML = h+"  "+s;

})