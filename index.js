import { writeFile } from "fs/promises";
import { watch } from "chokidar";
import * as sass from "sass";
console.log("yes")

writeFile("./public/style.css", sass.compile("./style.scss").css);

watch("./style.scss").on('all', (event, path) => {
  console.log(event, path);
  writeFile("./public/style.css", sass.compile("./style.scss").css);
});