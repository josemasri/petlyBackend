/** index.ts
 * Este es el archivo inicial de la aplicación
 * y sirve para configurar los controlladores así
 * como realizar configuraciones iniciales
 */

import cors from "cors";

import Server from "./server/server";
import routerInformacion from "./controller/routerInformacion";
import bodyParser from "body-parser";
import routerCuentas from "./controller/routerCuentas";
import routerDonaciones from "./controller/routerDonaciones";
import fileUpload from "express-fileupload";
import routerAnimales from "./controller/routerAnimales";

// Instanciando la clase Server
const server = Server.instance;
// Permitiendo a cualquier dominio hacer peticiones a este servidor
server.app.use(cors());
// Configuracion para subir archivos
server.app.use(fileUpload());
// Obrener atributos del body
server.app.use(bodyParser.urlencoded({ extended: false }));
server.app.use(bodyParser.json());

// Configuracion de controladores
server.app.use("/informacion", routerInformacion);
server.app.use("/cuentas", routerCuentas);
server.app.use("/donaciones", routerDonaciones);
server.app.use("/animales", routerAnimales);

// Inicio del servidor
server.start(() => {
  console.log(`Server running on port ${server.port}`);
});
