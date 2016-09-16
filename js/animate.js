/*
*
*
*   NAME: jQuery Animation
*   AUTHOR: James
*   CREATED: 20/08/2016
*   VERSION: 0.0.1
*
*/

/***************************
ON DOC READY ~ START
***************************/
$(document).ready(function () {
    
    $('.TopBar-Left').click(function () {
        
        $('.Nav-Container').addClass('Nav-Transition');
        $('.Nav-Container').toggleClass('translate-x-0');
    });
    
    $('ul > li').hover(function () {
        $(this).addClass('List-Transition');
        $(this).toggleClass('testing');    
    });
    
    $('ul > li').click(function () {
        scrollToAnchor('1');
    });
    
});


/***************************
FUNCTIONS
***************************/
/*
*
* FUNCTION USED TO SMOOTH SCROLL TO ANCHORS
* ~ Requires anchor ID as variable
*/
function scrollToAnchor(anchorID) {
    var Tag = $("a[name='"+ anchorID +"']");
    $('html,body').animate({scrollTop: Tag.offset().top}, 'slow');
}