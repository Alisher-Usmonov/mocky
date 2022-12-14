const { faker } = require("@faker-js/faker");

module.exports = () => {
  return new Array(120).fill(undefined).map((_, index) => ({
    id: index + 1,
    driver: faker.name.fullName({ sex: "male" }),
    truck_number: faker.datatype.number({ min: 1000, max: 9999 }),
    status: faker.helpers.arrayElement(["DR", "SB", "ON", "OFF"]),
    phone: faker.phone.number("###-###-####"),
    driver_num: faker.datatype.number({ min: 1000 }),
    coordinates: new Array(2).fill(undefined).map(() => ({
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    })),
    location: {
      address: faker.address.streetAddress(),
      time: faker.date.recent(),
    },
  }));
};
