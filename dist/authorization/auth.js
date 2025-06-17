"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminMiddleware = exports.PASSWORD = exports.USERNAME = void 0;
exports.USERNAME = 'admin';
exports.PASSWORD = 'qwerty';
const adminMiddleware = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        res.status(401).send('Not authorized');
        return;
    }
    const [authType, authToken] = auth.split(' ');
    if (authType !== 'Basic') {
        res.status(401).send('Not authorized');
    }
    const credentials = Buffer.from(authToken, 'base64').toString('utf-8');
    const [username, password] = credentials.split(':');
    if (username !== exports.USERNAME || password !== exports.PASSWORD) {
        res.status(401).send('Not authorized');
        return;
    }
    next();
};
exports.adminMiddleware = adminMiddleware;
