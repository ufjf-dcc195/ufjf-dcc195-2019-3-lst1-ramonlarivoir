const server = require("./server");
const router = require("./router");
const controllers = require("./controllers");

const rotas = {};
rotas["/"] = controllers.index;
rotas["/index.html"] = controllers.index;
rotas["/sobre.html"] = controllers.sobre;

server.start(router.route, rotas);