
;(function() {
  var repl = require('repl')
  var os = require('os')
  var empty = '(' + os.EOL + ')'
  repl.start({
    input: process.stdin,
    output: process.stdout,
    eval: function(cmd, context, filename, callback) {
      if (cmd === empty) return callback()
      var result = eval(cmd)
      callback(null, result)
    }
  })
})();
