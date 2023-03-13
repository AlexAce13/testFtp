export const copyProd = () => {
	return app.gulp.src(app.path.rootFolder)
		.pipe(app.gulp.dest(app.path.production))
}
