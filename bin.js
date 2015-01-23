#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var stripBOM = require('strip-bom')

var replCode = fs.readFileSync(path.join(__dirname, 'repl.js')).toString()
var file = process.argv[2]
if (!file) {
  console.error('Usage: node-repl <filename>')
  process.exit(1)
}

file = path.resolve(file)

var original = require.extensions['.js']
require.extensions['.js'] = function(module, filename) {
  if (filename !== file) return original(module, filename)
  var content = fs.readFileSync(filename).toString()
  module._compile(stripBOM(content + replCode), filename)
}

require(file)
