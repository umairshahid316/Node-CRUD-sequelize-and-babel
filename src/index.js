import express from "express"
import bodyParser from "body-parser"
// import { db } from "./config/db.config"
import EmpRouter from "./routes/employee.route"
import PostRouter from "./routes/post"
import { sequelize, User } from "../models"
import lumie from "lumie"
import path from "path"
/* load environment variable from .env */
//here

/* initiate the express server instance */
const app = express()

/* get express port from .env
or declare with default value  */
const port = process.env.PORT || 5000

/* parse request data content type application/x-www-form-urlencoded */
app.use(bodyParser.urlencoded({ extended: false }))

/* parse request data content type application/json */
app.use(bodyParser.json())

/* enable cors for express app */
const cors = require("cors")({
  origin: true,
})
app.use(cors)

/* lumie */
lumie.load(app, {
  preURL: "api",
  verbose: true,
  ignore: ["*.spec", "*.action"],
  controllers_path: path.join(__dirname, "controllers"),
})

/* define root route */
app.get("/", (req, res) => {
  res.send("Hello world")
})

/* create employee routes */
app.use("/api/employee", EmpRouter)

/* create post routes */
app.use("/api/post", PostRouter)

/* listen to the exposed port */
app.listen(port, async () => {
  console.log(`Express is running at port ${port}`)
  await sequelize.authenticate()
  console.log("Database Connected")
})
