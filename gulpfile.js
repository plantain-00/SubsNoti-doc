"use strict";

let gulp = require("gulp");
let shell = require("gulp-shell");
let liveServer = require("live-server");

let files = ["design/database_models", "design_backends", "design_frontends_js", "design_frontends_html"];
let target = [];
for (let file of files) {
    target.push(`dot -Tsvg ${file}.dot > _book/${file}.svg`);
}
let command = target.join(" && ");

gulp.task("build", shell.task(`rm -rf _book && gitbook build . && ${command}`));

gulp.task("deploy", shell.task(`gitbook build . && ${command}`));

gulp.task("host", () => {
    liveServer.start({
        port: 9997,
        host: "0.0.0.0",
        root: "_book",
        open: false,
        ignore: "",
        wait: 500,
    });
});
