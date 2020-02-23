import * as cors from "cors";


import Server from './server/server';
import routerInformacion from './controller/routerInformacion';
import bodyParser from 'body-parser';
import * as fileUpload from "express-fileupload";
import routerCuentas from './controller/routerCuentas';
import routerImagenes from './controller/routerImagenes';


const server = Server.instance;
// Obrener atributos del body
server.app.use(cors.default());
server.app.use(bodyParser.urlencoded({ extended: false }));
server.app.use(bodyParser.json());
server.app.use(fileUpload.default());


server.app.use(routerInformacion);
server.app.use(routerCuentas);
server.app.use(routerImagenes);

server.start(() => {
    console.log(`Server running on port ${server.port}`);
});