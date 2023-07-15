/**
 * roots - Your webapp
 * © 2023 Brian Gormanly
 *
 */

var express = require( 'express' );
var router = express.Router( );
 
// controllers
const profileController = require( '../controller/profileController' );

/**
 * Show user profile
 */
router.route( '/user/:userId' )
    .get( async ( req, res ) => {
        profileController.getProfile( req, res );
    }
    );

/**
 * User profile management page
 */
router.route( '/manageProfile' )
    .get( ( req, res ) => {
        profileController.manageProfile( req, res );
    }
    );

module.exports = router;