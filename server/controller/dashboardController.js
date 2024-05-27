/**
 * Agora - Close the loop
 * © 2021-2024 Brian Gormanly
 * BSD 3-Clause License
 * see included LICENSE or https://opensource.org/licenses/BSD-3-Clause 
 */

// dependencies



exports.getDashboard = async function( req, res ) {
    

    if( req.session.messageType ) {
        delete req.session.messageType;
    }
    if( req.session.messageTitle ) {
        delete req.session.messageTitle;
    }
    if( req.session.messageBody ) {
        delete req.session.messageBody;
    }

    res.render( 'dashboard/dashboard' );
   

    
};