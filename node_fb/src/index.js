const express = require('express');
const app = express();

app.set('port', 3000);
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
