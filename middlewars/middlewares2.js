const express = require('express');
const app = express();
app.use(express.json());

function userMiddlewares(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "kuldeep" || password !== "pass") {
        res.status(403).json({"msg": "enter valid username and password"});
        return;
    } else {
        next();
    }
}

function kidneyidMiddlewares(req, res, next) {
    const kidneyid = req.query.kidneyid;

    if (kidneyid != 1 && kidneyid != 2) {
        res.status(403).json({"msg": "incorrect input"});
        return;
    } else {
        next();
    }
}

app.get('/health-checkup', userMiddlewares, kidneyidMiddlewares, function (req, res) {
    res.send("You are healthy");
});

app.get('/kidney-checkup', userMiddlewares, kidneyidMiddlewares, function (req, res) {
    res.send("Your kidney is healthy");
});

app.get('/heart-checkup', userMiddlewares, function (req, res) {
    res.send("Your heart is healthy");
});

app.listen(3000);
