import mongoose  from "mongoose";

const Schema = mongoose.Schema;

const tripSchema = new Schema ({
    pickupFrom: {
        type: String,
        require: true,
    },
    destinationTo: {
        type: String,
        require: true,
    },
    amount: {
        type: Number,
    },
    date: {
        type: Date,
        require: true,
    },
});

const Trip = mongoose.model("Trip", tripSchema);

export default Trip;