const Yup = require('yup');

const Users = require('../models/Users');

module.exports = {
    async store(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().required().min(6)
        });

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Campos preenchido com erro!' });
        }

        const userExists = await Users.findOne({ where: { email: req.body.email } });

        if(userExists){
            return res.status(400).json({ error: 'Email ja cadastrado!' });
        }

        const { id_users, name, email } = await Users.create(req.body);

        return res.json({ id_users, name, email });
    }
}