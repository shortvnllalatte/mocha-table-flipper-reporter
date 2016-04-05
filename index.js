var Base = require('./node_modules/mocha/lib/reporters/base');
var inherits = require('./node_modules/mocha/lib/utils').inherits;


module.exports = TableFlipper;

function TableFlipper(runner) {

  Base.call(this, runner);

  var self = this;
  var failures = 0;

  runner.on('start', function() {
    console.log('\n');
  });

  runner.on('fail', function(test, err){
    console.log(Base.color('error title', test.fullTitle()));
    console.log(Base.color('error message', 'Error: ' + err.message));
    console.log(Base.color('bright fail', '(╯°□°）╯︵ ┻━┻'));
    console.log('\n');
    failures++;
  });

  runner.on('end', function() {
    if(failures === 0) {
      console.log(Base.color('bright pass', 'All tests have passed.'));
      console.log(Base.color('bright pass', '(☞ﾟ∀ﾟ)☞ :･ﾟ✧･ﾟ ┬─┬'))
    }
    console.log('\n');
    self.epilogue();
  });
}

/**
 * Inherit from `Base.prototype`.
 */
inherits(TableFlipper, Base);
