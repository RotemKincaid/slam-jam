const express = require("express")
const connectDB = require('./config/db')

const app = express()

// Connect Database
connectDB()

const PORT = process.env.PORT || 5001

app.get('/', (req, res) => res.send("API Running") )

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
