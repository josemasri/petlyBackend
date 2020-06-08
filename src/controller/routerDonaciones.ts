/** routerDonaciones.ts
 * Este archivo sirve para recibir las peticiones HTTP
 * correspondientes a las funcionalidades del gestor de 
 * donaciones y delegar las peticiones al gestor 
 * correspondiente para regresar una respuesta al cliente
 */

import { Router, Request, Response } from 'express';
import Donacion from '../model/GestorDonaciones/Donacion';
import GestorDonaciones from '../model/GestorDonaciones/GestorDonaciones';
import { verificaToken, verificaAdminRole } from '../middlewares/autenticacion';


const routerDonaciones = Router();

// Registrar donacion
routerDonaciones.post('', (req: Request, res: Response) => {
    const body = req.body;
    // Validando datos
    if (!(body.nombre && body.apellido && body.cantidad && body.email && body.periodo && body.direccion)) {
        return res.status(401).json({
            ok: false,
            message: 'Error, falta informacion del donador'
        });
    }
    const donacion = new Donacion(body.nombre, body.apellido, body.cantidad, body.email, body.periodo, body.direccion);
    GestorDonaciones.agregarDonacion(donacion, (err: any, message: any) => {
        if (err) {
            return res.status(500).json({
                ok: true,
                message: 'Error al registrar la donación'
            });
        }
        
        res.status(201).json({
            ok: true,
            message: 'Donación agregada con éxito'
        });
    });
});


// Obtener donaciones
routerDonaciones.get('', [verificaToken, verificaAdminRole], (req: Request, res: Response) => {
    GestorDonaciones.obtenerDonaciones((err: any, donaciones: any) => {
        if (err) {
            return res.status(500).json({
                ok: true,
                message: 'Error al registrar la donación'
            });
        }
        
        res.status(200).json({
            ok: true,
            donaciones
        });
    });
});

export default routerDonaciones;