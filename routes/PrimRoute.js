const express = require('express');
const PrimRoute = express.Router();

// declaring a route
PrimRoute.get('/endpoint', async(req,res,next) => {
    try {
        const getRoute = await 'what data are you looking for'
        res.send(getRoute);
    } catch (error) {
        console.log(error);
    }
});

// exporting this route to use in server.js
module.exports = {
    PrimRoute
}