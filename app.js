const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require('cors');


const app = express();
const port = 5000

// utilisation des cors

app.use(cors({
    origin: 'http://localhost:3000' // Remplacez ceci par votre URL frontend
  }));


// connexion à la db

connectDB()

// concepte de middleware pour traiter les data de la request

app.use(express.json())
app.use(express.urlencoded({extended: false}))
 
app.use("/user", require("./routes/users.routes"))
app.use("/stream", require("./routes/stream.routes"))


// démarrer le serveur
app.listen(port, () => console.log("Le server à démarré au port:"+ port))

