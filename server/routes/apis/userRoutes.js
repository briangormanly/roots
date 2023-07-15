/**
 * roots - Your webapp
 * © 2023 Brian Gormanly
 *
 */

const express = require( 'express' );
const router = express.Router( );

// import controllers
const userController = require( '../../controller/apis/userController' );

// Get user data by email address
router.route( '/email/:email' )
    .get( ( req, res ) => {
        userController.getUserByEmail( req, res );
    }
    );







module.exports = router;

