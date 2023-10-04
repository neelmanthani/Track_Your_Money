const express = require('express')
const cors = require('cors')
const session = require('express-session');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()
const port = 3001;

const transRoute = require("./routes/transaction")
const usersRoute = require("./routes/users")

app.use('/api', createProxyMiddleware({ target: 'https://csc.csc648team06.com', changeOrigin: true }));

app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: false,
}))
app.use(express.json());
app.use(cors())

// app.get("/api", (req,res) => {
//   res.send("this is the back end")
// })

app.use("/api/transaction",transRoute.router)
app.use("/api/user",usersRoute)

app.listen(port, () => {console.log("Listening on port " + port)})

