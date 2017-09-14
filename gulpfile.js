const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

// Instructions for how task will run.
gulp.task('concat', function(){
  // gulp.src(['./js/services/mainService.js', './js/adventurerCard.js', './js/'])       Bad way
  // Use a wildcard instead. Wildcard = *
  gulp.src([
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
      './public/views/results/fightCtrl.js'

      ])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./public/dist'));
});

//BUILD IMAGES
gulp.task('build-images', function(){
  return gulp.src('images/**/*')
      .pipe(gulp.dest('./dist/images'));
})

// Compile scss into css files
gulp.task('sass', function() {
  gulp.src([
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
    
    ])
  .pipe(sass().on('error', sass.logError))
  .pipe(concat('all.css'))
  .pipe(gulp.dest('./public/dist'));
});

gulp.task('watch', function(){
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
         './public/views/results/fightCtrl.js'
    ],
     ['concat']);
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
    ],
     ['sass']);
    
})


// Gulp watch
// takes two arguments: the file(s) to watch, and then the task to do if it notices a change.

gulp.task('default', ['concat', 'sass', 'watch']);