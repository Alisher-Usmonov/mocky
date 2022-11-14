const { faker } = require("@faker-js/faker");

module.exports = () => {
    return new Array(120).fill(undefined).map((_, index) => ({
        id: index + 1,
        driver: faker.name.fullName(),
        truck_num: faker.vehicle.vrm(),
        status: faker.helpers.arrayElement(["Driving", "Sleeping", "On rest"]),
        messages: faker.word.adjective({ length: { min: 1, max: 3 } }),
        worked_hours: faker.datatype.number({ min: 0, max: 24 }),
        last_location: faker.address.streetAddress(),
        break: faker.date.past(),
        drive: faker.date.recent(),
        shift: faker.date.future(),
        cycle: faker.date.soon(),
    }));
};
