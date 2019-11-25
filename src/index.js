import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import uuidv4 from 'uuid/v4';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('\n\nDistance Traker Microservice default route!\n\n');
});
// Let's set up more routes to accommodate a RESTful API for your Express application 
// eventually. Add the following routes to your Express application whereas the URI itself 
// doesn't change, but the method used from your Express application:

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
  });  

app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
  });

app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
  });
  
app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
  });

let users = {
  1: {
    id: '1',
    username: 'rfeggins',
  },
  2: {
    id: '2',
    username: 'csmith-johnson',
  },
};

let messages = {
  1: {
    id: '1',
    text: 'Hello World',
    userId: '1',
  },
  2: {
    id: '2',
    text: 'By World',
    userId: '2',
  },
};

app.get('/users', (req, res) => {
    return res.send(Object.values(users));
  });

app.get('/users/:userId', (req, res) => {
    return res.send(users[req.params.userId]);
  });

  app.get('/messages', (req, res) => {
    return res.send(Object.values(messages));
  });
  app.get('/messages/:messageId', (req, res) => {
    return res.send(messages[req.params.messageId]);
  });

  app.post('/messages', (req, res) => {
    const id = uuidv4();
    const message = {
      id,
      text: req.body.text,
    }
    message[id] = message;
    return res.send(message);
  });

// Add PORT=<port no> to .env file in project directory

var port = process.env.PORT || 3000;

app.listen(port, function() {

  console.log('Server started on port: ' + port);
}
);

console.log('Continuously ! running console log service');

console.log(process.env.MY_SECRET);

