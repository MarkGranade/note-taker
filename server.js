const express = require('express');
// local
const htmlRoutes = require('./routes/html-routes');
const apiRoutes = require('./routes/api-routes');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(apiRoutes);
app.use(htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}`);
});
