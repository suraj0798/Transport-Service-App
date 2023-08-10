import express from "express";
import Trip from "../models/tripModel.js";

const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (error) {
        res.status(404).json({error: " Trips not found "})
    }
};

const createTrip = async (req, res) => {
    try {
        const {pickupFrom, destinationTo, amount, date} = req.body;
        
        const newTrip = new Trip({
            pickupFrom, destinationTo, amount, date
        });

        const saveTrip = await newTrip.save();

        res.status(200).json(saveTrip)

    } catch (error) {
        res.status(500).json({error: "Error in creating trip"})
    }
};

export  {getAllTrips, createTrip} ;