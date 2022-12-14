const { faker } = require("@faker-js/faker");

module.exports = () => {
  const user = {
    id: 13,
    first_name: "Xushnudbek",
    last_name: "Ayitboyev",
    company_name: "Wasaf",
    usdot: "12345678",
    time_zone: "Uzb",
    password: "123123123",
    confirm_password: "123123123",
    user_name: "Xushnudbek",
    email: "test@mail.ru",
    phone: "+998 90 111 11 11",
    role: "company",
  };
  const auditor = {
    id: 14,
    first_name: "Mirjalol",
    last_name: "Norqulov",
    company_name: "Wasaf",
    usdot: "12345678",
    time_zone: "Uzb",
    password: "123456",
    confirm_password: "123456",
    user_name: "mirjalol",
    email: "auditor@gmail.com",
    phone: "+998 94 111 11 11",
    role: "auditor",
  };

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

  users.unshift(auditor);
  users.unshift(user);

  return users;
};
