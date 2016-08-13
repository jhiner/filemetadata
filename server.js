var express = require("express");
var path = require("path");
var multer = require("multer");
var upload = multer();

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static(path.join(__dirname, "public")));

app.post("/get-file-size", upload.single('file'), function(req, res) {
   
   // handle form post
   res.json({"size": req.file.size});
    
});

app.listen(port, function() {
    console.log("Listening on port " + port);
});