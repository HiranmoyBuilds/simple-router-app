const express = require("express");
const userRouter = require("./routes/user");
const {logReqRes} = require("./middlewares");
const {connectMongoDb} = require("./connection");

const app = express();
const PORT = 8000;

//database connection
connectMongoDb("mongodb://127.0.0.1:27017/tutorial-app-1").then(()=>{
    console.log("MongoDb connected!!")
});


// Middleware - plugin
app.use(express.urlencoded({ extended : false }));
app.use(logReqRes("log.txt"));

//Routes
app.use("/api/users", userRouter);

app.listen(PORT, () =>
    console.log(`server started at port:${PORT}`)
);