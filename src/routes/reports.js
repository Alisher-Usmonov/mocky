const { faker } = require("@faker-js/faker");

module.exports = () => {
  return new Array(100).fill(undefined).map((_, index) => ({
    id: index + 1,
    fullName: faker.name.fullName(),
    reportType: faker.commerce.product(),
    fromDate: faker.datatype.datetime(),
    createdTime: faker.datatype.number({ min: 1000, max: 9999 }),
    lastExecute: faker.datatype.number({ min: 100000 }),
    vehicle: faker.commerce.product(),
    activatedDate: faker.datatype.datetime(),
    terminatedData: faker.datatype.number({ min: 1000, max: 9999 }),
    distance: faker.address.zipCode(),
    endOdometr: faker.random.numeric(8),
    engHour: faker.random.numeric(8),
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
    submissionId: faker.random.numeric(4),
  }));
};
