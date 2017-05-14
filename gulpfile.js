const gulp = require("gulp");

const ts = require("gulp-typescript");

gulp.task("compile", () => {
    gulp.src("./src/**/*.ts").pipe(ts()).pipe(gulp.dest("/dist"));
});