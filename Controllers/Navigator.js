console.log('Main.js');

var Observable = require("FuseJS/Observable");

var exports = module.exports = {};

var current_page = 'offers';

exports.goToOfferFromMain = function()
{
    router.push('main', {}, 'offers', {}, 'offer', {offer:'offer object goes here'});
}

exports.goToOfferFromSearch = function()
{
    router.push('main', {}, 'search', {}, 'offer', {offer:'offer object goes here'});
}

exports.goBack = function()
{
    router.goBack();
}

exports.goToOffers = function()
{
    if(current_page != 'offers'){
        router.goBack();
        router.goto('main', {}, 'offers', {});
        current_page = 'offers';
    }
}

exports.goToSearch = function()
{
    if(current_page != 'search'){
        router.goBack();
        router.goto('main', {}, 'search', {});
        current_page = 'search';
    }
}

exports.goDeeper = function()
{
    router.push('main', {}, 'offers', {}, 'deeper', {});
}
