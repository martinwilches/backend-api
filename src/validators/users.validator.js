import { body } from 'express-validator'

/***********************************************************
 * Validación y sanitización de campos con express-validator
 *
 * Validación
 * - isEmail() - Validar que el campo sea de tipo email
 *
 * Sanitización
 * - trim() - Remover espacios adicionales al inicio y al final de la cadena
 * - normalizeEmail() - Convertir caracteres a minúscula
*/

export const createUser = [
    body('email')
        .trim()
        .isEmail()
        .normalizeEmail()
        .withMessage('Email invalido'),
]