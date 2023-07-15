/**
 * roots - Your webapp
 * © 2023 Brian Gormanly
 *
 */

var express = require( 'express' );
var router = express.Router();

// import controllers
const userController = require( '../controller/apis/userController' );


// verify email existence
router.route( '/verifyEmail/:email' )
    .get( function( req, res ) {
        userController.verifyEmail( req, res );

    }
    );

// verify username existence
router.route( '/verifyUsername/:username' )
    .get( function( req, res ) {
        userController.verifyUsername( req, res );

    }
    );


module.exports = router;
