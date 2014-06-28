/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 * @docs		:: http://sailsjs.org/#!documentation/models
 */

var bcrypt = require('bcrypt');
module.exports = {

  attributes: {
    /*username: {
      type: 'string',
      required: true,
      unique: true
    },
    password: {
      type: 'string',
      required: true
    },
    email: {
      type: 'string',
      required: true
    }, */

    username: 'string',
    password: 'string',
    email: 'string',
    role: 'integer',
    introduce: 'text',
    //-----------------
    // instance methods
    //-----------------
    toJSON: function() {
      // this gives you an object with the current values
      var obj = this.toObject();
      // Remove the password object value
      delete obj.password;
      // return the new object without password
      return obj;
    }
  },


  beforeCreate: function(user, cb) {
    console.log(' user.password = hash ', user);
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) {
          console.log(err);
          cb(err);
        }else {
          console.log(' user.password = hash ', user.password = hash);
          user.password = hash;
          cb(null, user);
        }
      });
    });
  }

};
