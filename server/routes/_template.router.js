const express = require('express');
const router = express.Router();

let messages = [];

router.get( '/', ( req, res )=>{
    console.log( 'GET')
    res.send( 'meow' );
})

router.post( '/', ( req, res )=>{
    console.log( 'POST:', req.body, req.query );
    res.send( 'woof' );
})

router.put( '/', ( req, res )=>{
    console.log( 'PUT:', req.body, req.query );
    res.send( 'ribbet' );
})

router.delete( '/', ( req, res )=>{
    console.log( 'DELETE:', req.body, req.query );
    res.send( 'whinney' );
})

module.exports = router;
