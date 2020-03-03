const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DomainSchema = new Schema({
    domain_name:{
        type: String,
        
    },
    domain_created:{
        type: String,
        
    },
    domain_expiring:{
        type:String,
        
    },
    host_name:{
        type: String,
        
    },
    host_created:{
        type: String,
       
    },
    host_expiring:{
        type:String,
       
    }

});

module.exports = Domain = mongoose.model('domainModel', DomainSchema);