let express = require('express');
let app = express();


app.get('/', function (req, res) {
    res.json({ 
        shoppingCart: [{
            product: "laptop", 
            number: 1,
            price: 500
        }, {
            product: "monitor",
            number: 2,
            price: 100
        }]
    });
    res.end();
});

app.listen(3002, function () {
  console.log("app listening on port 3002!");
});
// and finally you the latest file to be productif et gagner du temps 
// latest
