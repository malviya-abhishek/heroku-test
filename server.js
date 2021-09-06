require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const UserModel = require("./user.model");

app.use(express.static("public"));

app.get("/", (req, res) => {
	res.sendFile("/index.html");
});

app.get("/user", (req, res) => {
	UserModel.findById()
		.then((result) => {
			return res.send(result);
		})
		.catch((err) => {
			return res.send(err);
		});
});

app.get("/make", (req, res) => {
	const lol = {
		firstName: "joe",
		lastName: "mama",
		email: "joemama@mama.com",
	};
	UserModel.createUser(lol)
		.then((result) => {
			return res.status(201).send({ id: result._id });
		})
		.catch((err) => {
			return res.status(503).send({ error: "Service Unavailable" });
		});
});

app.listen(PORT, () => {
	console.log("Server started at port ", PORT);
});
