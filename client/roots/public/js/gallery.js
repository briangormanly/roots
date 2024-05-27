// public/scripts/gallery.js
document.addEventListener( 'DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll( '.gallery-item img' );
    const lightbox = document.getElementById( 'lightbox' );
    const lightboxImg = document.getElementById( 'lightbox-img' );
    const closeBtn = document.querySelector( '.close' );
    const prevBtn = document.getElementById( 'prev' );
    const nextBtn = document.getElementById( 'next' );

    let currentIndex = 0;

    function showLightbox( index ) {
        lightbox.style.display = 'block';
        lightboxImg.src = galleryItems[index].src;
        currentIndex = index;
    }

    function closeLightbox() {
        lightbox.style.display = 'none';
    }

    function showNextImage() {
        currentIndex = ( currentIndex + 1 ) % galleryItems.length;
        lightboxImg.src = galleryItems[currentIndex].src;
    }

    function showPrevImage() {
        currentIndex = ( currentIndex - 1 + galleryItems.length ) % galleryItems.length;
        lightboxImg.src = galleryItems[currentIndex].src;
    }

    galleryItems.forEach( ( item, index ) => {
        item.addEventListener( 'click', () => showLightbox( index ) );
    } );

    closeBtn.addEventListener( 'click', closeLightbox );
    nextBtn.addEventListener( 'click', showNextImage );
    prevBtn.addEventListener( 'click', showPrevImage );

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener( 'click', ( e ) => {
        if ( e.target === lightbox ) {
            closeLightbox();
        }
    } );

    // Add keyboard navigation
    document.addEventListener( 'keydown', ( e ) => {
        if ( lightbox.style.display === 'block' ) {
            if ( e.key === 'ArrowRight' ) {
                showNextImage();
            }
            else if ( e.key === 'ArrowLeft' ) {
                showPrevImage();
            }
            else if ( e.key === 'Escape' ) {
                closeLightbox();
            }
        }
    } );
} );