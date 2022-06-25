"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.login = void 0;
const users_entity_1 = require("../entities/users.entity");
const jwt_helper_1 = require("../helpers/jwt.helper");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const credentials = req.body;
        const user = yield users_entity_1.Users.findOneBy({ name: credentials.name });
        if (user) {
            const isValid = yield user.comparePassword(credentials.password);
            if (isValid) {
                const token = (0, jwt_helper_1.signToken)(user.id, user.name);
                return res.json({ token });
            }
        }
        return res.status(401).json({ message: "Unhauthorized" });
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.login = login;
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new users_entity_1.Users();
        user.name = req.body.name;
        user.password = yield user.hashPassword(req.body.password);
        yield user.save();
        return res.sendStatus(201);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.register = register;
