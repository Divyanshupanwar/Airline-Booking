const express = require("express")
const app = express()
const {PORT} = require("./config/serverConfig")
app.use(express.json())
app.listen(3000,()=>{
    console.log(`server is running on port ${PORT}`);

})

