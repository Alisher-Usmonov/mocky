const { faker } = require("@faker-js/faker");

module.exports = () => {
  return new Array(120).fill(undefined).map((_, index) => ({
    id: index + 1,
    drivers: faker.name.fullName(),
    vehicle: faker.vehicle.vrm(),
    model: faker.vehicle.model(),
    licenseState: faker.random.numeric(6),
    eld: faker.random.numeric(4),
    address: faker.address.streetAddress(),
    notes: faker.random.numeric(8),
    vin: faker.vehicle.vin(),
    activatedDate: faker.date.recent(),
    terminated: faker.company.name(),
    status: faker.datatype.boolean(),
  }));
};
