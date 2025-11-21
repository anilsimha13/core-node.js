console.log("I am from Index.js");

const { add } = require("./sum");

const { multiply } = require("./multiply");

const { division } = require("./division");

module.exports = { add, multiply, division };
