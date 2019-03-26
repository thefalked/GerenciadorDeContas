const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ContaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },
  valor: {
    type: Number,
    required: true,
  },
  parcelado: {
    type: Boolean,
    required: true,
  },
  vezes: {
    type: Number,
    default: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

ContaSchema.plugin(mongoosePaginate);

mongoose.model('Conta', ContaSchema);