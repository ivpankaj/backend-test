import express from 'express'

const app = express()

app.use('/',(req,res)=>{
    res.send("if u are seeing this url it means pankaj have deployed  backend to google cloud ,,,,,bc kar diya deploy")
})

app.listen(8080)