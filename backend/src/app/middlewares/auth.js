const jwt = require('jsonwebtoken');
const util = require('util');
const { promisify } = util;

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    //verificar se token foi informado nos cabeçalhos
    if(!authHeader){
        return res.status(401).json({ error: 'Token não informado!' });
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoded = await promisify(jwt.verify)(token, process.env.APP_SECRET);

        req.userId = decoded.id_users;

        return next();
    } catch (error) {
        return res.status(401).json({ error: 'Token invalido!' });
    }
}