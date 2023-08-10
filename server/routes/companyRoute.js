import express from "express";
import { createCompany, deleteCompany, getAllCompany, updateCompany } from "../controllers/companyController.js";

const router = express.Router();

router.get("/", getAllCompany);
router.post("/", createCompany);
router.delete("/:id", deleteCompany);
router.put("/:id", updateCompany);

export default  router;