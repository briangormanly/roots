/**
 * roots - Your webapp
 * © 2023 Brian Gormanly
 *
 */

var express = require( 'express' );
var router = express.Router( );


// setup json body parser
const bodyParser = require( 'body-parser' );
router.use( bodyParser.urlencoded( {
    extended: true
} ) );
router.use( bodyParser.json() );



// controllers
const dashboardController = require( '../controller/dashboardController' );


/**
 * Pre Route
 * Check that the user is logged in (required!)
 */
router.use( function ( req, res, next ) {
    if( !req.session.authUser ) {
        if( req.query.redirect ) {
            res.locals.redirect = req.query.redirect;
        }
        res.render( 'user-signup' );
    }
    else {
        next( );
    }
     
} );

/**
 * Show main dashboard route
 */
router.route( '/' )
    .get( ( req, res ) => {
        dashboardController.getDashboard( req, res );
    }
    );






module.exports = router;