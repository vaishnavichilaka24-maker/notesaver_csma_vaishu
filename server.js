const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const noteRoutes = require("./routes/noteRoutes");
const dns= require("dns")
dns.setServers(["8.8.8.8","8.8.4.4"])

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", noteRoutes);

mongoose.connect("mongodb+srv://vaishu:vaishu267@cluster0.4nezba1.mongodb.net/nostesaver")
.then(() => {
    console.log("MongoDB Connected Successfully");
})
.catch((err) => {
    console.log("Database Connection Error:", err);
});

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Notes Saver Backend is Running...");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
