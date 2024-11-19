function calcular() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c1 = parseFloat(document.getElementById('c1').value);
    let c2 = parseFloat(document.getElementById('c2').value);
    let c3 = parseFloat(document.getElementById('c3').value);
    let d1 = parseFloat(document.getElementById('d1').value);
    let d2 = parseFloat(document.getElementById('d2').value);
    let d3 = parseFloat(document.getElementById('d3').value);
    let d4 = parseFloat(document.getElementById('d4').value);
    let e = parseFloat(document.getElementById('e').value);
    let f1 = parseFloat(document.getElementById('f1').value);
    let f2 = parseFloat(document.getElementById('f2').value);

    a = a * 0.19362;
    b = b * 0.15 * 0.9;

    let c = (c1 * 2.31) + (c2 * 1.90) + (c3 * 2.68);

    let d = (d1 * 27) + (d2 * 8) + (d3 * 6.9) + (d4 * 0.5);

    e = e * 20;

    let f = (f1 * 1300 * 0.3) + (f2 * 17000 * 0.15);

    let resultadoFinal = (a * 12 + b * 365 + c * 52.14 + d * 52.14 + e * 12 + f) /1000;

    document.getElementById('resultado').textContent = resultadoFinal.toFixed(2);
}