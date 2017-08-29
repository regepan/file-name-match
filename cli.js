#!/usr/bin/env node
"use strict"

const sgf = require('staged-git-files')
const symbols = require("log-symbols")
const stylelint = require("stylelint")

sgf('ACM', (err, files) => {
    if (err) {
        console.error(err)
    }

    var fileNames = []

    const regExp = /.*?\.scss$/

    files.forEach((file) => {
        if (!file.filename.match(regExp)) {
            return
        }

        let scssFilteredFileName = file.filename.split('_').pop().replace('.scss', '')

        fileNames.push(scssFilteredFileName)
    })

    console.log(fileNames)

    files.forEach((file) => {
    })

    if (true) {
      console.error('  ' + symbols['error'], 'file name match error...')
      process.exit(1)
    }
})
