const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DomainSchema = new Schema({
    domain_name:{
        type: String,
        
    },
    domain_company:{
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
    host_company: {
        type: String

    },
    host_created:{
        type: String,
       
    },
    host_expiring:{
        type:String,
       
    },
    contact_address: {
        type: String
    },
    phone_number: {
        type: Number
    },
    membership_id: {
        type: mongoose.Schema.Types.ObjectId,
    },
    backup: {
        type: Boolean
    },
    ssl: {
        type: Boolean
    },
    security_upgrade: {
        type: Boolean
    },
    theme_change: {
        type: Boolean
    },
    seo: {
        type: Boolean
    },
    digital_marketing: {
        type: Boolean
    },
    package_type: {
        type: String
    },
    package_price: {
        type: String
    },
    subdomains: {
        type: String
    },
    email_subscribed: {
        type: String
    },
    storage_space: {
        type: String
    },
    bandwidth: {
        type: String
    },

});

module.exports = Domain = mongoose.model('domainModel', DomainSchema);