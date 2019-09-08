exports.index = function index(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("<h1>Index</h1>");
    res.end
}