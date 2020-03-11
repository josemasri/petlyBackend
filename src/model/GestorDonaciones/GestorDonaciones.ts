import { BASE_URL } from './../../config/config';
import Donacion from './Donacion';
import { BACK_URL } from '../../config/config';
export default class GestorDonaciones {
    public static agregarDonacion(donacion: Donacion, id: number, callback: Function) {
        // Creando preferencia de MercadoPago
        const preference = {
            "items": [
                {
                    "id": "item-ID-1",
                    "title": "Donacion Petly",
                    "currency_id": "MXN",
                    "picture_url": "https://www.mercadopago.com/org-img/MP3/home/logomp3.gif",
                    "description": "Donacion Voluntaria al albergue petly",
                    "category_id": "donacion",
                    "quantity": 1,
                    "unit_price": donacion.getCantidad()
                }
            ],
            "payer": {
                "name": donacion.getNombre(),
                "surname": donacion.getApellidoPaterno(),
                "email": donacion.getEmail()
            },
            "back_urls": {
                "success": BACK_URL + '/?donation=success',
                "failure": BACK_URL + '/?donation=failure',
                "pending": BACK_URL + '/?donation=pending'
            },
            "auto_return": "approved",
            "notification_url": `${BASE_URL}/ipn`,
            "external_reference": `${id}`
        }
    }
}
