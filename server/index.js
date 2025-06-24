const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

const TODO = []
app.get("/" , (req ,res)=>{

        res.json({
                TODO
        })
})

app.post("/" , (req ,res)=>{
        TODO.push(req.body.newTodo)
        res.send('success')
})
app.delete("/" , (req ,res)=>{
        console.log(req.body)
        TODO.splice(req.body.index,1)
        res.send('success')
})
app.listen(3002)