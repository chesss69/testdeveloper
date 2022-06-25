"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jwt_helper_1 = require("../helpers/jwt.helper");
const checkAuth = (req, res, next) => {
    var _a;
    const token = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (token) {
        const user = (0, jwt_helper_1.verifyToken)(token);
        if (user) {
            return next();
        }
    }
    return res.status(401).json({ message: 'Unauthorized' });
};
exports.checkAuth = checkAuth;
