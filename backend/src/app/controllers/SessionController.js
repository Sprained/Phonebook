const jwt = require('jsonwebtoken');
const Yup = require('yup');

const Users = require('../models/Users');

module.exports = {
    async store(req, res){
        const schema = Yup.object().shape({
            email: Yup.string().email().required(),
            password: Yup.string().required()
        });
        
        //verificação se campos estão preenchidos corretamente
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Email ou Senha informado com erro!' });
        }

        const { email, password } = req.body;

        const user = await Users.findOne({ where: { email } });

        //verificação se usuario existe
        if(!user){
            return res.status(401).json({ error: 'Usuario não cadastrado!' })
        }

        //verificação se senha ta correta
        if(!(await user.checkPass(password))){
            return res.status(401).json({ error: 'Email ou Senha informado com erro!' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email
            },
            token: jwt.sign({ id }, process.env.APP_SECRET)
        })
    }
}