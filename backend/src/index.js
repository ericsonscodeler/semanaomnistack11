const express = require ('express');
const cors = require ('cors');
const routes = require('./routes');
const app = express();


app.use(express.json());
app.listen(cors());
app.use(routes);


app.listen(3333) //localhost:3333


