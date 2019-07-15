const db = require("./index.js");
const houseSchema = require("./houseSchema.js");
const faker = require("faker");
const houseGen = () => {
  let houseArr = [];

  for (let i = 1; i <= 100; i++) {
    const House = {
      id: i,
      price: faker.finance.amount(550000, 5000000, 0),
      bedrooms: faker.random.number({ min: 3, max: 8 }),
      bathroom: faker.random.number({ min: 2, max: 5 }),
      sqft: faker.random.number({ min: 1500, max: 5500 }),
      address: `${faker.address.streetAddress()}, ${faker.address.city()}, ${faker.address.state()}, ${faker.address.zipCode()}`
    };
    houseArr.push(House);
  }
  // console.log(houseArr);
  return houseArr;
};

const inserthomeData = function () {
  const houses = houseGen();
  const promises = [];
  for (const house of houses) {
    promises.push(houseSchema.create(house));
  }
  Promise.all(promises).then(() => db.disconnect());
};


inserthomeData();
