const db = require("../database/config");

function getIssues() {
  return db("issues");
}

function postedBy(id) {
  return db("issues").where("issues.user_id", id);
}

module.exports = {
  getIssues,
  postedBy,
};
