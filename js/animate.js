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


    
    $('ul > li').hover(function () {
        $(this).addClass('List-Transition');
        $(this).toggleClass('List-Push');    
    });
    
    $('.Portfolio-Container > .Item-Contain > .Item').hover(function() {
        console.log('Hovered');
        $(this).children(".Hover").toggleClass('show');    
    });
    
    /*var portImgHeight = $('.Portfolio-Container > .Item-Contain > .Item > img').height();
    
    $('.Portfolio-Container > .Item-Contain > .Item').height(portImgHeight);*/
    
    
    $('ul > li:nth-child(1)').click(function() {
        scrollToAnchor('about');
    });
    
    $('ul > li:nth-child(2)').click(function() {
        scrollToAnchor('timeline');
    });
    
    $('ul > li:nth-child(3)').click(function() {
        scrollToAnchor('portfolio');
    });

    
    
});
/***************************
ON DOC READY ~ END
***************************/

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    
    $('.Debug > span > span').replaceWith('<span>' + scroll + '</span>');
});

$(document).keydown(function(e) {
    switch(e.which) {
        
        //UP EVENT
        case 38:
            var scrollvalue = $(window).scrollTop();
            var FromTop_Landing = $('.Landing-Container').height();
            var FromTop_About = FromTop_Landing + $('.About-Container').height();
            var FromTop_Timeline = FromTop_About + $('.Roadmap-Container').height();
            var FromTop_Port = 0;
            
            //Within Landing/About Sections
            if(scrollvalue <= FromTop_Landing){
                scrollToAnchor('top');
            }else{
                //Within About Section
                if(scrollvalue <= FromTop_About){
                    scrollToAnchor('about');
                }else{
                    //Within Timeline Section
                    if(scrollvalue <= FromTop_Timeline){
                    scrollToAnchor('timeline');
                    }else{
                        //TODO: Any extra sections
                    }     
                }
            }
            
        break;

        //DOWN EVENT
        case 40:
            var scrollvalue = $(window).scrollTop();
            var FromTop_Landing = $('.Landing-Container').height();
            var FromTop_About = FromTop_Landing + $('.About-Container').height();
            var FromTop_Timeline = FromTop_About + $('.Roadmap-Container').height();
            var FromTop_Port = 0;
            
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
                        //TODO: Any extra sections
                    }
                }    
            }
            
        break;
            
        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
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