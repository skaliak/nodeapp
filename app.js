var express = require('express');
var bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json());

data = {
    "name": "John",
    "age": 40
};


app.get('/', function(request, response) {
    response.sendfile('./index.html');       
       
});

app.get('/data', function(request, response) {
        response.json(data);
        console.log('hit');
});

app.post('/data', function(request, response) {
    data = request.body;   
    console.log(data);
    response.send(200);
});

app.listen(3000, function(){
    console.log('listening on port 3000...');       
});
