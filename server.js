const express = require("express")
const app = express()

const PORT = process.env.PORT || 5001

app.get('/', (req, res) => res.send("API Running") )

app.listen(PORT, () => `server started on port ${PORT}`)
