

var gulp = require('gulp')
,   sourcemaps = require('gulp-sourcemaps')
,   sass = require('gulp-sass')
,   babel = require('gulp-babel')
,   concat = require('gulp-concat')
,   CacheBuster = require('gulp-cachebust') //capitalized because it is a constructor function
,   print = require('gulp-print').default
,   uglify = require('gulp-uglify')

var cachebust = new CacheBuster();  //need this constructor function


function buildCSS(){
    console.log("Gulp: Rebuilding CSS with your changes");
    return gulp.src([
      './public/css/reset.css', 
      './public/css/style.scss', 
      './public/directives/footer/footerDir.css', 
      './public/directives/nav/navDir.css', 
      './public/directives/table-head-dir/table-head-dir.css',
      './public/views/home-header/home-header.css',
      './public/views/player-header/player-header.css',
      './public/views/team-choices/team-choices.css',
      './public/views/roster/roster.css',
      './public/views/fight/fight.css',
      './public/views/results/results.css'
      ]) //tell gulp to get EVERYTHING inside the styles folder.
    .pipe(sourcemaps.init()) //pipe (take the results from the previous thing and do something). PIPE results to sourcemaps.init() function.
    .pipe(sass()) //process SASS. Turn sass into CSS.
    .pipe(cachebust.resources()) //Keep a copy of something and don't get the new thing. Blow up the old stuff, put in the new stuff!
    .pipe(concat('all.css')) //put all the sass files into ONE long file. Makes things faster
    .pipe(sourcemaps.write('./maps')) //write out sourcemaps
    .pipe(gulp.dest('./dist')); //stick the sourcemaps into the dist folder.
}

//Make sure to install all the tools listed above.
// npm install --save gulp-sourcemaps gulp-sass gulp-concat -gulp-cachebust



function buildJS() {
    console.log("Gulp: Rebuilding JavaScript with your changes");
    return gulp.src([
      './public/js/brawlApp.js',
      './public/js/mainCtrl.js',
      './public/js/mainService.js',
      './public/directives/footer/footerDir.js',
      './public/directives/nav/navDir.js',
      './public/directives/table-head-dir/table-head-dir.js',
      './public/views/player-header/player-headerCtrl.js',
      './public/views/team-choices/team-choicesCtrl.js',
      './public/views/roster/rosterCtrl.js',
      './public/views/fight/fightCtrl.js',
      './public/js/libraries/angular-animate.min.js'
    ])              
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(sourcemaps.init())
    .pipe(print())                        
    .pipe(concat('all.js'))
    // .pipe(uglify())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js'));
  }
  
  function buildViews(){
    console.log("Gulp: Rebuilding HTML with your changes");
    // return gulp.src('./public/**/**/*.html')
    return gulp.src([
      './public/directives/footer/footerDir.html',
      './public/directives/nav/navDir.html',
      './public/directives/table-head-dir/table-head-dir.html',
      './public/views/player-header/player-header.html',
      './public/views/home-header/home-header.html',
      './public/views/team-choices/team-choices.html',
      './public/views/roster/roster.html',
      './public/views/fight/fight.html',
      './public/js/libraries/angular-animate.min.js'
    ])   
    .pipe(gulp.dest('./dist/views'));
  }
  
  function buildImages(){
    console.log("Gulp: Rebuilding Images with your changes");
    return gulp.src('./public/images/**/*')
    .pipe(gulp.dest('./dist/images'));
  }
  function buildFonts(){
    console.log("Gulp: Rebuilding fonts with your changes");
    return gulp.src('./public/fonts/**/*')
    .pipe(gulp.dest('./dist/fonts'));
  }
  function buildJSON(){
    console.log("Gulp: Rebuilding JSON with your changes");
    return gulp.src('./public/JSON/*.json')
    .pipe(gulp.dest('./dist/JSON'));
  }
  
  function build() {
    return gulp.src('./index.html')
    .pipe(cachebust.references())
    .pipe(gulp.dest('./dist'));
  };
  
  function watch() {
    gulp.watch(['./index.html','./views/**/*.html'], buildViews);
    gulp.watch([
      './public/css/reset.css', 
      './public/css/style.scss', 
      './public/directives/footer/footerDir.css', 
      './public/directives/nav/navDir.css', 
      './public/directives/table-head-dir/table-head-dir.css',
      './public/views/home-header/home-header.css',
      './public/views/player-header/player-header.css',
      './public/views/team-choices/team-choices.css',
      './public/views/roster/roster.css',
      './public/views/fight/fight.css',
      './public/views/results/results.css',
      './public/images/**/*'
    ], buildCSS);
    gulp.watch([
      './public/js/brawlApp.js',
      './public/js/mainCtrl.js',
      './public/js/mainService.js',
      './public/directives/footer/footerDir.js',
      './public/directives/nav/navDir.js',
      './public/directives/table-head-dir/table-head-dir.js',
      './public/views/player-header/player-headerCtrl.js',
      './public/views/team-choices/team-choicesCtrl.js',
      './public/views/roster/rosterCtrl.js',
      './public/views/fight/fightCtrl.js',
      './public/views/results/fightCtrl.js',
      './public/js/libraries/angular-animate.min.js'
  ], buildJS);
    gulp.watch('./images/**/*', buildImages);
    gulp.watch('./fonts/**/*', buildFonts);
    gulp.watch('./JSON/*.json', buildJSON);
    // gulp.watch('download/**/*', buildDL);
};

// gulp.task(series(build, watch));

gulp.task('default', gulp.series(buildViews, buildCSS, buildJS, buildImages, buildFonts, buildJSON, build, watch));
