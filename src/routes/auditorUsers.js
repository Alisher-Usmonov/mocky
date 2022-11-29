const { faker } = require("@faker-js/faker");

module.exports = () => {
  const users = new Array(100).fill(undefined).map((_, index) => ({
    id: index + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    userName: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.number("### ## ### ## ##"),
  }));
  return users;
};
