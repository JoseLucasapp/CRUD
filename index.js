const app = require('./config/server');

app.get('/',(req, res)=>{
    res.send('ok');
});

app.listen(3000);