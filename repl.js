;(function() { // __var to avoid clashes
  var __sources = []
  var __loop = function* (){
    while (true) {
      if (__sources.length) {
        var __next = __sources.shift()
        try {
          __next.callback(null, eval(__next.command))
        } catch (e) {
          __next.callback(e)
        }
      }
      yield null
    }
  }()

  ;(function () {
    var repl = require('repl')
    var os = require('os')
    var empty = '(' + os.EOL + ')'

    repl.start({
      input: process.stdin,
      output: process.stdout,
      eval: function(cmd, context, filename, callback) {
        if (cmd === empty) return callback()
        __sources.push({command: cmd, callback: callback})
        __loop.next()
      }
    })
  })()
})();
