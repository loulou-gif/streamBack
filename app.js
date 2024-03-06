const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const cors = require('cors');
const multer = require('multer')

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

// Stockage des images et vidéos


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null,'./public/data/')
  },
  filename: (req, file, cb) =>{
    cb(null, Date.now() + "_" + file.originalname);
  }
})

// petit middleware pour le stockage

const upload = multer({storage: storage})
 
app.use("/user", require("./routes/users.routes"))

app.post('/streams', (req, res) =>{
  console.log(req.body)
  
})


app.use("/stream", require("./routes/stream.routes"))
// app.use(express.static(path.join(__dirname, './public')))
app.post("/single", upload.array("uploads"), (req, res) =>{
  console.log(req.files)
  console.log(req.body),
  {message: "tout est bon"}
})
// démarrer le serveur
app.listen(port, () => console.log("Le server à démarré au port:"+ port))

