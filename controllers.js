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
        <li><a href='equacao.html'>Equação</a></li>
    </ul>
    `);
    res.end();
}

exports.notfound = function (req, res) {
    res.writeHead(404, {"Content-Type": "text/html"});
    res.write(`<h1>Página não encontrada: ${req.url}</h1>`);
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

exports.equacao = function equacao(req, res) {
    if(req.method == 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(`
        <form method='post'>
            <p>Digite os números de acordo com a expressão AX²+BX+C</p>
            <label>Digite o valor de A:</label>
            <input type='number' placehold='senha' name='a'>
            <label>Digite o valor de B:</label>
            <input type='number' placehold='senha' name='b'>
            <label>Digite o valor de C:</label>
            <input type='number' placehold='senha' name='c'>
            <button type='submit'>Enviar</button>
        </form>
        `);
        res.end();
    }
    else if(req.method == 'POST') {
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        let body = '';
        req.on('data', (data) => {
            body += data;
        });
        req.on('end', () => {
            let query = qs.parse(body);
            let a = query.a;
            let b = query.b;
            let c = query.c;
            
            if(!(a && b && c )){
                res.write("<p>Insira os 3 valores!</p>");
                res.write("<br/><a href='equacao.html'>Voltar</a>");
                res.end();
            }else {
                let x1 = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
                let x2 = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
                
                if(isNaN(x1) || isNaN(x2)){
                    res.write("<p>Não foi possível encontrar as raízes para estes valores.");
                    res.write("<br/><a href='equacao.html'>Voltar</a>");
                    res.end();
                } else {
                    res.write("<p>" + x1 + "</p>");  
                    res.write("<p>" + x2 + "</p>");  
                    res.end();
                }   
            }                       
        });
    }
}