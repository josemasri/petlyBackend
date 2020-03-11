import { verificaToken } from './../middlewares/autenticacion';
import { Router, Request, Response } from 'express';
import Noticia from '../model/GestorInformacion/Noticia';
import GestorInformacion from '../model/GestorInformacion/GestorInformacion';
import { verificaAdminRole } from '../middlewares/autenticacion';
import Albergue from '../model/GestorInformacion/Albergue';
import * as fileUpload from 'express-fileupload';


const routerInformacion = Router();


// Obtener todas las noticias
routerInformacion.get('/noticias', (req: Request, res: Response) => {
    const page = Number(req.params.page) || 0;
    GestorInformacion.obtenerNoticias(page, (err: any, message: string, results: Object[]) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error al consultar noticias',
                err
            });
        }
        res.status(200).json({
            ok: true,
            noticias: results
        });
    });
});

// ==================
// Agregar noticia
// ==================
routerInformacion.post('/noticias', [verificaToken, verificaAdminRole], (req: any, res: Response) => {
    // Recuperando informacion noticia
    const body = req.body;
    const idAutor = req.usuario.id;
    // Revisando que la información se envie de manera correcta
    // Por el usuario de la api
    if (!(body.titulo && body.contenido)) {
        return res.status(401).json({
            ok: false,
            message: 'Error, No agregaste la noticia'
        });
    }
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({
            ok: false,
            message: `Error, no se envió el archivo`
        });
    }
    const imagen = req.files.img;
    if (!imagen) {
        res.status(400).json({
            ok: false,
            message: `Error, no se envió el archivo`
        });
    }

    const noticia = new Noticia(body.titulo, idAutor, body.contenido);
    GestorInformacion.agregarNoticia(noticia, imagen, (err: any, message: string, results: Object[]) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error al agregar noticia',
                err
            });
        }
        res.status(201).json({
            ok: true,
            message
        });
    });
});


// =================
// Obtener Albergues
// =================

routerInformacion.get('/albergues', (req: Request, res: Response) => {
    const page = Number(req.params.page) || 0;

    GestorInformacion.obtenerAlbergues((err: any, message: string, results: Object[]) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error al consultar albergues',
                err
            });
        }
        res.status(201).json({
            ok: true,
            results
        });
    });
});

// =================
// Agregar Albergue
// =================

routerInformacion.post('/albergues', [verificaToken, verificaAdminRole], (req: any, res: Response) => {
    // Recuperando informacion noticia
    const body = req.body;
    // Revisando que la información se envie de manera correcta
    // Por el usuario de la api
    if (!(body.nombre && body.direccion && body.telefono)) {
        return res.status(401).json({
            ok: false,
            message: 'Error, No agregaste la informacón completa'
        });
    }

    if (!req.files.img) {
        res.status(400).json({
            ok: false,
            message: `Error, no se envió el archivo`
        });
    }

    const imagen = req.files.img;


    const albergue = new Albergue(body.nombre, body.direccion, body.telefono);
    GestorInformacion.agregarAlbergue(albergue, imagen, (err: any, message: string, results: Object[]) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error al agregar albergue',
                err
            });
        }
        res.status(201).json({
            ok: true,
            message
        });
    });
});



// ========================
// Agregar Imagen Galería
// ========================

routerInformacion.post('/galeria', [verificaToken, verificaAdminRole], (req: any, res: Response) => {
    const imagen = req.files.img;
    const titulo = req.body.titulo;
    if (!(titulo)) {
        res.status(400).json({
            ok: false,
            message: `Error, no se envió el titulo`
        });
    }

    if (!imagen) {
        res.status(400).json({
            ok: false,
            message: `Error, no se envió el archivo`
        });
    }

    const idAuthor = req.usuario.id;

    GestorInformacion.agregarImagenGaleria(titulo, imagen, idAuthor, (err: any, message: string, results: Object[]) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error al agregar imagen',
                err
            });
        }
        res.status(201).json({
            ok: true,
            message
        });
    });
});

// =======================
// Obtener Galería
// =======================

routerInformacion.get('/galeria', (req: any, res: Response) => {
    const page = Number(req.params.page) || 0;
    const limit = Number(req.params.limit) || 6;

    GestorInformacion.obtenerGaleria(page, limit, (err: any, message: string, results: Object[]) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                message: 'Error al obtener galería',
                err
            });
        }
        res.status(201).json({
            ok: true,
            results
        });
    });
});



// ===============================
//  Respuestas del chat
// ===============================
routerInformacion.post('/chat', (req: Request, res: Response) => {
    const message = req.body.message;
    GestorInformacion.obtenerResMensaje(message, (err: any, resMessage: string) => {
        if(err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        res.status(200).json({
            ok: true,
            message: resMessage,
            date: new Date(),
            from: 'Petly'
        });
    });
});
export default routerInformacion;