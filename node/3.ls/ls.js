// const fs = require("node:fs")

// fs.readdir(".", (err, files) => {
//   if (err) {
//     console.error("Error al leer el directorio:", err);
//     return;
//   }
// for (const file of files) {
//   console.log(file);
//   }
// }
// );


// Same as

const fs = require("node:fs/promises")

fs.readdir(".").then((files) => {
  for (const file of files) {
    console.log(file);
  }
}
).catch((err) => {
  console.error("Error al leer el directorio:", err);
});