import { verificaToken } from './../middlewares/autenticacion';
import { Router, Request, Response } from 'express';
import Noticia from '../model/GestorInformacion/Noticia';
import GestorInformacion from '../model/GestorInformacion/GestorInformacion';
import { verificaAdminRole } from '../middlewares/autenticacion';
import Albergue from '../model/GestorInformacion/Albergue';


const routerInformacion = Router();


// Obtener todas las noticias
routerInformacion.get('/noticias', (req: Request, res: Response) => {
    GestorInformacion.obtenerNoticias((err: any, message: string, results: Object[]) => {
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


// Obtener noticia por su ID
routerInformacion.get('/noticia/:id', (req: Request, res: Response) => {
    const id = Number(req.params.id);
    GestorInformacion.obtenerNoticia(id, (err: any, message: string, results: Object[]) => {
        if (err) {
            return res.status(404).json({
                ok: false,
                message: 'Error al consultar noticia',
                err
            });
        }
        res.status(200).json({
            ok: true,
            noticia: results[0]
        });
    });

});


// Agregar noticia
routerInformacion.post('/noticia', [verificaToken, verificaAdminRole], (req: Request, res: Response) => {
    // Recuperando informacion noticia
    const body = req.body;
    // Revisando que la información se envie de manera correcta
    // Por el usuario de la api
    if (!(body.titulo && body.autor && body.fecha && body.contenido)) {
        return res.status(401).json({
            ok: false,
            message: 'Error, No agregaste la noticia'
        });
    }

    const noticia = new Noticia(body.titulo, body.autor, body.fecha, body.contenido);
    GestorInformacion.agregarNoticia(noticia, (err: any, message: string, results: Object[]) => {
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

routerInformacion.get('/albergue', (req: Request, res: Response) => {

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

routerInformacion.post('/albergue', [verificaToken, verificaAdminRole], (req: Request, res: Response) => {
    // Recuperando informacion noticia
    const body = req.body;
    // Revisando que la información se envie de manera correcta
    // Por el usuario de la api
    if (!(body.nombre && body.direccion && body.telefono )) {
        return res.status(401).json({
            ok: false,
            message: 'Error, No agregaste la informacón completa'
        });
    }

    const albergue = new Albergue(body.nombre, body.direccion, body.telefono);
    GestorInformacion.agregarAlbergue(albergue, (err: any, message: string, results: Object[]) => {
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

export default routerInformacion;