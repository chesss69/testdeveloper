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
exports.show = exports.destroy = exports.update = exports.index = exports.store = void 0;
const persona_entity_1 = require("../entities/persona.entity");
const store = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ci, nombrecompleto, email, fechanacimiento, direccion } = req.body;
        const persona = new persona_entity_1.Persona();
        persona.ci = ci;
        persona.nombrecompleto = nombrecompleto;
        persona.email = email;
        persona.fechanacimiento = fechanacimiento;
        persona.direccion = direccion;
        yield persona.save();
        return res.sendStatus(201);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.store = store;
const index = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const personas = yield persona_entity_1.Persona.find();
        return res.json(personas);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.index = index;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const persona = yield persona_entity_1.Persona.findOneBy({ id: parseInt(id) });
        if (!persona)
            return res.status(404).json({ message: "Persona no encontrada" });
        yield persona_entity_1.Persona.update({ id: parseInt(id) }, req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.update = update;
const destroy = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const persona = yield persona_entity_1.Persona.findOneBy({ id: parseInt(id) });
        if (!persona)
            return res.status(404).json({ message: "Persona no encontrada" });
        yield persona_entity_1.Persona.delete({ id: parseInt(id) });
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.destroy = destroy;
const show = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const persona = yield persona_entity_1.Persona.findOneBy({ id: parseInt(id) });
        if (!persona)
            return res.status(404).json({ message: "Persona no encontrada" });
        res.json(persona);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.show = show;
