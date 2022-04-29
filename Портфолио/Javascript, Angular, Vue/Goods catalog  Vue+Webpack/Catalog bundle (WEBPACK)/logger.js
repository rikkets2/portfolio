const fs = require("fs");

function log(type, productId) {
  fs.readFile("./stats.json", "utf-8", (err, rawData) => {
    if (err) {
      console.log("Read stats.json error!", err);
      return;
    }

    const actionList = JSON.parse(rawData);

    const action = {
      type, // ADD or DELETE
      productId,
      time: new Date().toISOString(),
    };

    actionList.push(action);

    fs.writeFile("./stats.json", JSON.stringify(actionList), (err) => {
      if (err) {
        console.log("Write stats.json error!", err);
        return;
      }
    });
  });
}

module.exports = log;
