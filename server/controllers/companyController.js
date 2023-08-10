import express from "express";
import Company from "../models/companyModel.js";

const getAllCompany = async (req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(404).json({message: "Companies not found"})
    }
};

const createCompany = async (req, res) => {
    try {
        const {name, address, phone} = req.body;

        const newCompany = new Company({
            name, address, phone
        });

        const saveCompony = await newCompany.save();

        res.status(201).json(saveCompony);
    } catch (error) {
        res.status(500).json({error: "Error creating company"})
    }
};

const deleteCompany = async (req, res) => {
    try {
        const companyId = req.params.id;
        
        const deletedCompany = await Company.findByIdAndDelete(companyId);

        if (deletedCompany) {
            res.status(200).json({message: "Comapany deleted successfully"});
        } else {
            res.status(404).json({error: "Company not found"})
        }
    } catch (error) {
        res.status(500).json({error: "Error deleting company"})
    }
}

const updateCompany = async (req, res) => {
    try {
        const companyId = req.params.id;

        const {name, address, phone} = req.body;

        const updatedCompany = await Company.findByIdAndUpdate(companyId, 
            {name, address, phone}, {new: true});
        
        if (updatedCompany) {
            res.status(200).json(updatedCompany);
        } else {
            res.status(404).json({error: "Company not found"})
        }
    } catch (error) {
        res.status(500).json({error: "Error in updating company"})
    }
};

export { getAllCompany, createCompany, deleteCompany, updateCompany};