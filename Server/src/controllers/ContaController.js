const mongoose = require('mongoose');

const Conta = mongoose.model('Conta');

module.exports = {
  async index(req, res) {
    
    const { page = 1 } = req.query;
    const contas = await Conta.paginate({}, { page, limit: 10 });

    return res.json(contas);
  },

  async show(req, res) {
    const contas = await Conta.findById(req.params.id);

    return res.json(contas);
  },

  async store(req, res) {
    const contas = await Conta.create(req.body);
    
    return res.json(contas);
  },

  async update(req, res) {
    const contas = await Conta.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(contas);
  },

  async destroy(req, res) {
    await Conta.findByIdAndRemove(req.params.id);

    return res.send();
  }
};