require('dotenv').config();
const cors = require('cors');
const express = require('express');

const PORT = process.env.PORT || 8080;
const materialArcRouter = require('./routes/materialArc.routes');

const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
  // methods: ['GET', 'POST', 'DELETE', 'PUT'],
};
app.get('/', (req, res) => {
  res.send('Hello!');
});
app.use(express.json());
app.use(cors(corsOptions));
app.use('/api', materialArcRouter);

app.listen(PORT, () => console.log('server listening on port ' + PORT));
