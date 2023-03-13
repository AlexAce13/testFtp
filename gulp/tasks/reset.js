import {deleteAsync} from "del";

export const reset = () => {
  return deleteAsync(`${app.path.clean}/assets`, {force: true});
}

export const deleteFilesForProd = () => {
	return deleteAsync(		[
		`${app.path.production}/.github`,
		`${app.path.production}/front`,
		`${app.path.production}/gulp`,
		`${app.path.production}/wp-content/themes/**/*.html`,
		`${app.path.production}/.editorconfig`,
		`${app.path.production}/.gitignore`,
		`${app.path.production}/gulpfile.js`,
		`${app.path.production}/package.json`,
		`${app.path.production}/package-lock.json`,
		`${app.path.production}/README.md`,
	], {force: true});
}
