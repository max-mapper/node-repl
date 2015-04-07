# node-repl

an interactive repl for debugging node programs.

run a node program but also attach a repl to the same context that your code runs in so you can inspect + mess with stuff as your program is running

available as a command-line tool

[![NPM](https://nodei.co/npm/node-repl.png)](https://nodei.co/npm/node-repl/)

currently this only works on node >=0.12 and iojs as it uses a generator to make the eval loop preserve scope.

## installation

```js
npm install node-repl -g
```

## CLI usage

```bash
$ node-repl
Usage: node-repl <filename>

$ node-repl your-program.js
>
```

## example

suppose we have a program called `hello.js` that has these contents:

```js
var pizza = 1
```

if you run `node-repl hello.js` you will get a repl, just like when you run `node`.

The difference is that this repl is running *in the same context as your program*.

```
$ node-repl hello.js
> 1 + 1 // we are in a node repl
2
> pizza // we can access variables in our program
1
>
```
