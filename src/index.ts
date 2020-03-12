import cors from "cors";


import Server from './server/server';
import routerInformacion from './controller/routerInformacion';
import bodyParser from 'body-parser';
import routerCuentas from './controller/routerCuentas';
import routerDonaciones from './controller/routerDonaciones';
import fileUpload from 'express-fileupload';
import routerAnimales from './controller/routerAnimales';

const server = Server.instance;
// Obrener atributos del body
server.app.use(cors());
server.app.use(fileUpload());
server.app.use(bodyParser.urlencoded({ extended: false }));
server.app.use(bodyParser.json());


server.app.use('/informacion', routerInformacion);
server.app.use('/cuentas', routerCuentas);
server.app.use('/donaciones', routerDonaciones);
server.app.use('/animales', routerAnimales);

server.start(() => {
    console.log(`Server running on port ${server.port}`);
});