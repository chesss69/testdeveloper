"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const persona_controller_1 = require("../controllers/persona.controller");
const persona_validator_1 = require("./../validators/persona.validator");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
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
 *          required:
 *              - ci
 *              - nombrecompleto
 *              - email
 *              - direccion
 *          example:
 *              ci: 12345678
 *              nombrecompleto: Juan Perez
 *              email: juanperez@gmail.component
 *              direccion: Av. Principal 123
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
router.get('/', auth_1.checkAuth, persona_controller_1.index);
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
router.get('/:id', auth_1.checkAuth, persona_controller_1.show);
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
router.post('/', auth_1.checkAuth, persona_validator_1.validatePersona, persona_controller_1.store);
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
router.put('/:id', auth_1.checkAuth, persona_validator_1.validatePersona, persona_controller_1.update);
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
router.delete('/:id', auth_1.checkAuth, persona_controller_1.destroy);
exports.default = router;
