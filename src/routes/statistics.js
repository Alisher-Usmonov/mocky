const { faker } = require("@faker-js/faker");

module.exports = () => {
  return {
    driversOnDuty: faker.random.numeric(2),
    driversOnRoad: faker.random.numeric(2),
    driversOffDuty: faker.random.numeric(2),
    sleepingDrivers: faker.random.numeric(2),
    disconnects: faker.random.numeric(2),
  };
};
