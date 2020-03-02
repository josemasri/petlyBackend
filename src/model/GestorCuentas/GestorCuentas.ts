import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';


import Usuario from './Usuario';
import ProxyCuentas from '../../communications/GestorCuentas/ProxyCuentas';
import { SEED } from '../../config/config';

export default class GestorCuentas {
    private static encriptarPassword(password: string): string {
        return bcrypt.hashSync(password, 10);
    }
    public static agregarUsuario(usuario: Usuario, callback: Function) {
        // Encriptando contraseña
        usuario.setPassword(this.encriptarPassword(usuario.getPassword()));
        ProxyCuentas.agregarUsuarioBD(usuario, (err: any, results: Object[]) => {
            if (err) {
                return callback(err);
            }
            return callback(null, 'Usuario agregado correctamente', results);
        });
    }

    private static generaToken(usuario: Usuario) {
        return jwt.sign({ usuario }, SEED, { expiresIn: process.env.CADUCIDAD_TOKEN });
    }

    public static renuevaToken(usuario: Usuario, callback: Function) {
        const token = this.generaToken(usuario);
        callback(null, 'Token renovado correctamente', token);
    }

    public static loginUsuario(email: string, password: string, callback: Function) {
        ProxyCuentas.obtenerUsuarioBD(email, (err: any, results: any[]) => {
            if (err) {
                return callback(err, 'El usuario y/o contraseña es incorrecto/a');
            }
            const passwordEncriptada = results[0].password;
            // Verificar contraseña
            if(!bcrypt.compareSync(password, passwordEncriptada)) {
                return callback('El usuario y/o contraseña es incorrecto/a', 'El usuario y/o contraseña es incorrecto/a');
            }
            results[0].password = null;
            // Genrar token de usuario
            const token = this.generaToken(results[0]);
            return callback(null, 'El usuario existe', results[0], token, this.obtenerMenu(results[0].rol));
        });
    }

    // ===================================
    // Obtener Menu de navegacion panel
    // ===================================
    private static obtenerMenu(rol: string) {

        var menu = [{
                titulo: 'Principal',
                icono: 'mdi mdi-gauge',
                submenu: [
                    { titulo: 'Dashboard', url: '/dashboard' },
                    { titulo: 'ProgressBar', url: '/progress' },
                    { titulo: 'Gráficas', url: '/graficas1' },
                    { titulo: 'Promesas', url: '/promesas' },
                    { titulo: 'RxJs', url: '/rxjs' }
                ]
            },
            {
                titulo: 'Mantenimientos',
                icono: 'mdi mdi-folder-lock-open',
                submenu: [
                    { titulo: 'Hospitales', url: '/hospitales' },
                    { titulo: 'Médicos', url: '/medicos' }
                ]
            }
        ];
    
        if (rol === 'ADMIN_ROLE') {
            menu[1].submenu.unshift({ titulo: 'Usuarios', url: '/usuarios' });
        }
    
    
        return menu;
    
    }


    public static obtenerVeterinarios(callback: Function) {
        ProxyCuentas.obtenerVeterinariosBD((err: any, results: any[]) => {
            if (err) {
                return callback(err, 'No hay veterinarios registrados');
            }
            results.forEach(veterinario => {
                veterinario.password = null;
            });
            console.log(results);
            return callback(null, 'El usuario existe', results);
        });
    }
}
