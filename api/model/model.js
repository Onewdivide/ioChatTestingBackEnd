exports.test = function(agenda_id,callback){
    var result = {
        text : 'Congratz! :)'
    }
    callback(null,agenda_id);
}

exports.voteAll = function(callback){
    callback(null,"queryNewAll");
}