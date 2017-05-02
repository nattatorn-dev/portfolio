var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    htmlmin = require('gulp-htmlmin'),
    gutil = require('gulp-util'),
    image = require('gulp-image'),
    mainbowerfiles = require('main-bower-files');
/*routeing*/
// gulp.task('sass', function () {
//   return sass([
//         './src/assets/css/styles.scss'
//          ])
//         .pipe(gulp.dest('./src/dist/css/'));
// });

gulp.task('css' ,function() {
  return gulp.src([
                    './bower_components/bootstrap/dist/css/bootstrap.min.css',
                    './assets/plugins/flexslider/flexslider.css',
                    './bower_components/font-awesome/css/font-awesome.min.css',
                    './assets/css/*.css'
                ])
        .pipe(concat('bundle.css'))
        .pipe(minifycss())
        .pipe(rename({
            basename: "bundle",
            suffix: ".min",
            extname: ".css"}))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('js', function(){
  return gulp.src([
                    './bower_components/bootstrap/dist/js/bootstrap.min.js',
                    './assets/plugins/flexslider/jquery.flexslider.min.js',
                    './assets/plugins/*.js',
                    './bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.min.js',
                    './bower_components/jquery-countTo/jquery.countTo.js',
                    './bower_components/protonet/jquery.inview/jquery.inview.min.js',
                    './assets/js/*.js'
                ])
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename({
            basename: "bundle",
            suffix: ".min",
            extname: ".js"}))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('html', function() {
  return gulp.src('./assets/libs/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./'));
});

gulp.task('image', function () {
  return gulp.src('./assets/images/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/images/'));
});

gulp.task('image-s', function () {
  return gulp.src('./assets/images/projects/*')
        .pipe(image())
        .pipe(gulp.dest('./dist/images/projects/'));
});

// gulp.task('bower', function() {
//     return gulp.src(mainbowerfiles())
//         .pipe(/* what you want to do with the files */)
// });

// gulp.task('watch', function() {
//     gulp.watch('./src/dist/css/*.css', ['css']);
//     gulp.watch('./src/dist/sass/*.sass', ['sass']);
//     gulp.watch('./src/dist/js/*.js', ['js']);
//     gulp.watch('./src/dist/libs/*.html', ['html']);
//     gulp.watch('./src/dist/images/*');
// });

// gulp.task('default', ['watch']);
//gulp.task('all', ['sass', 'css', 'js', 'html', 'image']);
gulp.task('all', ['html', 'css', 'js']);
gulp.task('img', ['image', 'image-s']);
