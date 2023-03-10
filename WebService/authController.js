const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = "mongodb://127.0.0.1:27017/";

exports.signin = async function (req, res) {
    let utilisateur = req.body;
    try {
        db = await MongoClient.connect(url);
        let dbo = db.db("taches");
        await dbo.collection("utilisateurs").insertOne(utilisateur);
        res.status(200).json();
        console.log("utilisateur crée")
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err })
    }
};

exports.login = async function (req, res) {
    let utilisateur = req.body;
    try {
        db = await MongoClient.connect(url);
        let dbo = db.db("taches");
        let utilisateurs = await dbo.collection("utilisateurs").find({ login: utilisateur.login, password: utilisateur.password }).toArray();
        if (utilisateurs.length > 0) {
            req.session.user = utilisateur.login;
            res.status(200).end();
        } else {
            res.status(401).json({ message: "Unauthorized" });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err })
    }
};


exports.logout = async function (req, res) {
    if (req.session)
        await req.session.destroy();
    res.status(200).end();
};

exports.isConnected = async function (req, res) {
    res.status(200).end();
};
