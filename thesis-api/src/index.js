import express from "express";
import path from "path";
import mongoose from "mongoose";

const app = express();
mongoose.connect("mongodb://localhost/thesis");

app.post("/api/auth", (req, res) => {
	res.status(400).json({ errors: { global: "Invalid Credentials" } });
});

app.get("/*", (req, res) => {
	res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => console.log("Running on localhost:8080")) 