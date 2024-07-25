const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const customerController = require('./controllers/customerController');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/', customerController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
