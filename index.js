#! /usr/bin/env node

'use strict'

var argv = require('minimist')(process.argv.slice(2))
var exec = require('child_process').execFile
var path = require('path')
var fs = require('fs')
var glob = require('glob')
var mkdirp = require('mkdirp')
var outputDir = './easympeg-output' // default output dir
var outputFormat = argv.f

// if input parameter is not specified, don't proceed further
if (!argv.i) {
  console.log('File selector. Specify it with the -i flag. Example: easympeg -i ok.wav -o wow.mp3')
  process.exit(9)
}

// chance to identify the output dir
if (argv.o) {
  // it is a file
  var extname = path.extname(argv.o)
  if (extname) {
    // it is a file within a dir
    if (path.dirname(argv.o) != '.') {
      outputDir = path.dirname(argv.o)
    }
    outputFormat = extname
  }
  // it is a dir
  else {
    outputDir = argv.o
  }
}

// if output format is not specified, don't proceed further
if (!outputFormat) {
  console.log('Output format missing. Specify it with the -f flag. Example: easympeg -i ok.wav -f mp3')
  process.exit(9)
}

mkdirp.sync(outputDir)

var options = {}

glob(argv.i, options, function (error, files) {

  if (!error) {

    files.forEach(function (file) {
      var args = []
      var inputFormat = path.extname(file)
      var outputFile = path.normalize(outputDir + '/' + path.basename(file, inputFormat) + '.' + outputFormat)

      if ('v' in argv) {
        console.log(file + ' => ' + outputFile)
      }

      // if output file exists, delete it
      if (fs.existsSync(outputFile)) {
        fs.unlinkSync(outputFile)
      }

      args.push('-i')
      args.push(file)
      args.push(outputFile)
      exec('ffmpeg', args, {}, function (error, stdout, stderr) {
        if (error) {
          console.log(error)
        }
      })
    })

  }
  else {
    console.log(error)
  }

})
