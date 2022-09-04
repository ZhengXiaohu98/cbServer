const express = require("express")
const app = express()

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://xiaohu:1228@cluster0.hhkzd3t.mongodb.net/?retryWrites=true&w=majority")

const cors = require('cors')
app.use(cors())

app.use("/getinfo", (req, res) => {
  res.json({msg:"hello"})
})

// Add User router
const usersRouter = require("./routes/users")
app.use("/api/users", usersRouter)

const PORT = process.env.PORT || 5007
app.listen(PORT)
console.log('Server is listen at port ' + PORT)