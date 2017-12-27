// Load required packages
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Define our user schema
var UserSchema = new mongoose.Schema({
    //username: { type: String, unique: true, required: true },
    email_address:{type:String,unique:true,required:true},
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    contact_number:{type:Number,required:true},
    gender:{type:String,required:true},
    address:{type:String},
    password: {type: String,required: true },
    created: {type: Date, default: Date.now },
    updated: {type: Date, default: Date.now }
});

// Execute before each user.save() call
UserSchema.pre('save', function(callback) {
  var user = this;
 console.log("User :");
  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});



UserSchema.methods.verifyPassword = function(password, cb) {
  console.log("iiii,",password)

  console.log("--------",this.password)
  
  bcrypt.genSalt(5, function(err, salt) {
    if (err) return callback(err);
    console.log("iiii,",password);
    bcrypt.hash(password, salt, null, function(err, hash) {
      if (err) return callback(err);
      
      console.log("Crypt Password",hash);
      
    });
  });


  bcrypt.compare(password, this.password, function(err, isMatch) {
     console.log("iiii===",isMatch)
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

// Export the Mongoose model
module.exports = mongoose.model('User', UserSchema);