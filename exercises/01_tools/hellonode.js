const { last } = require("lodash");
const _ = require("lodash");
    const ver = _.VERSION;
    console.log(ver);
    
    function hithere(array){
        return (head(array)+last(array));
    }
    module.exports = hithere;