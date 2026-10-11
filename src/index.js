import expess from "express"

const app = express()
app.use(expess.json())


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

