"use strict";

const gulp = require("gulp");
const shell = require("gulp-shell");

const files = ["design/database_models", "design_backends", "design_frontends", "design_frontends_js", "design_frontends_html", "api/authentication/login_with_email"];
const target = [];
for (const file of files) {
    target.push(`dot -Tsvg ${file}.dot > _book/${file}.svg`);
}
const command = target.join(" && ");

gulp.task("build", shell.task(`rm -rf _book && gitbook install && gitbook build . && ${command}`));

gulp.task("deploy", shell.task(`gitbook install && gitbook build . && ${command}`));
