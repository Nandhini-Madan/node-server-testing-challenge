const express = require("express")
const hobbits = require("./hobbitsModel")

const router = express.Router()

router.post("/", async (req, res, next) => {
    try {
        const user = await hobbits.create(req.body)
        console.log(user)
        res.status(201).json(
            user
        )
        
    }
    catch (err) {
        next(err)
    }
})

router.delete("/:id",async(req,res,next)=>{
    try{
        const user=await hobbits.remove(req.params.id)
        res.status(200).json({
            message:"User succesfully deleted"
        })
    }
    catch(err){

    }
})

module.exports=router