import express from "express";
const app = express();

const productRoute = express.Router();

import { 
    getProducts, 
    getProduct,
    createProduct,
    updatedProduct,
    deleteProduct
} 
from "../controllers/product.controller.js";


app.use("/api/products", productRoute);

//GET request
productRoute.get('/', getProducts);
productRoute.get('/:id', getProduct);

//POST requests
productRoute.post('/', createProduct);

//PUT request
productRoute.put('/:id', updatedProduct)

//DELETE request
productRoute.delete('/:id', deleteProduct)

export default productRoute;