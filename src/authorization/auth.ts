import {Request, Response, NextFunction} from "express";


export const USERNAME = 'admin';
export const PASSWORD = 'qwerty';

export const adminMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers['authorization'] as string;
    if (!auth){
        res.status(401).send('Not authorized');
        return;
    }
    const [authType, authToken] = auth.split(' ');
    if (authType !== 'Basic') {
        res.status(401).send('Not authorized');
    }
    const credentials = Buffer.from(authToken, 'base64').toString('utf-8');

    const [username, password] = credentials.split(':');
    if (username !== USERNAME || password !== PASSWORD) {
        res.status(401).send('Not authorized');
        return;
    }
    next();
};