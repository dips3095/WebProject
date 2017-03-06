var gulp      = require('gulp'), // Подключаем Gulp
    less        =require('gulp-less'),
    browserSync = require('browser-sync'); // Подключаем Browser Sync


gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'app' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});
gulp.task('less', function(){ // Создаем таск Sass
    return gulp.src('app/less/**/*.less') // Берем источник
        .pipe(less()) // Преобразуем Less в CSS посредством gulp-sass
        .pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true})) // Обновляем CSS на странице при изменении
});
gulp.task('watch', ['browser-sync','less'], function() {
    gulp.watch('app/less/**/*.less',['less'],browserSync.reload);//    Наблюдение за less файлами в папке sass
    gulp.watch('app/*.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/**/*.js', browserSync.reload); // Наблюдение за JS файлами в папке js
});

gulp.task('default', ['watch']);