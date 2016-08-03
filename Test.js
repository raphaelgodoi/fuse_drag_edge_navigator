var Observable = require("FuseJS/Observable");
url = Observable("http://www.google.com");
function uc(){
    console.log(url.value);
    console.log('porra');
}
module.exports = { uc: uc, url: url };
