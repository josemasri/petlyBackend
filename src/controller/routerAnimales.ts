import { Router, Request, Response } from 'express';
import FabricaPerros from '../services/FabricaAnimales/FabricaPerros';
import GestorAnimales from '../model/GestorAnimales/GestorAnimales';
import { verificaToken, verificaAdminRole } from '../middlewares/autenticacion';



const routerAnimales = Router();

// ==================
// Obtener Perros
// ==================
routerAnimales.get('/perro', [verificaToken], (req: Request, res: Response) => {
    GestorAnimales.obtenerPerros((err: any, perros: any) => {
        if(err) {
            res.status(500).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            perros
        });
    });
});



// ==================
// Obtener Perro por ID
// ==================
routerAnimales.get('/perro/:id', (req: Request, res: Response) => {
    const id = req.params.id;
    GestorAnimales.obtenerPerro(id, (err: any, perro: any) => {
        if(err) {
            res.status(500).json({
                ok: false,
                err
            });
        }
        res.json({
            ok: true,
            perro
        });
    });
});


// Agregar Perro
routerAnimales.post('/perro', [verificaToken, verificaAdminRole], (req: any, res: Response) => {
    const body = req.body;
    // Validando datos
    if (!(
        body.nombre &&
        body.estructuraVertebral &&
        body.tipoReproduccion &&
        body.medioDeVida &&
        body.habitosNaturales &&
        body.excresion &&
        body.sexo &&
        body.dieta &&
        body.edad &&
        body.raza &&
        body.tamano
    )) {
        return res.status(401).json({
            ok: false,
            message: 'Error, falta informacion del animal'
        });
    }
    if (!req.files) {
        return res.status(401).json({
            ok: false,
            message: 'Error, no se envio la imagen'
        });
    }

    if (!req.files.img) {
        return res.status(401).json({
            ok: false,
            message: 'Error, no se envio la imagen'
        });
    }
    const fabricaPerros = new FabricaPerros();
    const perro = fabricaPerros.crearAnimal(
        body.nombre,
        body.estructuraVertebral,
        body.tipoReproduccion,
        body.medioDeVida,
        body.habitosNaturales,
        body.excresion,
        body.sexo,
        body.dieta,
        body.edad,
        '', //imagen
        body.raza,
        body.tamano
    );
    GestorAnimales.agregarPerro(perro, req.files.img, (err: any, result: any) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err: {
                    err,
                    message: 'No se agrego el perro'
                }
            });
        }
        res.status(201).json({
            ok: true,
            message: 'Animal agregado con éxito'
        });
    });
});

export default routerAnimales;