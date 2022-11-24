const { faker } = require("@faker-js/faker");

module.exports = () => {
  return new Array(100).fill(undefined).map((_, index) => ({
    id: index + 1,
    fullName: faker.name.fullName(),
    vehicle: faker.commerce.product(),
    activatedDate: faker.datatype.datetime(),
    terminatedData: faker.datatype.number({ min: 1000, max: 9999 }),
    distance: faker.address.zipCode(),
    endOdometr: faker.random.numeric(8),
    engHour: faker.random.numeric(8),
  }));
};
