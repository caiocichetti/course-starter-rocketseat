const mongoose = require("mongoose");

const Product = mongoose.model("Product");

module.exports = {
  async index(req, res) {
    // Listagem
    const products = await Product.find();

    return res.json(products);
  },

  async show(req, res) {
    // Detalhe
    const product = await Product.findById(req.params.id);

    return res.json(product);
  },

  async store(req, res) {
    // Criar
    const product = await Product.create(req.body);

    return res.json(product);
  },

  async update(req, res) {
    // Alterar
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    return res.json(product);
  },

  async destroy(req, res) {
    // Apagar
    await Product.findByIdAndRemove(req.params.id);

    return res.send();
  },
};
