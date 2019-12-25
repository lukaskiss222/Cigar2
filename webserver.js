const express=require('express'),app=express();
app.use(express.static('web'));
app.listen(3000);

app2 = express();
app.use(express.static('web_bot'));
app.listen(3001);
