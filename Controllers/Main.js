console.log('Main.js');

var Observable = require("FuseJS/Observable");

var swipeActive = Observable(false);

var current_page = 'offers';

var goToOfferFromMain = function()
{
    swipeActive.value = false;
    router.push('main', {}, 'offers', {}, 'offer', {offer:'offer object goes here'});
}

var goToOfferFromSearch = function()
{
    swipeActive.value = false;
    router.push('main', {}, 'search', {}, 'offer', {offer:'offer object goes here'});
}

var goBack = function()
{
    swipeActive.value = false;
    router.goBack();
}

var goToOffers = function()
{
    if(current_page != 'offers'){
        router.goBack();
        router.goto('main', {}, 'offers', {});
        current_page = 'offers';
    }
}

var goToSearch = function()
{
    if(current_page != 'search'){
        router.goBack();
        router.goto('main', {}, 'search', {});
        current_page = 'search';
    }
}

var goDepper = function()
{
    router.push('main', {}, 'deeper');
}



module.exports = {
    goToOfferFromMain   : goToOfferFromMain,
    goToOfferFromSearch : goToOfferFromSearch,
    goBack              : goBack,
    goToOffers          : goToOffers,
    goToSearch          : goToSearch,
    goDepper:goDepper,
    swipeActive:swipeActive
}
