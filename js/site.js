$(document).ready(function(){
    $('.ig-link').hover(function (){
        ToggleTadaAnimation($('.ig-link'));
    })

    $('.li-link').hover(function (){
        ToggleTadaAnimation($('.li-link'));
    })

    $('.fb-link').hover(function (){
        ToggleTadaAnimation($('.fb-link'));
    })

    $('.sc-link').hover(function (){
        ToggleTadaAnimation($('.sc-link'));
    })

    $('.photo').hover(function (){
        ToggleBounceAnimation($('.photo'));
    })
});

function ToggleTadaAnimation(element)
{
    element.toggleClass('animated');
    element.toggleClass('tada');
}

function ToggleBounceAnimation(element)
{
    element.toggleClass('animated');
    element.toggleClass('hinge');
}
