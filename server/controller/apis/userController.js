/**
 * roots - Your webapp
 * © 2023 Brian Gormanly
 *
 */

// import services
const userService = require( '../../service/userService' );

// import models
const User = require( '../../model/user' );


exports.getUserByEmail = async function( req, res ) {
    res.setHeader( 'Content-Type', 'text/html' );
    var email = req.params.email;

    userService.getUserByEmail( email ).then( ( user ) => {

        res.setHeader( 'Content-Type', 'application/json' );
        res.send( user );
    } );
};

exports.verifyUsername = async function( req, res ) {
    res.setHeader( 'Content-Type', 'text/html' );
    var username = req.params.username;
    userService.verifyUsername( username ).then( ( valid ) => {

        res.setHeader( 'Content-Type', 'application/json' );
        res.send( valid );
    } );
};

exports.verifyEmail = async function( req, res ) {
    res.setHeader( 'Content-Type', 'text/html' );
    var email = req.params.email;
    userService.verifyEmail( email ).then( ( valid ) => {

        res.setHeader( 'Content-Type', 'application/json' );
        res.send( valid );
    } );
};
