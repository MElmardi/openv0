const path = require("path");
async function run(req) {
  console.log("> init : " + __dirname.split(path.sep).slice(-2).join(`/`));
  return {
    type: `component-placeholder-data`,
    success: true,
    data: {},
  };
}

module.exports = {
  run,
};
