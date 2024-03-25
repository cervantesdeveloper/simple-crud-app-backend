import express from "express";
import mongoose from 'mongoose';
import productRoute from "./routes/product.route.js";

const PORT = 3000

const app = express();

//midddleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`, `http://localhost:${PORT}`)
});

app.get('/', (req, res)=>{
    res.send("Hello from NODE API server updated");
});

mongoose.connect("mongodb+srv://cervantesdeveloper:QkiGi2A7toUbahlm@backenddb.nfogemx.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(()=>{
    console.log("Connected to database!")
})
.catch(()=>{
    console.log("Connected failed!")
})