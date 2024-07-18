const Hospitals=require('../Db/models/hospital-schema')
const getHospitals=async(req,res)=>{
    const hospitals=await Hospitals.find()
    res.status(200).json({message:'success',data:hospitals})
}
const postHospitals=async(req,res)=>{
    const body=req.body
    console.log(body)
    // const{originalname}=req.file
    const hospitals=await Hospitals.create(body)
     
    res.status(201).json({message:'success',data:hospitals})
}
module.exports={getHospitals,postHospitals}