import { Router, Request, Response } from 'express';
import Donacion from '../model/GestorDonaciones/Donacion';
const mercadopago = require('mercadopago');


const routerDonaciones = Router();

// Registrar donacion
routerDonaciones.post('/donaciones', (req: Request, res: Response) => {
    const body = req.body;
    // Validando datos
    if (!(body.nombre && body.apellidoPaterno && body.cantidad && body.email)) {
        return res.status(401).json({
            ok: false,
            message: 'Error, falta informacion del donador'
        });
    }
    const donacion = new Donacion(body.nombre, body.apellidoPaterno, body.apellidoMaterno || null, body.cantidad, body.email);
    


});

export default routerDonaciones;