const express = require("express"); 
const app = express();

app.use(express.json())

app.listen(3000,() => {
    console.log("server started")
})

app.post("/post", async(req, res) => {
    console.log(req.body);
    const {data} = req.body; 

    try {

        if (data == "sushma"){
            res.send({status:"ok"})
        }
        else{
            res.send({status:"User not Found"})
        }
    
    }

    catch(error) {
        res.send({status:"Something went wrong try again"})
    }

});

   