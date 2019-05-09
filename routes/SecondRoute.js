const express = require('express');
const SecondRoute = express.Router();

// declaring a get route
SecondRoute.get('/endpoint', async(req,res,next) => {
    try {
        const getRoute = await 'what data are you looking for'
        res.send(getRoute);
    } catch (error) {
        console.log(error);
    }
});

module.exports = {
    SecondRoute
}