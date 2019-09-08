exports.index = function index(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write("<h1>Index</h1>");
    res.write(`
    <ul>
        <li><a href='sobre.html'>Sobre</a></li>
        <li><a href='aleatorio.html'>Aleatório</a></li>
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
    res.end();
}