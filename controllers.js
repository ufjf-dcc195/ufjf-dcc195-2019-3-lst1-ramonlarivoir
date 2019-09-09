const url = require('url');
var qs = require('querystring');

exports.index = function index(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write("<h1>Index</h1>");
    res.write(`
    <ul>
        <li><a href='sobre.html'>Sobre</a></li>
        <li><a href='aleatorio.html'>Aleatório</a></li>
        <li><a href='primos.html?n1=&n2='>Primos</a></li>
    </ul>
    `);
    res.end();
}

exports.sobre = function sobre(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(`
    <p>Ramon Vaz de Mello Larivoir</p>
    <p>201776018</p>
    <p>rlarivoir@gmail.com</p>
    <p>Sistemas de Informação</p>
    <br/><a href='index.html'>Voltar</a>
    `);
    res.end();
}

exports.aleatorio = function aleatorio(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    let par = [];
    let impar = [];
    for(let i = 0; i < 100; i++) {
        let n = Math.floor(Math.random()*100);
        if(n % 2 == 0)
            par.push(n);
        else
            impar.push(n);
    }
    res.write("<p>Pares:</p>");
    res.write(`<p>${par}</p>`);
    res.write("<p>Ímpares:</p>");
    res.write(`<p>${impar}</p>`);
    res.write("<br/><a href='index.html'>Voltar</a>");
    res.end();
}

function ehPrimo(numero) {
    if (numero != 1) {
        for (let i = 2; i < numero; i++) {
            if (numero % i == 0) {
                return false
            }
        }
        return true
    }
    return false
}

function calculaPrimo(res, n1, n2) {
    if (n1 < n2 && n2 < 100) {
        res.write(`<p>Números primos do intervalo entre ${n1} e ${n2}</p>`);
        res.write("<p>");
        while (n1 <= n2) {
            if (ehPrimo(n1)) {
                res.write(`${n1} `);
            }
            n1++;
        }
        res.write("</p>");
    } else {
        res.write(`<p>Os números devem seguir o padrão N1 < N2 < 100</p>`);
    }
}

exports.primos = function primos(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write("<p>Digite os números de n1 e n2 por paramêtro pela URL ?n1=&n2=</p>");
    let query = url.parse(req.url, true).query;
    let n1 = query.n1;
    let n2 = query.n2;
    calculaPrimo(res, n1, n2);
    res.write("<br/><a href='index.html'>Voltar</a>");
    res.end();
}