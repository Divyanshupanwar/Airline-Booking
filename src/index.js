const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const {PORT} = require("./config/serverConfig")
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


app.listen(3000,()=>{
    console.log(`server is running on port ${PORT}`);

})


