/**
 * UserController
 *
 * @module      :: Controller
 * @description	:: A set of functions called `actions`.
 *
 *                 Actions contain code telling Sails how to respond to a certain type of request.
 *                 (i.e. do stuff, then send some JSON, show an HTML page, or redirect to another URL)
 *
 *                 You can configure the blueprint URLs which trigger these actions (`config/controllers.js`)
 *                 and/or override them with custom routes (`config/routes.js`)
 *
 *                 NOTE: The code you write here supports both HTTP and Socket.io automatically.


 *https://github.com/johntom/crm-MEANSMixup
 *https://github.com/mz121star/NJBlog/tree/master/routes
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
var bcrypt = require('bcrypt');

module.exports = {

  /**
   * Action blueprints:
   *    `/user/index`
  */
  login: function(req, res) {
    User.findOne({email: req.email}).done(function (err, user) {
      if (err) {
        console.log(err);
        return res.send({result: null, message: err, status: false});
      }
      else {
        bcrypt.compare(req.password, user.password, function(err, isMatch) {
          if (err) return res.send({result: null, message: err, status: false});
          cb(null, isMatch);
        });
      }
    });
    /* */
  },

  /**
   * Action blueprints:
   *    `/user/logout`
  */
  logout: function (req, res) {
    req.session.destroy();
    return res.json({});
  },

  /**
   * Action blueprints:
   *    `/user/index`
   *    `/user`
   */
   index: function (req, res) {

    // Send a JSON response
    return res.json({
        user: req.params.all()
    });
  },

  /**
   * Action blueprints:
   *    `/user/create`
   */
  create: function (req, res, next) {
    // Create a User with the params sent from ang dont need it

    User.create(req.params.all(), function userCreated(err, user) {
      if (err) {
        console.log(err);
        // req.session.flash = {
        //   err: err
        // };
        //
        return res.send({result: null, message: err, status: false});
      }


      if (!user) {
        console.error('unable to create user');
        return res.send({result: null, message: 'unknown failure', status: false});
      }
      // Let other subscribed sockets know that the user was created.
      console.log('created user ', user);
      return res.send({result: user, message: 'create user success', status: true});
    });
  },


  /**
   * Action blueprints:
   *    `/user/show`
   */
   show: function (req, res,next) {
    User.findOne(req.param('id'),  function(err, user) {
    // User.findOne({ usename: 'osmen' }, function(err, user) {
      return res.json({
        user: user
      });
    });
    //  User.findOne(req.param('id'), function foundUser(err, user) {
    //   if (err) return next(err);
    //   if (!user) return next();
    //   res.view({
    //     user: user
    //   });
    // });
  },


  /**
   * Action blueprints:
   *    `/user/edit`
   */
   edit: function (req, res) {

    // Send a JSON response
    return res.json({
      hello: 'world'
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to UserController)
   */
  _config: {}


};
