;(function(self) {
  var repl = require('repl')
  var os = require('os')
  var empty = '(' + os.EOL + ')'

  var sources = []
  var loop = function* (){
    while (true) {
      if (sources.length) {
        var next = sources.shift()
        try {
          next.callback(null, eval(next.command))
        } catch (e) {
          next.callback(e)
        }
      }
      yield null
    }
  }()

  repl.start({
    input: process.stdin,
    output: process.stdout,
    eval: function(cmd, context, filename, callback) {
      if (cmd === empty) return callback()
      sources.push({command: cmd, callback: callback})
      loop.next()
    }
  })
})(this);
