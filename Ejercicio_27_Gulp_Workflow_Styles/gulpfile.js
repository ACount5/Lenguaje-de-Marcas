// Tarea: Configura tu gulpfile.js
// 1. Importa gulp y gulp-sass
// 2. Define una tarea 'css' para compilar
// 3. Exporta la tarea default con watch

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilarCSS() {
    return src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('dist/css'));
        
}
exports.css = compilarCSS;
exports.default = function()
{
    watch('src/scss/*.scss', compilarCSS)
};

