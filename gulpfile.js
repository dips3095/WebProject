var gulp      = require('gulp'), // Подключаем Gulp
    less        =require('gulp-less'),//Подключаем пакет для Less
    cssnano     = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename      = require('gulp-rename'), //Подключаем пакет для переименования
    del         = require('del'),// Подключаем библиотеку для переименования файлов
    browserSync = require('browser-sync'), //Подключаем browser-sync
    imagemin    = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
    pngquant    = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache       = require('gulp-cache'), // Подключаем библиотеку кеширования
    spritesmith = require('gulp.spritesmith'),
    concat = require('gulp-concat'),
    babel = require('gulp-babel'),
    fontmin = require('gulp-fontmin'),
    uglify = require('gulp-uglify'),
    pump = require('pump'),
    autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

gulp.task('babel', () => {
    return gulp.src('app/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('app/js/readyjs'));
});

gulp.task('fonts', function () {
    return gulp.src('app/fonts/*.ttf')
        .pipe(fontmin({

            text: '/,.!@?#$%%&*())-12345677890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+=-!#'
        }))
        .pipe(gulp.dest('dist/fonts'));
});
gulp.task('js-min', function (cb) {
    pump([
            gulp.src('app/js/readyjs/*.js'),
            uglify(),
            gulp.dest('dist/js')
        ],
        cb
    );
});
gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


gulp.task('less',['concat-less'], function(){ // Создаем таск less
    return gulp.src('app/less/res.less') // Берем источник
    .pipe(less())
        .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});
gulp.task('css-libs', ['less'], function() {
    return gulp.src('app/css/res.css') // Выбираем файл для минификации
        .pipe(cssnano()) // Сжимаем
        //.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
        .pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});
gulp.task('watch', ['browser-sync','css-libs','babel'], function() {
    gulp.watch('app/less/**/*.less',['css-libs'],browserSync.reload);//    Наблюдение за less файлами в папке less
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/*.js',['babel'], browserSync.reload); // Наблюдение за JS файлами в папке js
});
gulp.task('sprite', function() {
    var spriteData =
        gulp.src('app/img/icons/*.*') // путь, откуда берем картинки для спрайта
            .pipe(spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.less',
                imgPath: '../img/sprite.png',
                algorithm: 'left-right',
                cssFormat: 'less',
                padding: 10,
            }));

    spriteData.img.pipe(gulp.dest('app/img')); // путь, куда сохраняем картинку
    spriteData.css.pipe(gulp.dest('app/less/styles')); // путь, куда сохраняем стили
});

gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});
gulp.task('concat-less', function(){
    return gulp.src('app/less/styles/*.less')
        .pipe(concat('res.less'))
        .pipe(gulp.dest('app/less'));
});
gulp.task('build', ['clean','sprite','img','css-libs','fonts','js-min'], function() {

    var buildCss = gulp.src('app/css/*.css')
        .pipe(gulp.dest('dist/css'))


    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('dist'));

});
gulp.task('img', function() {
    return gulp.src('app/img/*.*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});
gulp.task('clear', function () {
    return cache.clearAll();
})
gulp.task('default', ['watch']);
