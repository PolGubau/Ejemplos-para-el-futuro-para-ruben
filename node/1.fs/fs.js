const fs = require("node:fs");


// GET STATS
// const stats = fs.statSync("./test.txt");// console.log(
//   stats,
//   stats.isSymbolicLink(),
//   stats.isFile(),
//   stats.isDirectory(),
//   stats.isBlockDevice(),
// );

// READ SYNC --------------------------------------------

// console.log("Leyendo archivo de texto...");
// const text = fs.readFileSync("./test.txt", "utf-8");
// console.log(text);

// console.log("🟧 Haciendo lógica con el primer archivo (si lo de arriba tarda mucho esto se retrasa)")

// console.log("Leyendo archivo JSON...");
// const json = fs.readFileSync("./test.json", "utf-8");
// console.log(JSON.parse(json));

// READ ASYNC -----------------------------------------

// console.log("Leyendo archivo de texto...");

// const text = fs.readFile("./test.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.error("Error al leer el archivo:", err);
//     return;
//   }
//   console.log("Contenido del archivo:", data);
// }
// );

// console.log("Haciendo cosas de mientras se lee el archivo..."); //se ejecuta antes que la linea 35



// ASYNC CON PROMESAS -------------------------------

// const fsPromises = require("node:fs/promises");

// console.log("Leyendo archivo de texto...");

// fsPromises.readFile("./test.txt", "utf-8")
//   .then((data) => {
//     console.log("Contenido del archivo:", data);
//   })
//   .catch((err) => {
//     console.error("Error al leer el archivo:", err);
//   });

// console.log("Haciendo cosas de mientras se lee el archivo..."); //se ejecuta antes que la linea 50


// ASYNC PARALELO ------------------------------- util para cuando tienes que esperar varias fn
 const fsPromises = require("node:fs/promises");

 Promise.all([
  fsPromises.readFile("./test.txt", "utf-8"),
  fsPromises.readFile("./test.json", "utf-8"),
]).then(([text, json]) => {
	console.log("Contenido del archivo de texto:", text);
	console.log("Contenido del archivo JSON:", JSON.parse(json));
})


// 