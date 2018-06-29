
const model = require('../model/model')



exports.test = function(req,res){
    model.test(req.params.agenda_id,(error,data) => {
        if(error) throw error;
        global.ioBAckEnd.emit('queryAgain',data);
        res.json(data);
    })
}

exports.voteAll = function(req,res){
    model.voteAll((error,data) =>{
        if(error) throw error;
        global.ioBAckEnd.emit('queryAll',data);
        res.json(data);
    })
}