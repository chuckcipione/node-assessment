const express = require('express');
const bodyParser = require('body-parser');
// const session = require('express-session');
// const cors = require('cors');
const userCtrl = require('./userCtrl');
const userData = require('./userData.json');

const port = 3000;

const app = express();
app.use(bodyParser.json());



app.get('/api/users', function(req, res, next){
    console.log(userCtrl.getUsers(req.query))
    res.status(200).json(userCtrl.getUsers(req.query))
  });

app.get('/api/users/:userId', function(req, res, next){
  if(userCtrl.getUserId(req.params).status === 404){
    return res.status(404).json(null)
  }
  res.status(200).json(userCtrl.getUserId(req.params))
})

app.get('/api/admins', function(req, res, next){
    res.status(200).send(userCtrl.getAdmins())
  })

app.get('/api/nonadmins', function(req, res, next){
    res.status(200).send(userCtrl.getNonAdmins())
})

app.get('/api/user_type/:type', function(req, res, next){
    res.status(200).send(userCtrl.getUserType(req.params))
})

app.put('/api/users/:userId', function(req, res, next){
    res.status(200).send(userCtrl.updateUser(req.params, req.body))
})

app.post('/api/users', function(req, res, next){
    res.status(200).send(userCtrl.createUser(req.body))
})

app.delete('/api/users/:userId', function(req, res){
    res.status(200).send(userCtrl.removeUser(req.params.userId))
})















app.listen(3000, function(){
    console.log(`Listening on Port ${port}`)
});