const gulp = require("gulp");

const htmlmin = require("gulp-htmlmin")

//静态文件
gulp.task("copy-html", function(){
    return gulp
    .src("*.html")
    .pipe(
        htmlmin({
            removeEmptyAttributes: true,
            collapseWhitespace: true,
        })
    )
    .pipe(gulp.dest("dist/"))
    .pipe(connect.reload());
})

gulp.task("images", function(){
    return gulp.src("images/*{jpg,png}")
    .pipe(gulp.dest("dist/images"))
    .pipe(connect.reload());
})

gulp.task("scripts", function(){
    return gulp.src(["*.js", "!gulpfile.js"])
    .pipe(gulp.dest("dist/js"))
    .pipe(connect.reload());
})

gulp.task("data", function(){
    return gulp.src(["*.json", "!package.json"])
    .pipe(gulp.dest("dist/data"))
    .pipe(connect.reload());
})

//静态资源县运行一次
gulp.task("build",["copy-html", "images", "scripts", "data"], function(){
    console.log("项目建立成功")
})

const sass = require("gulp-sass");
const minifyCss = require("gulp-minify-css");
const rename = require("gulp-rename");

gulp.task("sass", function(){
    return gulp.src("./stylesheet/index.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("index.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

gulp.task("sass1", function(){
    return gulp.src("./stylesheet/details.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"))
    .pipe(minifyCss())
    .pipe(rename("details.min.css"))
    .pipe(gulp.dest("dist/css"))
    .pipe(connect.reload())
})

//监听
gulp.task("watch", function(){
    gulp.watch("*.html", ["copy-html"]);
    gulp.watch("images/*{jpg,png}", ["images"]);
    gulp.watch(["*.js", "!gulpfile.js"], ["scripts"]);
    gulp.watch(["*.json", "!package.json"], ["data"]);
    gulp.watch("./stylesheet/index.scss", ["sass"]);
    gulp.watch("./stylesheet/details.scss", ["sass1"]);
})

//启动服务器
const connect = require("gulp-connect");
gulp.task("server", function(){
    connect.server({
        root:"dist",
        port:8888,
        livereload: true
    })
})

gulp.task("default", ["watch", "server"]);
