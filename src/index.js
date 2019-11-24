import 'dotenv/config';
import cors from 'cors'; 
import express from 'express';

const app = express();
app.use(cors());

var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Distance Traker Microservice default route!');
});


app.listen(port, function() {

  console.log('Server started on port: ' + port);
}
);

console.log('Continuously ! running console log service');

console.log(process.env.MY_SECRET);

