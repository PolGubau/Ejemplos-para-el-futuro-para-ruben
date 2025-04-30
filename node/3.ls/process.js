// process 

// console.log(process.argv); 

// process.exit(0); // 0 = sin errores, 1 = con errores

// process.on("exit", (code) => {
//   console.log(`El proceso ha terminado con el código: ${code}`);
// }
// );

// console.log(process.cwd()); //current working directory


const folder = process.argv[2] || ".";
const fs = require("node:fs/promises");
const path = require("node:path");

async function listFiles(folder) {
  let files = [];
  try {
     files = await fs.readdir(folder);
  } catch (err) {
    console.error("Error al leer el directorio:", err);
  }

  const filesPromises = files.map(async (file) => {
    const filePath = path.join(folder, file);

    let stats;

    try {
      stats = await fs.stat(filePath);
    } catch (err) {
      console.error("Error al obtener información del archivo:", err);
    }


  const isDirectory = stats.isDirectory();
 
  const fileType = isDirectory ? "📂" : "📋";
  const size =  stats.size
  const fileName = path.basename(filePath);

  return `${fileType} ${fileName.padEnd(20)} ${`(${size})`.padStart(10)}`;
  }
  ) 

  const filesInfo = await Promise.all(filesPromises);

for (const fileInfo of filesInfo) {
    console.log(fileInfo);
  }
}

listFiles(folder).catch((err) => {
  console.error("Error:", err);
});