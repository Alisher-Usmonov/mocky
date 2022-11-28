const { faker } = require("@faker-js/faker");

module.exports = () => {
  return new Array(100).fill(undefined).map((_, index) => ({
    id: index + 1,
    name: faker.company.name(),
    address: faker.address.streetAddress(),
    usdot: faker.random.numeric(5),
    phone: faker.phone.number("### ## ### ## ##"),
  }));
};
