let express = require('express');
let app = express();


app.get('/', function (req, res) {
    res.json({ 
        products: [{
            name: "laptop", 
            price: 500
        }, {
            name: "monitor",
            price: 100
        }, {
            name: "keyboard",
            price: 30
        }]
    });
    res.end();
});

app.listen(3001, function () {
  console.log("app listening on port 3001!");
});
// my commment to execute he pipeline for free 

