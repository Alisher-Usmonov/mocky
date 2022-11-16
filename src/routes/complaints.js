const { faker } = require("@faker-js/faker");

module.exports = () => {
	return new Array(120).fill(undefined).map((_, index) => ({
		id: index + 1,
		driver: faker.name.fullName(),
		truck_num: faker.vehicle.vrm(),
		errors: faker.helpers.arrayElement([{ label: "Disconnect", key: "disconnect" }, { label: "Unidentified", key: "unidentified" }]),
		status: faker.helpers.arrayElement(["Driving", "Sleeping", "On rest"]),
		start: faker.date.past(),
		address: faker.address.streetAddress(),
		odometr: faker.random.numeric(5),
		engine_hours: faker.datatype.float(0.1),
	}));
};
