const { faker } = require("@faker-js/faker");

module.exports = () => {
  const users = new Array(12).fill(undefined).map((_, index) => ({
    id: index + 1,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    company_name: faker.company.name(),
    usdot: faker.random.numeric(5),
    time_zone: faker.address.timeZone(),
    password: faker.internet.password(),
    confirm_password: faker.internet.password(),
    user_name: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.number("### ## ### ## ##"),
    role: faker.helpers.arrayElement(["company", "auditor"]),
  }));
  return users;
};
