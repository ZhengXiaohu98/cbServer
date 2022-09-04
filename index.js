const express = require("express")
const app = express()

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://xiaohu:1228@cluster0.hhkzd3t.mongodb.net/?retryWrites=true&w=majority")

const cors = require('cors')
app.use(cors())

// Allow the server accpet json
app.use(express.json())

app.use("/getinfo", (req, res) => {
  res.json({msg:"hello"})
})

// Using passport to verify token
const passport = require('passport')
app.use(passport.initialize())
require('./configu/passport')(passport)

// Add User router
const usersRouter = require("./routes/users")
app.use("/api/users", usersRouter)

const PORT = process.env.PORT || 5007
app.listen(PORT)
console.log('Server is listen at port ' + PORT)