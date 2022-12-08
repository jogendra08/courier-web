const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {
        type: Date,
        default: Date.now
    },
    document_number: {
        type: String,
        require: true,
        uniqe: true
    },
    city: {
        type: String,
        require: true
    },
    consignee: {
        type: String,
        require: true
    },
    consignor: {
        type: String,
        require: true
    },
    weight: {
        type: Number,
        default: "min"
    },
    total: {
        type: Number,
        default: "00"
    }


});


module.exports = mongoose.model('notes', NotesSchema);