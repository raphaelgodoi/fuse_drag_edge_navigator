console.log('Main.js');

var current_page = 'offers';

var goToOfferFromMain = function()
{
    router.push('main', {}, 'offers', {}, 'offer', {offer:'offer object goes here'});
}

var goToOfferFromSearch = function()
{
    router.push('main', {}, 'search', {}, 'offer', {offer:'offer object goes here'});
}

var goBack = function()
{
    router.goBack();
}

var goToOffers = function()
{
    if(current_page != 'offers'){
        router.goBack();
        router.goto('main', {}, 'offers');
        current_page = 'offers';
    }
}

var goToSearch = function()
{
    if(current_page != 'search'){
        router.goBack();
        router.goto('main', {}, 'search');
        current_page = 'search';
    }
}

module.exports = {
    goToOfferFromMain   : goToOfferFromMain,
    goToOfferFromSearch : goToOfferFromSearch,
    goBack              : goBack,
    goToOffers          : goToOffers,
    goToSearch          : goToSearch,
    teste:'Testando'
}
