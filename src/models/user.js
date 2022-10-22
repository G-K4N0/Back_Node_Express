const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        fullName:{
            type : String,
            required :true
        },
        name: {
            type : String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone : {
            type : String,
            required : true
        },
        age : {
            type : Number,
            required : true
        }
    }
)

module.exports = mongoose.model('User',userSchema);