document.addEventListener( 'DOMContentLoaded', () => {
    const slider = document.getElementById( 'sb-slider' );
    const slides = slider.querySelectorAll( 'li' );
    const nextButton = document.getElementById( 'next' );
    const prevButton = document.getElementById( 'prev' );
    let currentIndex = 0;
    let counter = 0;
    let slideInterval;

    const transitions = [ 'fade', 'backSlide', 'goDown', 'scaleUp' ];

    const showSlide = ( index ) => {
        let effect = transitions[counter];
        console.log( `${effect}` );
        slides.forEach( ( slide, i ) => {
            slide.className = i === index ? `current ${effect}` : '';
        } );
        counter++;
        if( counter > 3 ) {
            counter = 0;
        }
       
    };

    const nextSlide = () => {
        currentIndex = ( currentIndex + 1 ) % slides.length;
        showSlide( currentIndex );
    };

    const prevSlide = () => {
        currentIndex = ( currentIndex - 1 + slides.length ) % slides.length;
        showSlide( currentIndex );
    };

    const startSlideshow = () => {
        slideInterval = setInterval( nextSlide, 3500 );
    };

    const stopSlideshow = () => {
        clearInterval( slideInterval );
    };

    nextButton.addEventListener( 'click', ( e ) => {
        e.preventDefault();
        stopSlideshow();
        nextSlide();
        startSlideshow();
    } );

    prevButton.addEventListener( 'click', ( e ) => {
        e.preventDefault();
        stopSlideshow();
        prevSlide();
        startSlideshow();
    } );

    showSlide( currentIndex );
    startSlideshow();
} );