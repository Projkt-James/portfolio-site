let about_contents = "My name is James Hanford, I'm a 20 year old Computer Science undergraduate currently living in Brisbane. From an early age I have had a passion for everything technical, from computer programming to impress friends in school, to staying up late to watch livestreams of rocket launches. I find great pride within the code and tangible experiences I build for people, there is nothing more satisfying than watching an end user enjoy something that I have built. I aim to push boundaries in everyday life and enjoy life's little quirks inbetween.";


$(document).ready(function () {
    
    $('.About-Centered p').append(about_contents);
    
    $('.About-Centered p').click(function () {
        console.log("Clicked");
    });
});