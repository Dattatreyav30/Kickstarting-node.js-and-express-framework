const bodyParser = require('body-parser')

const express = require('express');


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const loginRoutes = require('./backendRoutes/login');

const loginSucessRoute = require('./backendRoutes/login-success');

const messagesRoutes = require('./backendRoutes/messages')

app.use(loginRoutes);  

app.use(loginSucessRoute);

app.use(messagesRoutes)
 
app.listen(9000); 