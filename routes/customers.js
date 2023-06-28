const express = require('express');
const connection = require('../connection');
const router = express.Router();

router.post('/create',(req,res,next)=>{
    let product = req.body;
    query = "insert into customers (firstname,lastname,contact) values(?,?,?)";
    connection.query(query,[customers.firstname,customers.lastname,customers.contact],(err,results)=>{
        if(!err){
            return res.status(200).json({message: "Customer Added Successfully"});
        }
        else
        return res.status(500).json(err);
    });
});

router.get('/read',(req,res,next)=>{
   var query = "SELECT * FROM customers";
    connection.query(query,(err,results)=>{
        if(!err){
            return res.status(200).json(results);
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.put('/update/:id',(req,res,next)=>{
    const id = req.params.id;
    let customers = req.body;
    var query = "UPDATE customers SET firstname=?,lastname=?,contact=? WHERE id=?";
    connection.query(query,[customers.firstname,customers.lastname,customers.contact,id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Customer Not Found"});
            }
            return res.status(200).json({message:"Customer Updated Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

router.delete('/delete/:id',(req,res,next)=>{
    const id = req.params.id;
    var quer="DELETE FROM customers WHERE id=?";
    connection.query(query,[id],(err,results)=>{
        if(!err){
            if(results.affectedRows == 0){
                return res.status(404).json({message:"Customer Not Found"});
            }
            return res.status(200).json({message:"Customer Deleted Successfully"});
        }
        else{
            return res.status(500).json(err);
        }
    });
});

module.exports = router;