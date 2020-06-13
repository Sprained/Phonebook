const { store } = require("./UserController");

const Yup = require('yup');

const Phonebook = require('../models/Phonebook');

module.exports = {
    async index(req, res){
        const book = await Phonebook.findAll({ where: { users_id: req.userId } })

        return res.json(book);
    },
    async store(req, res){
        const schema = Yup.object().shape({
            name: Yup.string().required(),
            phone: Yup.number().required().min(9)
        });

        //virificação se inputs
        if(!(await schema.isValid(req.body))){
            return res.status(400).json({ error: 'Campos informados com erro!' });
        }

        const { name, phone } = req.body;

        const phoneExists = await Phonebook.findOne({ where: { users_id: req.userId, phone } });

        //verificar se usuario ja foi cadastrado
        if(phoneExists){
            return res.status(400).json({ error: 'Numero ja cadastrado!' });
        }

        await Phonebook.create({
            name,
            phone,
            users_id: req.userId
        });

        return res.json({ message: 'Numero cadastrado com sucesso!' });
    },
    async delete(req, res){
        const number = await Phonebook.findByPk(req.params.id);
        number.destroy();

        return res.json({ message: 'Numero apagado com sucesso!' });
    }
}