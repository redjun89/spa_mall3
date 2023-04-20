const mongoose = require('mongoose');

const Userschema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
});

Userschema.virtual("userId").get(function () {
    return this._id.toHexString();
});

Userschema.set("toJSON", {
    virtuals: true,
});

module.exports = mongoose.model("User", Userschema);