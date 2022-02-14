var express = require('express')
var app = express()
const process = require('process')
const args = process.argv
const userName = args[2]
const pass = args[3]


const Messagedb = require('./schemas_models/Ads');
const Admindb = require('./schemas_models/Admin');

var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://" + userName + ':' + pass + "@cluster0.6ykyw.mongodb.net/Ads_DB?retryWrites=true&w=majority";
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(makeDB())
    .then(() => app.listen(8080))
    .then(console.log("connected to mongo and server listening on port 8080"));


app.use(express.static(__dirname + '/node_modules'));
// app.get('/screen=:id', function (req, res) {
//     const id = req.params.id
//     var template = ""
//     var ads = null
//     switch (id) {
//         case '1':
//             ads = ads_1;
//             template = "template1"
//             break;
//         case '2':
//             ads = ads_2;
//             template = "template2"
//             break;

//     }
//     // const html = fs.readFileSync(`./ads/Templates/` + template + `.html`, 'utf8')
//     // res.json({ html: html, ads: ads })רקד
//     res.sendFile(__dirname + `/` + template + `.html`);

// });







async function makeDB() {

    await Admindb.deleteMany({});
    await Messagedb.deleteMany({});


    Admindb.create({ userName: "eden", passWord: "123" });
    Admindb.create({ userName: "hen", passWord: "123" });
    Admindb.create({ userName: "bar", passWord: "123" });



    const msgArr = require('./Ads.json');
    Messagedb.insertMany(msgArr);
    return;
}