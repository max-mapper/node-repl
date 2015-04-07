;(function () { // uppercase namespaces var to avoid clashes
  var NODE_REPL_SOURCES = []
  var NODE_REPL_LOOP = (function * () {
    while (true) {
      if (NODE_REPL_SOURCES.length) {
        var NODE_REPL_NEXT = NODE_REPL_SOURCES.shift()
        try {
          NODE_REPL_NEXT.callback(null, eval(NODE_REPL_NEXT.command))
        } catch (e) {
          NODE_REPL_NEXT.callback(e)
        }
      }
      yield null
    }
  })()

  ;(function () {
    var repl = require('repl')
    var os = require('os')
    var empty = '(' + os.EOL + ')'

    repl.start({
      input: process.stdin,
      output: process.stdout,
      eval: function (cmd, context, filename, callback) {
        if (cmd === empty) return callback()
        NODE_REPL_SOURCES.push({command: cmd, callback: callback})
        NODE_REPL_LOOP.next()
      }
    })
  })()
})()
