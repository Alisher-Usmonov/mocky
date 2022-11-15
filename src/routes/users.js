const { faker } = require("@faker-js/faker");

module.exports = () => {
  const users = [{
    id: 12,
    first_name: 'Xushnudbek',
    last_name: 'Ayitboyev',
    company_name: 'Wasaf',
    usdot: '12345678',
    time_zone: 'Uzb',
    password: '123123123',
    confirm_password: '123123123',
    user_name: 'Xushnudbek',
    email: 'test@mail.ru',
    phone: '+998 90 111 11 11',

  }]
  return users.fill(new Array(12).fill(undefined).map((_, index) => ({
    id: index + 1,
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    company_name: faker.internet.userName(),
    usdot: faker.random.numeric(5),
    time_zone: faker.address.timeZone(),
    password: faker.internet.password(),
    confirm_password: faker.internet.password(),
    user_name: faker.internet.userName(),
    email: faker.internet.email(),
    phone: faker.phone.number("###-###-####"),
  })), 1);
};
