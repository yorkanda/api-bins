const express = require('express')
const cors = require('cors')
const app = express();
const { bin } = require('johngrimm-utils')

app.use(cors())

app.get("/api/:id", async (req,res,next) => {
    let info = bin(req.params.id)
    res.send({ status: true, data: info})
})


app.listen(3000, () =>{
    console.log('app on!')
})