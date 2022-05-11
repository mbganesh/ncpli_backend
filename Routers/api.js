import express from "express";
import CareerModal from '../Modals/CareerModal.js'

const router = express.Router()


router.get('/getData' , async(req,res)=>{
    var AllData = await CareerModal.find({})
    res.json({data:AllData})
})


router.post('/addData' , async (req , res) => {
    const myData =  req.body; // obj
    var AddData = await CareerModal.insertMany(myData)
    res.json({ updatedData:AddData})
})


router.post('/deleteData' , async (req , res) => {
    const myData =  req.body.id; // id
    var RemoveData = await CareerModal.findByIdAndDelete({_id:myData})
    res.json({ removedData:RemoveData})
})



router.get('/getTitle' , async (req , res) => {
    const foundData = await CareerModal.find({} )

    // const myData = foundData.map()

    

    res.json(foundData)

})


export default router