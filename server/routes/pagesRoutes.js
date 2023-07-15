/**
 * roots - Your webapp
 * © 2023 Brian Gormanly
 *
 */

var express = require( 'express' );
var router = express.Router( );



router.route( '/' )
    .get( ( req, res ) => {
        res.render( 'index' );
    }

    );
router.route( '/about' )
    .get( ( req, res ) => {
        res.render( 'about' );
    }
    );

router.route( '/privacy' )
    .get( ( req, res ) => {
        res.render( './website/privacy' );
    }
    );

router.route( '/tos' )
    .get( ( req, res ) => {
        res.render( './website/terms' );
    }   
    );

router.route( '/codebot' )
    .get( ( req, res ) => {

        // will need to be re-evaluated when generic version of products page is implemented.
        // (and moved to a controller)
        //let product = await productService.getActiveProductWithProductImagesById(1);
        //console.log(product);

        res.render( 'codebot' );
    }
    );



module.exports = router;