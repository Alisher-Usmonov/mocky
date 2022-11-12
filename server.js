const jsonServer = require("json-server");
const apiAdd = require("./src/modules/apiAdd");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

apiAdd("routes");

server.use(middlewares);
server.use(router);

server.listen(port);