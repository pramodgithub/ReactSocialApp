import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"

import expressRoutes from "./routes/posts.js"

const app = express();



app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}));
app.use(cors());

app.use("/posts", expressRoutes);

const CONNECTION_URL = "mongodb+srv://pramodreact:Surface@cluster0.2tyf8kd.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewURLparser:true, useUnifiedtopology:true})
                .then(() => app.listen(PORT, () => console.log(`Server is running on port:${PORT}`)))
                .catch((error) => console.log(error.message));




