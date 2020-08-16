const db = require("../database/config");

function getIssues() {
  return db("issues");
}

function postedBy(id) {
  return db("issues").where("issues.user_id", id);
}

function postedIn(id) {
  return db("issues").where("issues.area_id", id);
}

module.exports = {
  getIssues,
  postedBy,
  postedIn,
};
