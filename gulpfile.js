/**
 * Created by xiaobaowei on 2016/8/16.
 */
var gulp = require('gulp');
var babel = require('gulp-babel');
var fs = require('fs');
var babelrc = JSON.parse(fs.readFileSync('./.babelrc', 'utf-8'));

gulp.task('babel-react', function () {
    return gulp.src('scripts/src/*.js')
        .pipe(babel(babelrc))
        .pipe(gulp.dest('scripts/dist'));
});

gulp.task('watch', function () {
    gulp.watch('scripts/src/*.js', ['babel-react']);
});

gulp.task('default', ['babel-react']);
