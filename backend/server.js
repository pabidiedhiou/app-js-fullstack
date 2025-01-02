const express = require("express");
const cors = require("cors");
const router = require("./routes/post.routes");
const path = require("path");
const connectDB = require("./config/db");
const QuestionModel = require("./models/post.model");

const app = express();
const port = 7000;
// Connexion à la base de données
connectDB();

//Midlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//Mes routes
app.use("/post", router);
//Lancer le server
app.listen(port, () => {
  console.log(`On écoute le port ${port}`);
});
