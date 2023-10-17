const liczba1 = document.querySelector('#A');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function () {
    let s = parseInt(liczba1.value);
    let m = Math.floor(s/60);
    s = s%60;
    let h = Math.floor(m/60);
    m = m%60;

    wynik.innerHTML = h+"g"+m+"m"+s+"s";

})