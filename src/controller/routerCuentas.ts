import { Router, Request, Response } from 'express';

import GestorCuentas from '../model/GestorCuentas/GestorCuentas';
import Usuario from '../model/GestorCuentas/Usuario';
import { verificaAdminRole, verificaToken } from '../middlewares/autenticacion';
import { SEED } from '../config/config';


const routerCuentas = Router();

// ==========================================
//  Renueva Token
// ==========================================
routerCuentas.get('/renuevatoken', verificaToken, (req: any, res: Response) => {
    GestorCuentas.renuevaToken(req.usuario, (err: any, message: string, token: any) => {
        if (err) {
            res.status(500).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            token
        })
    });
});

//  ===========================
//  Registro Usuario
// ============================

routerCuentas.post('/registro', (req: Request, res: Response) => {
    // Recuperando informacion usuario
    const body = req.body;

    // Revisando que la información se envie de manera correcta
    // Por el usuario de la api
    if (!(body.email && body.password && body.confirmPassword && body.nombre && body.apellidoM && body.apellidoP)) {
        return res.status(401).json({
            ok: false,
            message: 'Error, falta informacion del usuario'
        });
    }

    if (body.password != body.confirmPassword) {
        return res.status(400).json({
            ok: false,
            message: 'Las contraseñas no coinciden'
        });
    }

    GestorCuentas.agregarUsuario(new Usuario(body.nombre, body.apellidoP, body.apellidoM, body.email, body.password), (err: any, message: string, results: Object[]) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error, es posible que el email ya exista',
                err
            });
        }
        res.status(201).json({
            ok: true,
            message
        });
    });
});

//  ===========================
//  Registro Administrador
// ============================

routerCuentas.post('/registro/admin', [verificaToken, verificaAdminRole], (req: Request, res: Response) => {
    // Recuperando informacion usuario
    const body = req.body;

    // Revisando que la información se envie de manera correcta
    // Por el usuario de la api
    if (!(body.email && body.password && body.confirmPassword && body.nombre && body.apellidoM && body.apellidoP)) {
        return res.status(401).json({
            ok: false,
            message: 'Error, falta informacion del usuario'
        });
    }

    if (body.password != body.confirmPassword) {
        return res.status(400).json({
            ok: false,
            message: 'Las contraseñas no coinciden'
        });
    }

    GestorCuentas.agregarUsuario(new Usuario(body.nombre, body.apellidoP, body.apellidoM, body.email, body.password, 'ADMIN_ROLE'), (err: any, message: string, results: Object[]) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error, es posible que el email ya exista',
                err
            });
        }
        res.status(201).json({
            ok: true,
            message
        });
    });
});

//  ===========================
//  Registro Veterinario
// ============================

routerCuentas.post('/registro/veterinario', [verificaToken, verificaAdminRole], (req: Request, res: Response) => {
    // Recuperando informacion usuario
    const body = req.body;

    // Revisando que la información se envie de manera correcta
    // Por el usuario de la api
    if (!(body.email && body.password && body.confirmPassword && body.nombre && body.apellidoM && body.apellidoP)) {
        return res.status(401).json({
            ok: false,
            message: 'Error, falta informacion del usuario'
        });
    }

    if (body.password != body.confirmPassword) {
        return res.status(400).json({
            ok: false,
            message: 'Las contraseñas no coinciden'
        });
    }

    GestorCuentas.agregarUsuario(new Usuario(body.nombre, body.apellidoP, body.apellidoM, body.email, body.password, 'VET_ROLE'), (err: any, message: string, results: Object[]) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error, es posible que el email ya exista',
                err
            });
        }
        res.status(201).json({
            ok: true,
            message
        });
    });
});

//  ===========================
//  Login
// ============================


routerCuentas.post('/login', (req: Request, res: Response) => {
    // Recuperando informacion usuario
    const body = req.body;

    if (!(body.email && body.password)) {
        return res.status(401).json({
            ok: false,
            message: 'Error, falta informacion del usuario'
        });
    }

    GestorCuentas.loginUsuario(body.email, body.password, (err: any, message: string, usuario: any, token: any, menu: any) => {
        if (err) {
            return res.status(403).json({
                ok: false,
                message,
                err
            });
        }
        res.status(200).json({
            ok: true,
            usuario,
            token,
            menu
        });
    });
});

//  ===========================
//  Obtener Veterinarios
// ============================

routerCuentas.get('/veterinarios', [verificaToken, verificaAdminRole], (req: Request, res: Response) => {
    GestorCuentas.obtenerVeterinarios((err: any, message: string, results: Object[]) => {
        if (err) {
            return res.status(403).json({
                ok: false,
                message,
                err
            });
        }
        res.status(200).json({
            ok: true,
            results
        });
    });
});







export default routerCuentas;