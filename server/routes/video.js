const express = require( 'express' );
const router = express.Router();

// Mock data - replace with actual YouTube video IDs
const videoGallery = [
    { id: 'video1', title: 'Traditional Thanksgiving cornucopia', videoId: 'MUjLW23IjIE' },
    { id: 'video2', title: 'How to Create a Floral Centerpiece!', videoId: 'Dx5a40f8nnM' },
    { id: 'video3', title: 'Fall Flower Vase', videoId: 'U4RovBbE_n4' },
    { id: 'video3', title: 'How to Make a Bow', videoId: 'c933s_ECRKI' },
    { id: 'video3', title: 'New Year\'s Vase', videoId: 'na1sG1Y_wUc' },
    { id: 'video3', title: 'Flower Mug Arrangement', videoId: 'w-YLsyypeZc' },
    { id: 'video3', title: 'Mini Christmas Tree', videoId: 'R4HUt4tvXEg' },
    { id: 'video3', title: 'Festive centerpiece in a glass cube', videoId: 'QeQzRz9o-CQ' },

    
];

router.get( '/', ( req, res ) => {
    res.render( 'video-gallery', { videos: videoGallery } );
} );

module.exports = router;