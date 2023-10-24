const {getAll, getOne, create, remove, update, removeDefinitivo, setimagen}=require("../controllers/products.controller");
const express=require("express");
const productMiddleware=require("../middlewares/products.middlewares");
const verifyJWT = require("../utils/verifyJWT");

const productRouter=express.Router()

productRouter.route("/")
.get(verifyJWT,getAll)
.post(verifyJWT,create)

productRouter.route("/:id")
.get(verifyJWT,productMiddleware.existProducts,getOne)
.delete(verifyJWT,productMiddleware.existProducts,remove)

.put(verifyJWT,productMiddleware.existProducts,update)

productRouter.route("/:id/images")
.post(setimagen)

productRouter.route("/:id/product")
.delete(verifyJWT, removeDefinitivo)

module.exports=productRouter