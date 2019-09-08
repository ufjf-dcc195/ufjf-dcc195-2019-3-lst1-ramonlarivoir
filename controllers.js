exports.index = function index(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Index</h1>");
    res.write("<a href='sobre.html'>Sobre</a>");
    res.end();
}

exports.sobre = function sobre(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`
    <p>Ramon Vaz de Mello Larivoir</p>
    <p>201776018</p>
    <p>rlarivoir@gmail.com</p>
    <p>Sistemas de Informacao</p>
    `);
    res.end();
}