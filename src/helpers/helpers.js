const { createWriteStream } = require("fs-extra");

const writeOnFile = (fileLocation, data) => {
  let writeStream = createWriteStream(fileLocation);
  writeStream.write(data);
};

module.exports = {
  writeOnFile
};
