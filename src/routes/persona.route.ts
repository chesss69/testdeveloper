import express from 'express';
import { store, update, show, destroy, index} from '../controllers/persona.controller';
import { validatePersona } from './../validators/persona.validator';
import { checkAuth } from '../middlewares/auth';

const router = express.Router();
/**
 * @swagger
 * components:
 *  schemas:
 *      Persona:
 *          type: object
 *          properties:
 *              id:
 *                  type: number
 *                  description: id de la persona es autogenerado
 *              ci:
 *                 type: number,
 *                 description: ci de la persona, es unico
 *              nombrecompleto:
 *                  type: string
 *                  description: nombre y apellido completo de la persona
 *              email: 
 *                  type: string
 *                  description: email de la persona es un campo unico
 *              direccion:
 *                  type: string
 *                  description: direccion de la persona
 *              fechanacimiento:
 *                  type: string
 *                  description: fecha de nacimiento de la persona
 *          required:
 *              - ci
 *              - nombrecompleto
 *              - email
 *              - direccion
 *              - fechanacimiento
 *          example:
 *              ci: 12345678
 *              nombrecompleto: Juan Perez
 *              email: juanperez@gmail.component
 *              direccion: Av. Principal 123
 *              fechanacimiento: 1997-01-01
 *  securitySchemes:
 *      bearerAuth:            
 *          type: http
 *          description: Bearer token authentication
 *          scheme: bearer
 *          bearerFormat: JWT
 *  parameters:
 *      personaId:
 *          in: path
 *          name: id
 *          required: true
 *          schema:
 *              type: number
 *          description: id de la persona que se quiere obtener
 * 
 */
/**
 * @swagger
 * tags:
 *  name: Persona
 *  description: Persona Endpoint
 */

/**    
 * @swagger
 *  /api/persona:
 *      get:
 *          tags: [Persona]
 *          security:
 *              - bearerAuth: []
 *          sumary: Use para obtener todas las personas
 *          responses: 
 *              200:
 *                  description: lista de personas
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items: 
 *                                  $ref: '#/components/schemas/Persona'
 *              401:
 *                  description: No autorizado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *              500:
 *                  description: Error interno
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 */
router.get('/',checkAuth,index);
/**    
 * @swagger
 *  /api/persona/{id}:
 *      get:
 *          tags: [Persona]
 *          security:
 *              - bearerAuth: []
 *          sumary: Use para buscar una persona por id
 *          parameters:
 *             - $ref: '#/components/parameters/personaId'
 *          responses: 
 *              200:
 *                  description: Persona Encontrada
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Persona'
 * 
 *                              
 *              401:
 *                  description: No autorizado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *              404:
 *                  description: Persona no encontrada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *              500:
 *                  description: Error interno
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                      
 */

router.get('/:id', checkAuth,show);

/**
 * @swagger
 * /api/persona:
 *      post:
 *          tags: [Persona]
 *          security:
 *              - bearerAuth: []
 *          sumary: Use para crear una persona
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Persona'
 *          responses:
 *              201:
 *                  description: Persona creada
 *                  content:
 *                      application/json:
 *                         schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *              422:
 *                  description: Error de validacion
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
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
 *              500:
 *                 description: Error interno
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 * 
 */

router.post('/',checkAuth,validatePersona,store);

/**    
 * @swagger
 *  /api/persona/{id}:
 *      put:
 *          tags: [Persona]
 *          security:
 *              - bearerAuth: []
 *          sumary: Use para actualizar una persona
 *          parameters:
 *              - $ref: '#/components/parameters/personaId'
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/Persona'
 *          responses: 
 *              204:
 *                  description: Persona Encontrada
 *                  
 *              422:
 *                  description: Error de validacion
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
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
 *              500:
 *                 description: Error interno
 *                 content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                      
 */

router.put('/:id', checkAuth, validatePersona,update);

/**    
 * @swagger
 *  /api/persona/{id}:
 *      delete:
 *          tags: [Persona]
 *          security:
 *              - bearerAuth: []
 *          sumary: Use para eliminar una persona por su id
 *          parameters:
 *             - $ref: '#/components/parameters/personaId'
 *          responses: 
 *              204:
 *                  description: Persona Eliminada correctamente
 *                  
 *              401:
 *                  description: No autorizado
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *              404:
 *                  description: Persona no encontrada
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *              500:
 *                  description: Error interno
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  message:
 *                                      type: string
 *                      
 */

router.delete('/:id', checkAuth,destroy);

export default router;