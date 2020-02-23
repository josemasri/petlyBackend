import { Router, Request, Response } from 'express';
import GestorInformacion from '../model/GestorInformacion/GestorInformacion';


const routerImagenes = Router();

routerImagenes.post('/img/noticia/:id', (req: any, res: Response) => {
    const id = req.params.id;
    const file = req.files.img;
    console.log(file);
    res.status(201).json({
        ok: true,
        message: 'La imagen se subio correctamente'
    });
});

export default routerImagenes;