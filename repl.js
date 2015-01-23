
;(function() {
  var repl = require('repl')

  repl.start({
    input: process.stdin,
    output: process.stdout,
    eval: function(cmd, context, filename, callback) {
      var result = eval(cmd)
      callback(null, result)
    }
  })
})();
