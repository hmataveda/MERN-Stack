const { faker } = require("@faker-js/faker");
const express = require("express");
const app = express();

const createNewUser = () => {
  const user = {
    _id: faker.datatype.uuid(),
    password: faker.internet.password(10),
    email: faker.internet.email(),
    phoneNumber: faker.phone.phoneNumber(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
  };
  return user;
};

const createNewCompany = () => {
  return {
    _id: faker.datatype.uuid(),
    name: faker.company.companyName(),
    adress: {
      street: faker.address.streetName(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country(),
    },
  };
};
const newfakeUser = createNewUser();
const newFakeCompnay = createNewCompany();

app.get("/api/user/new", (req, res) => {
  //   console.log("hi", res);
  res.send(newfakeUser);
});
app.get("/api/company/new", (req, res) => {
  //   console.log("comapny", req);
  res.json(newFakeCompnay);
});

app.get("/api/user/company", (req, res) => {
  res.json([newfakeUser, newFakeCompnay]);
  //   res.send({ newfakeUser ,newFakeCompnay});
});

app.listen(8080, () => {
  console.log("your server is running in port 8080 enjoy!!!!");
});
