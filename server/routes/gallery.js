const express = require( 'express' );
const router = express.Router();

// Mock data - replace with real data fetching logic
const galleryImages = [
    { src: '/assets/img/gallery/0923/IMG_6778.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6721.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6723.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6724.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6726.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6727.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6728.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6731.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6733.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6734.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6735.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6737.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6738.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6739.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6741.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6743.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6744.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6745.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6750.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6752.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6755.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6757.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6758.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6760.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6761.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6762.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6767.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6770.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6779.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6780.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6783.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6785.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6788.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6792.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0923/IMG_6799.jpg', alt: 'Fall Vase Arrangement Class' },

    { src: '/assets/img/gallery/0524/IMG_8059.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8060.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8061.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8062.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8064.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8066.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8067.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8068.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8069.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8070.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8071.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8077.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8080.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8082.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8083.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8084.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8087.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8089.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8091.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8091.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8101.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8102.jpg', alt: 'Fall Vase Arrangement Class' },
    { src: '/assets/img/gallery/0524/IMG_8105.jpg', alt: 'Fall Vase Arrangement Class' }
];

router.get( '/', ( req, res ) => {
    res.render( 'gallery', { images: galleryImages } );
} );

module.exports = router;