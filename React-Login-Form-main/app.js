const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// 16.
app.get("/",cors(),(req,res)=>{

})

// 17.get the data from the login page
app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})


// 18.
app.post("/signup",async(req,res)=>{
    const{email,password}=req.body
    // 19. createing new user
    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            // 20.function that store data in the mongoDB
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})
// 21.
app.listen(8000,()=>{
    console.log("port connected");
})

