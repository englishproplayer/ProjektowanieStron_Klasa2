let a = prompt("Podaj liczbę a: ", "0")
a = parseInt(a);
let b = prompt("Podaj liczbę b: ", "0")
b = parseInt(b)
let c = prompt("Podaj liczbę c: ", "0")
c = parseInt(c)
let d = prompt("Podaj liczbę d: ", "0")
d = parseInt(d)

let iloczyn = a*b*c*d;
let srednia = Math.pow(iloczyn, 0.25);
console.log(iloczyn);
document.write("a = "+a+"<br>");
document.write("a = "+b+"<br>");
document.write("a = "+c+"<br>");
document.write("a = "+d+"<br>");
document.write("<b>Srednia geometryczna podanych liczb wynosi : "+srednia+"</b><br>");
document.write("<b>Zaokraglona srednia geometryczna podanych liczb wynosi : "+srednia.toFixed(2)+"</b><br>");