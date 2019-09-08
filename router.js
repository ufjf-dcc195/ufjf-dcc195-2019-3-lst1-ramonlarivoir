exports.route = function route(path, controllers, req, res) {
    controllers[path](req, res);
}