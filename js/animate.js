/*
*
*
*   NAME: jQuery Animation
*   AUTHOR: James Hanford
*   CREATED: 20/08/2016
*   VERSION: 0.0.1
*
*/

/***************************
 ON DOC READY ~ START
***************************/
$(document).ready(function () {

    /*var Item_Height = .height();
    console.log('Item Height: ' + Item_Height);
    
    $('.Portfolio-Container > .Item-Contain > .Item > .hover').height(Item_Height);*/
    
    //Hamburger & Nav Transition
    $('.TopBar-Left > .Icon-Contain > .Hamburger').click(function() {
        $(this).toggleClass('Hamburger-Active');

        $('.Nav-Container').addClass('Nav-Transition');
        $('.Nav-Container').toggleClass('translate-x-0');
    });

    //
    $('ul > li').hover(function () {
        $(this).addClass('List-Transition');
        $(this).toggleClass('List-Push');    
    });
    
    // Portfolio hover 
    $('.Portfolio-Container > .Item-Contain > .Item').hover(function() {
        $(this).children(".Hover").toggleClass('show');    
    });
    
    /* Nav scroll to section */
    $('ul > li:nth-child(1)').click(function() {
        scrollToAnchor('about');
    });
    
    $('ul > li:nth-child(2)').click(function() {
        scrollToAnchor('timeline');
    });
    
    $('ul > li:nth-child(3)').click(function() {
        scrollToAnchor('portfolio');
    });

    $('ul > li:nth-child(4)').click(function() {
        scrollToAnchor('footer');
    });  

});
/***************************
 ON DOC READY ~ END
***************************/

/***************************
 ON WINDOW SCROLL ~ START
***************************/
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    $('.Debug > span > span').replaceWith('<span>' + scroll + '</span>');
});
/***************************
 ON WINDOW SCROLL ~ END
***************************/

/***************************
 ON KEY DOWN ~ START
***************************/
$(document).keydown(function(e) {
    var scrollvalue = $(window).scrollTop();
    var FromTop_Landing = $('.Landing-Container').height();
    var FromTop_About = FromTop_Landing + $('.About-Container').height();
    var FromTop_Timeline = FromTop_About + $('.Roadmap-Container').height();
    var FromTop_Port = FromTop_Timeline + $('.Portfolio-Container').height();

    switch(e.which) {
        
        //ARROW UP EVENT
        case 38:
            //Within Landing/About Sections
            if(scrollvalue <= FromTop_Landing){
                scrollToAnchor('top');
            }else{
                //Scroll Up to About from Timeline
                if(scrollvalue <= FromTop_About){
                    scrollToAnchor('about');
                }else{
                    //Scroll Up to Timeline from Port
                    if(scrollvalue <= FromTop_Timeline){
                        scrollToAnchor('timeline');
                    }else{
                        //Scroll Up to Port from Footer
                        if(scrollvalue <= FromTop_Port){
                            scrollToAnchor('portfolio');
                        }
                    }     
                }
            }
            
        break;

        //ARROW DOWN EVENT
        case 40:

            //Within Landing Section
            if(scrollvalue < FromTop_Landing){
                scrollToAnchor('about');
            }else{
                //Within About Section
                if(scrollvalue < FromTop_About){
                    scrollToAnchor('timeline');
                }else{
                    //Within Timeline Section
                    if(scrollvalue < FromTop_Timeline){
                        scrollToAnchor('portfolio');
                    }else{
                        if(scrollvalue < FromTop_Port){
                        scrollToAnchor('footer');
                        }   
                    }
                }    
            }
            
        break;
            
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});
/***************************
 ON KEY DOWN ~ END
***************************/

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