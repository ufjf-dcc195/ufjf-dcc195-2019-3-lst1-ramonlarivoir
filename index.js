const server = require("./server");
const router = require("./router");
const controllers = require("./controllers");

const rotas = {};
rotas["/"] = controllers.index;
rotas["/index.html"] = controllers.index;
rotas["/sobre.html"] = controllers.sobre;
rotas["/aleatorio.html"] = controllers.aleatorio;

server.start(router.route, rotas);