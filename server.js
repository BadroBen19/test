const dotenv = require('dotenv');
const app = require('./app');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

mongoose
  .connect(
    'mongodb+srv://benbadro1331:PIYcmtKIBttGmyIV@cluster0.9mlcfkv.mongodb.net/Natours?retryWrites=true&w=majority&appName=Cluster0',
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(result => {
    console.log('ca marche');
  })
  .catch(err => {
    console.log('ca marche pas');
  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
