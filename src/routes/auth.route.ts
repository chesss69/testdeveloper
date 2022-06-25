import express from 'express';
import {login, register} from '../controllers/auth.controller';
import { validateUser } from './../validators/users.validator';

const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              name:
 *                 type: string
 *                 description: nombre del usuario
 *              password:
 *                  type: string
 *                  description: contraseña del usuario
 *          required:
 *              - name
 *              - password
 *          example:
 *              name: Jorgito
 *              password: adminadmin
 */
/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth Endpoint
 */

/**    
 * @swagger
 *  /api/auth/register:
 *      post:
 *          tags: [Auth]
 *          security: []
 *          sumary: Use para registrarse
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses: 
 *              201:
 *                  description: Confirmacion de registro
 *                  content: 
 *                      plain/text:
 *                          schema:
 *                              type: string
 *              500:
 *                  description: Error interno
 *                  content:
*                       application/json:
*                           schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 * 
 */
router.post('/register', validateUser,register);

/**    
 * @swagger
 *  /api/auth/login:
 *      post:
 *          tags: [Auth]
 *          security: []
 *          sumary: Use para logearse
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/User'
 *          responses: 
 *              200:
 *                  description: token de autenticacion
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  token:
 *                                      type: string
 *              401:
 *                  description: No autorizado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 */
router.post('/login', validateUser,login);

export default router;