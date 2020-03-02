// ================================
// Puerto
//=================================

import { Secret } from "jsonwebtoken";

process.env.PORT = process.env.PORT || '3000';

// ================================
// Entrorno
//=================================

process.env.NODE_ENV = process.env.NODE_ENV || "dev";

// ================================
// Vencimiento del token
//=================================
// 60 segundos
// 60 minutos
// 24 horas
// 30 dias

process.env.CADUCIDAD_TOKEN = '48h';

// ================================
// Seed
//=================================

export const SEED: Secret = process.env.SEED || 'este-es-el-seed-de-desarrollo';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_NAME = process.env.DB_NAME || 'petly';
export const DB_USERNAME = process.env.DB_USERNAME || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';


// Back url donación
export const BACK_URL = process.env.BACK_URL || 'http://localhost:4200';
export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
