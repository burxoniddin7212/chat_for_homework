const express = require("express")
const fs = require('fs')
const path = require('path')
const PORT = process.env.PORT || 5000

const app = express()

app.get('/users', (req, res)=> {
    let users =JSON.parse(fs.readFileSync(path.join(process.cwd(), 'src', "database", "users.json"), "utf-8")) || []
    res.send(users)
})

app.listen(PORT, ()=> console.log(`${PORT} is working`))