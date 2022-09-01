const _ = require("lodash");
    const ver = _.VERSION;
    console.log(ver); 

    function hithere(array){
        return _.last(array) + _.head(array);
    }
    module.exports = hithere;