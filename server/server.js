import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./db.js";
import componyRouter from "./routes/companyRoute.js";
import tripRouter from "./routes/tripRoute.js"

dotenv.config ();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/companies", componyRouter);
app.use("/api/trips", tripRouter)

const startServar = async () => {
    try {
        connectDB();
        await app.listen(PORT);
        console.log(`Server is running on port: ${PORT}`);
    } catch (error) {
        console.log(("Error in connection sever", error));
    }
}

startServar();