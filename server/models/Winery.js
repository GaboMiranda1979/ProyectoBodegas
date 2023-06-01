const mongoose = require('mongoose');

const WinerySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    zone: {
        type: String,
        required: true
    },
    fechaCreacion:{
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Winery', WinerySchema);