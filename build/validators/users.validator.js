"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUser = void 0;
const express_validator_1 = require("express-validator");
exports.validateUser = [
    (0, express_validator_1.check)('name').exists().notEmpty().isString().isLength({ min: 3, max: 50 }),
    (0, express_validator_1.check)('password').exists().notEmpty().isLength({ max: 100 }),
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
