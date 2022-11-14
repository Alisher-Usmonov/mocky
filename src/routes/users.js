const { faker } = require("@faker-js/faker");

module.exports = () => {
  return new Array(100).fill(undefined).map((_, index) => ({
    id: index + 1,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    user_name: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.number("###-###-####"),
  }));
};
