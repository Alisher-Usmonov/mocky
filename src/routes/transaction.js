const { faker } = require("@faker-js/faker");

module.exports = () => {
  return new Array(100).fill(undefined).map((_, index) => ({
    id: index + 1,
    accountName: faker.finance.accountName(),
    commit: faker.git.commitMessage(),
  }));
};
