const express = require('express'); 
const app = express()
const port = 3000
app.use(express.json());
app.use('/site', express.static('site')) //permet de dire le répétoire dans lequel piocher les ressources 

let MongoClient = require('mongodb').MongoClient;
let mongodb = require('mongodb');
let url = "mongodb://127.0.0.1:27017/";

app.get('/taches', (req, res, next) => {
    MongoClient.connect(url).then(db => {
        let dbo = db.db("taches");
        return dbo.collection("taches").find({}).toArray();
    }).then((datas) => {
        console.log(datas);
        res.status(200).json(datas);
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: err })
    });
});

app.post('/taches', (req, res, next) => {
    let tache = req.body;
    MongoClient.connect(url).then(db => {
        let dbo = db.db("taches");
        return dbo.collection("taches").insertOne(tache);
    }).then((datas) => {
        console.log(datas);
        res.status(200).json({ ok: true });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: err })
    });
});

app.delete('/taches/:id', (req, res, next) => {
    MongoClient.connect(url).then(db => {
        let dbo = db.db("taches");
        return dbo.collection("taches").deleteOne({ _id: mongodb.ObjectId(req.params.id) });
    }).then((datas) => {
        console.log(datas);
        res.status(200).json({ ok: true });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: err })
    });
});

app.put('/taches/:id', (req, res, next) => {
    let tache = req.body;
    MongoClient.connect(url).then(db => {
        let dbo = db.db("taches");
        console.log(req.params)
        return dbo.collection("taches").updateOne({ _id: mongodb.ObjectId(req.params.id) }, { $set: tache });
    }).then((datas) => {
        console.log(datas);
        res.status(200).json({ ok: true });
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ message: err })
    });
});



app.listen(port, () => {
    console.log(`L'application écoute le port ${port}`)
})
