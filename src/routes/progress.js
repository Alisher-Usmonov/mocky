const { faker } = require("@faker-js/faker");

module.exports = () => {
  return new Array(100).fill(undefined).map((_, index) => ({
    id: index + 1,
    fullName: faker.name.fullName(),
    reportType: faker.commerce.product(),
    fromDate: faker.datatype.datetime(),
    createdTime: faker.datatype.number({ min: 1000, max: 9999 }),
    lastExecute: faker.datatype.number({ min: 100000 }),
  }));
};
