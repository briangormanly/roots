/**
 * roots - Your webapp
 * © 2023 Brian Gormanly
 *
 */

const express = require( 'express' );
const router = express.Router( );

// import controllers
const tagController = require( '../../controller/apis/tagController' );

// tags /api/v1/auth/tags
router.route( '/' )
    .get( async ( req, res ) => {
        tagController.getAllTags( req, res );
    } )    
    .post( ( req, res ) => { 
        tagController.saveTag( req, res, false );
    }
    );

router.route( '/:id' )
    .get( async ( req, res ) => {
        tagController.getTagById( req, res );
    } )
    .delete( async ( req, res ) => {
        tagController.deleteTagById( req, res );
    }
    ); 

// api/v1/auth/tags/tagged
router.route( '/tagged' )
    .post( async ( req, res ) => {
        tagController.tagged( req, res, false );
    }
    );

router.route( '/tagged/:entityType/:entityId' )
    .get( async ( req, res ) => {
        tagController.getTaggedEntity( req, res );
    }
    );

router.route( '/tagged/:tagName/:entityType/:entityId' )
    .delete( async ( req, res ) => {
        tagController.deleteTagged( req, res );
    }
    );     

module.exports = router;