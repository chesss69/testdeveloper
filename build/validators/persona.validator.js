"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePersona = void 0;
const express_validator_1 = require("express-validator");
exports.validatePersona = [
    (0, express_validator_1.check)('nombrecompleto').exists().notEmpty().isString().isLength({ min: 3, max: 50 }),
    (0, express_validator_1.check)('email').exists().notEmpty().isEmail().isLength({ max: 100 }),
    (0, express_validator_1.check)('fechanacimiento').exists().notEmpty().isDate(),
    (0, express_validator_1.check)('direccion').exists().notEmpty().isString().isLength({ min: 3, max: 200 }),
    (0, express_validator_1.check)('ci').exists().notEmpty().isInt({ min: 0 }),
    (req, res, next) => {
        try {
            (0, express_validator_1.validationResult)(req).throw();
            return next();
        }
        catch (err) {
            return res.status(422).json({ message: err.array() });
        }
    }
];
