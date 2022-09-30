const express = require("express")
const SERVER_PORT = 8088
const app = express()


app.get("/", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})


app.get("/user", (req, res) => {
    var user = {
        first_name: "Ravkerat",
        last_name: "Singh"
    }

    //res.send(user)
    res.setHeader("content-type", "application/json")
        .status(200)
        .send(JSON.stringify(user))
  
})


app.post("/user/:fnm/:lnm", (req, res) =>{
    const s = req.params
    var first_name = s.fnm
    var last_name = s.lnm

    const newS  = {
        
        first_name,
        last_name,
        // full_name : `${first_name} ${last_name}`
    }
    res.json(newS )
 
})


app.listen(SERVER_PORT, () => {
    console.log(`Server Started at http://localhost:${SERVER_PORT}/`)
})
