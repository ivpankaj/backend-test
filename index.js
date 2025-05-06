import express from 'express'

const app = express()

app.use('/',(req,res)=>{
    res.send("if u are seeing this url it means i have deployed my backend to google cloud")
})

app.listen(8080)