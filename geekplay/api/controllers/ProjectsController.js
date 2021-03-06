/**
 * ProjectsController
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
 *
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */
var lib = require('../../lib/common.js');
module.exports = {
    
  
  /**
   * Action blueprints:
   *    `/projects/discover`
   */
   discover: function (req, res) {
    
    // Send a JSON response

  // console.log(lib.email);
    return res.json({data:[
          { name: '55Igor', address: '=123 tyhrtWe' },
          { name: '55lucas', address: '=nier yo ko ' },
         { name: '55osmen', address: '=Somewhere' },
          { name: 'geek', address: '=34 sdg ggdg ydt' }]
    });
  },


  /**
   * Action blueprints:
   *    `/projects/detail`
   */
   detail: function (req, res) {
    // console.log('detail');
    // Send a JSON response
    return res.json({
      hello: 'detail1'
    });
  },




  /**
   * Overrides for the settings in `config/controllers.js`
   * (specific to ProjectsController)
   */
  _config: {}

  
};
