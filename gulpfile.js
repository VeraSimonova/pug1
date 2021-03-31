const { src, dest, gulp } = require('gulp');
const pug = require('gulp-pug');

const pathProject = {
	'src': "./src/",
	'dest': "./dest/"
};

function pugCompile(){
  return src('./src/pug/pages/*.pug')
  	.pipe(pug({}))
    .pipe(dest('./dist'));
}

exports.pug = pugCompile;