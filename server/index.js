const express = require('express')
const dbConnect = require('./config/dbConnect')

const app = express();
app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use('/api', require('./routes/api.js'));

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} `)
    dbConnect()
        .then(() => {
            console.log("MongoDb connected");
        }).catch(err => console.error(err))
});