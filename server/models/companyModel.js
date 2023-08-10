import mongoose from "mongoose";

const Schema = mongoose.Schema;

const companyModel = new Schema ({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    address: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
    },
})

const Company = new mongoose.model("Company", companyModel);

export default Company;