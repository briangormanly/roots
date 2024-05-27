/**
 * roots - Your webapp
 * © 2023-2024 Brian Gormanly
 *
 */

// dependencies


// services
const userService = require( '../service/userService' );

exports.getProfile = async function( req, res ) {
    // get the user data
    let userId = req.params.userId.toString();
    let user = null;
    if( userId ) {
        user = await userService.getActiveUserById( userId );

        if( user ) {
            res.render( 'profile/user', {user: user} );
        }
        else {
            res.render( 'index' );
        }

        
    }
    else {
        res.render( 'index' );
    }

    //console.log("returned user: " + JSON.stringify(user));
    
    
};



exports.manageProfile = async function ( req, res ) {

    if( req.session.authUser ) {
        
        const authUser = await userService.setUserSession( req.session.authUser.email );
        req.session.authUser = null;
        req.session.authUser = authUser;
        res.locals.authUser = req.session.authUser;

        const messageType = req.session.messageType;
        const messageTitle = req.session.messageTitle;
        const messageBody = req.session.messageBody;

        if( req.session.messageType ) {
            delete req.session.messageType;
        }
        if( req.session.messageTitle ) {
            delete req.session.messageTitle;
        }
        if( req.session.messageBody ) {
            delete req.session.messageBody;
        }
        
        res.render( './profile/manage', { authUser: authUser, user: authUser, messageType: messageType, messageTitle: messageTitle, messageBody: messageBody } );
        
        
    }
    else {
        res.redirect( 303, '/signIn' );
    }
};