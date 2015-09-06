'use strict';

module.exports = require('path').join(__dirname, 'lib');

/*
  Maybe scan can use a nested callback approach?
  Make it so the user has to define how crave-it scans the directory?
  Or pass in regex or paths?

  Reason being, maybe I don't need to store require

  // Some file using craveit
  var craveit = require('crave-it');

  craveit.add(name, {
    location: __dirname, // Do I need this if I am using their require?
    object: require('./some/path') // uses their require
  });

  What if crave-it just takes the place of require?
  Injects what seems like globals?
    - Benefits:
      - Can use anything anytime
    - Drawbacks:
      - How do you know what you need?
      - too many object "globals" everywhere
      - eslint will -cry- die
      - bad idea
*/
