const fs = require("node:fs");
const path = require("node:path");

module.exports = async (folder) => {
  try {
    const filesPath = path.join(__dirname, "..", folder);
    const dbPath = path.join(__dirname, "..", "..", "db.json");

    fs.readdir(filesPath, (err, files) => {
      if (!err) {

        const data = {};

        files.forEach(file => {
          const module = require(path.join(filesPath, file));
          const resource = file.split(".")[0];

          data[resource] = module();
        })

        fs.writeFile(dbPath, JSON.stringify(data), (err) => {
          if (!err) {
            console.log("✅ Routes added successfully. Now you can push it")
            process.exit();
          }
        })
      };
    })
  } catch (err) {
    console.log(err);
  }
}