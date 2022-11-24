const { faker } = require("@faker-js/faker");

module.exports = () => {
  return new Array(100).fill(undefined).map((_, index) => ({
    id: index + 1,
    driver: faker.name.fullName(),
    comment: faker.lorem.words(),
    startDate: faker.date.between(),
    endDate: faker.date.future(),
    status: faker.helpers.arrayElement([
      "On progress",
      "Success",
      "Failed",
      "Information",
    ]),
    createdTime: faker.datatype.number({ min: 1000, max: 9999 }),
    submissionId: faker.random.numeric(4),
  }));
};
