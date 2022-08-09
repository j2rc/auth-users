import { Schema, model, models } from "mongoose"

const accountSchema = new Schema({
    firstName: {
        type: String,
        trim: true,
        maxlength: [20, "Title must be less than 20 characters"]
    },
    lastName: {
        type: String,
        trim: true,
        maxlength: [20, "Title must be less than 20 characters"]
    },
    customized: {
        select: String,
        input: String
    },
    mobile: {
        type: String,
        trim: true,
        maxlength: [20, "Title must be less than 20 characters"]
    },
    radioGroup: String,
    selectId: String,
    hireDate: Date,
    isCheck: Boolean,
}, {
    //timestamps: true,
    //versionKey: false
})

export default accountSchema