import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from "cors"
import { ConnectDB } from "./DB/ConnectDB.js";
import authRouter from "./Routes/auth.route.js";
import cookieParser from "cookie-parser"


// dotenv config
dotenv.config();
 
const PORT = process.env.PORT || 6060;
// init app
const app = express();

app.use(cors({origin : "http://localhost:5173", credentials : true}));
 

//middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser()); // Allow us to parse cookie-parser
     

// routes
app.use("/api/auth", authRouter);

// start server
app.listen(PORT, () =>{
    ConnectDB();
    console.log(`Server is running on port ${PORT}`.bgBlue.white);
});

console.log(process.env.PORT);
