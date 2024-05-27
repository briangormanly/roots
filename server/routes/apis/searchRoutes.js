/**
 * roots - Your webapp
 * © 2023-2024 Brian Gormanly
 *
 */


var express = require( 'express' );
var router = express.Router( );

const searchController = require( '../../controller/apis/searchController' ); 
const { validate } = require( '../middleware/inputValidation' );
const { z } = require( 'zod' );

// api/v1/auth/search
router.route( "/" )
    .get( async ( req, res ) => {
        searchController.getSearchResult( req, res );
    } );

module.exports = router;
