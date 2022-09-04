const express = require("express")
const app = express()

const cors = require('cors')
app.use(cors())

app.use("/getinfo", (req, res) => {
  res.json({msg:"hello"})
})

const PORT = process.env.PORT || 5007
app.listen(PORT)
console.log('Server is listen at port ' + PORT)