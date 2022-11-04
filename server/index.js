require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const materialArcRouter = require('./routes/materialArc.routes');
const countryRouter = require('./routes/country.routes');
const garanteeRouter = require('./routes/garantee.routes');
const materialBottomRouter = require('./routes/materialBottom.routes');
const seasonRouter = require('./routes/season.routes');
const placecountRouter = require('./routes/placecount.routes');
const tentRouter = require('./routes/tent.routes');
const colorRouter = require('./routes/color.routes');

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
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb', extended: true, parameterLimit: 10000 }));

app.use('/picture', express.static(__dirname + '/static'));
app.use('/api', materialArcRouter);
app.use('/api', countryRouter);
app.use('/api', garanteeRouter);
app.use('/api', materialBottomRouter);
app.use('/api', seasonRouter);
app.use('/api', tentRouter);
app.use('/api', placecountRouter);
app.use('/api', colorRouter);

app.listen(PORT, () => console.log('server listening on port ' + PORT));
