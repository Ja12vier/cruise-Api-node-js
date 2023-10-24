const catchError=require("../utils/catchError");
const {orders}=require("../models")

exports.existOrder=catchError(async(req, res, next)=>{
    const {id}=req.params;
    const order=await orders.findOne({
        where: {id,status:true}
    })
    if(!order) return res.status(404).json({message:`the order with id:${id} not found `})
    
    req.Order=order

    next()
})