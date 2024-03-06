const mongoose = require("mongoose")

const streamSchema = mongoose.Schema(
    {
        name:{
            type: String,
            require: true
        },
        date:{
            type: String,
            require: true
        },
        authors:{
            type: String,
            require: true
        },
        studio:{
            type: String,
            require: true
        },
        time:{
            type: String,
            require: true
        },
        kind:{
            type: String,
            require: true
        },
        synopsys:{
            type: String,
            require: true
        },
        licence:{
            type: String,
            require: true
        },
        episode:{
            type: String,
            require: true
        },
        type:{
            type: String,
            require: true
        },
        banner:{
            type: String,
            require: true
        },
        affiche:{
            type: String,
            require: true
        },
        video:{
            type: String,
            require: true
        },
    },
    {
        timestamps:true
    }
)

module.exports = mongoose.model('stream', streamSchema)

