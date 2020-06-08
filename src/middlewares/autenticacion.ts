/** autenticacion.ts 
 * Este archivo contiene las funciones que se ejecutan
 * para verificar los roles de cada usuario con el token
 * de autenticación, estas se utilizan en los controladores
 * de rutas protegidas
 */

import { Response, Request, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { SEED } from '../config/config';

//  ===========================
//  Verificar Token
// ============================
export const verificaToken = (req: any, res: Response, next: NextFunction) => {
    const token = req.headers['x-token'];
    jwt.verify(token, SEED, (err: any, decoded: any) => {
        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: "Token no valido"
                }
            });
        }
        req.usuario = decoded.usuario;
        next();
    });
};


//  ===========================
//  Verificar Admin Role
// ============================
export const verificaAdminRole = (req: any, res: Response, next: NextFunction) => {
    let usuario = req.usuario;
    if (usuario.rol !== "ADMIN_ROLE") {
        return res.status(401).json({
            ok: false,
            err: {
                message: "Usuario no es administrador"
            }
        });
    }
    next();
};


//  ===========================
//  Verificar Veterinario Role
// ============================
export const verificaVetRole = (req: any, res: Response, next: NextFunction) => {
    let usuario = req.usuario;
    if (usuario.rol !== "VET_ROLE") {
        return res.status(401).json({
            ok: false,
            err: {
                message: "Usuario no es administrador"
            }
        });
    }
    next();
};


//  ===========================
//  Verificar Veterinario o Administrador
// ============================
export const verificaAdminOVetRole = (req: any, res: Response, next: NextFunction) => {
    let usuario = req.usuario;
    if (usuario.rol !==  "ADMIN_ROLE" || "VET_ROLE") {
        return res.status(401).json({
            ok: false,
            err: {
                message: "Usuario no es administrador"
            }
        });
    }
    next();
};