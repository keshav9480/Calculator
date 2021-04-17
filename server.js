
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { response } = require('express');

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
	console.log(req);	
});
app.use(bodyParser.urlencoded({extended: true}))
app.post("/", (req, res) => {
	console.log(req.body.n1+" "+req.body.n2);
	var num1 = Number(req.body.n1);
	var num2 = Number(req.body.n2);
	res.send("Addition of two numbers is "+(num1 + num2));
});

app.listen("8080", (req, res) => {
	console.log("server listening at port 8080")
});

