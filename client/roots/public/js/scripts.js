/**
 * roots - Your webapp
 * © 2023-2024 Brian Gormanly
 *
 */

/*
 * Menu management for roots 
 */

window.addEventListener( "load", () => {
    
} );


let sideBarStatus = true;
function toggleSidebar() {
    if ( !sideBarStatus ) {
        document.getElementById( "rootsSideBar" ).style.width = "250px";
        document.body.style.marginLeft = "250px";
    }
    else {
        document.getElementById( "rootsSideBar" ).style.width = "85px";
        if( window.innerWidth > 992 ) {
            document.body.style.marginLeft = "85px";
        }
    }
    sideBarStatus = !sideBarStatus;
}

// add events for toggle sidebar
if( document.getElementById( "rootsSideBar" ) ) {
    toggleSidebar();
    document.getElementById( "rootsSideBar" ).addEventListener( "mouseover", toggleSidebar );
    document.getElementById( "rootsSideBar" ).addEventListener( "mouseout", toggleSidebar );
}


