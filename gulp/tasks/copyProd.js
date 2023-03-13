export const copyProd = () => {
	return app.gulp.src(`${app.path.currentProject}**/*.*`)
		.pipe(app.gulp.dest(app.path.production))
}
