"use strict"
gulp = require "gulp"
minifycss = require "gulp-minify-css"
bower = require "gulp-bower"
concat = require "gulp-concat"
rename = require "gulp-rename"
coffee = require "gulp-coffee"
uglify = require "gulp-uglify"
compass = require "gulp-compass"
pngmin = require "gulp-pngmin"
prefixer = require "gulp-autoprefixer"
consolidate = require "gulp-consolidate"
sourcemaps = require 'gulp-sourcemaps'
plumber = require "gulp-plumber"
runSequence = require "run-sequence"
fontName = "symbols" # set name of your symbol font
template = "fontawesome-style" # you can also choose 'foundation-style'
appPath = "public/"


licenseRegexp =
  /^\!|^@preserve|^@cc_on|\bMIT\b|\bMPL\b|\bGPL\b|\(c\)|License|Copyright/i

isLicenseComment = do ->
  _prevCommentLine = 0
  (node, comment) ->
    if licenseRegexp.test(comment.value) or
    comment.line is 1 or
    comment.line is _prevCommentLine + 1
      _prevCommentLine = comment.line
      return true
    _prevCommentLine = 0
    false

gulp.task "compass", ->
  gulp
  .src "scss/*.scss"
  .pipe plumber()
  .pipe compass
    config_file: "config.rb"
    sass: "scss"
    css: "#{appPath}css"

gulp.task "prefixer", ->
  gulp
  .src "#{appPath}css/*.css"
  .pipe prefixer()
  .pipe gulp.dest "#{appPath}css"

gulp.task "coffee", ->
  gulp
  .src "coffee/*.coffee"
  .pipe plumber()
  .pipe sourcemaps.init()
  .pipe coffee bare: true
  .pipe sourcemaps.write ""
  .pipe gulp.dest "#{appPath}js"

gulp.task "minify", ->
  gulp
  .src "#{appPath}css/*.css"
  .pipe minifycss
    compatibility: "ie8"
  .pipe gulp.dest "#{appPath}css"
  gulp
  .src "#{appPath}js/*.js"
  .pipe uglify
    mangle: false
    preserveComments: isLicenseComment
  .pipe gulp.dest "#{appPath}js"
  gulp
  .src "#{appPath}img/**.png"
  # .src("#{appPath}img/sprite-*") #スプライトだけ最適化する場合
  .pipe pngmin()
  .pipe gulp.dest "#{appPath}img"

gulp.task "bower", ->
  bower()
  # bower cmd: 'update'
  .pipe gulp.dest "bower_components"

gulp.task "copy", ->
  gulp
  .src [
    "bower_components/jquery/dist/jquery.min.*"
    "bower_components/modernizr/modernizr.js"
  ]
  .pipe gulp.dest "#{appPath}js/vendor"

gulp.task "modernizr", ->
  gulp
  .src "#{appPath}js/vendor/modernizr.js"
  .pipe uglify
    mangle: false
    preserveComments: isLicenseComment
  .pipe rename suffix: ".min"
  .pipe gulp.dest "#{appPath}js/vendor"

gulp.task "concat", ->
  gulp
  .src [
    "js/plugins-base.js"
    # "bower_components/soundmanager/script/soundmanager2-jsmin.js"
  ]
  .pipe concat "plugins.js"
  # .pipe uglify
  #   mangle: false
  #   preserveComments: isLicenseComment
  .pipe gulp.dest "#{appPath}js"

gulp.task "compass-build", (callback) ->
  runSequence(
    'compass'
    'prefixer'
    callback
  )

gulp.task "watch", ->
  gulp.watch "scss/*.scss", ["compass-build"]
  gulp.watch "coffee/**/*.coffee", ["coffee"]

gulp.task "default", (callback) ->
  runSequence(
    'bower'
    [
      'copy'
      'modernizr'
      'concat'
    ]
    'watch'
    callback
  )

gulp.task "min", (callback) ->
  runSequence(
    'minify'
    callback
  )
