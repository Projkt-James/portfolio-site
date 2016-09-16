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
    
    $('ul > li:nth-child(1)').click(function () {
        scrollToAnchor('about');
    });
    
    $('ul > li:nth-child(2)').click(function () {
        scrollToAnchor('timeline');
    });
    
    $('ul > li:nth-child(3)').click(function () {
        scrollToAnchor('portfolio');
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