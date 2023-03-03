const express = require("express")

const app = express()

const port = 8080

app.use(express.urlencoded({extended:false}))
app.use(express.static(`dist`))
app.set(`view engine`,`ejs`)

app.get("/",(req,res)=>{
    const {any} = req.params

    res.render("index",{any})
})

app.listen(port,()=>{
    console.log(`App listening on port:${port} 🚀!`)
})