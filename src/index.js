import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import uuidv4 from 'uuid/v4';
import models from './models'
import routes from './routes'

const app = express();

app.use(cors());

// use built in middleware to access HTTP POST payload Express version 4.16x
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/session', routes.session);
app.use('/users', routes.user);
app.use('/messages', routes.message);


  app.use((req, res, next) => {
    req.context = {
       models,
       me: models.user[1],
    };
    next();
  });

// Add PORT=<port no> to .env file in project directory

var port = process.env.PORT || 3000;

app.listen(port, function() {

  console.log('Server started on port: ' + port);
}
);

console.log('Continuously ! running console log service');

console.log(process.env.MY_SECRET);

