require('dotenv').config();

const express = require('express');
const mongoClient = require('mongoose');

const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoClient.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('DB connected...');
    app.listen(app.get('port'), () => {
      console.log(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);
      console.log('  Press CTRL-C to stop\n');
  });
  })
  .catch((err) => {
    console.log(err);
  });