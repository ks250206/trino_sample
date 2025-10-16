const user = {
  user: "mongo",
  pwd: "mypassword",
  roles: [
    {
      role: "dbOwner",
      db: "mydb",
    },
  ],
};
const mydb = db.getSiblingDB("mydb");
mydb.createUser(user);
mydb.createCollection("measurement_a");

mydb.measurement_a.insertMany([
  { sample: "SN1", temperature_degC: 25, score: 100 },
  { sample: "SN2", temperature_degC: 25, score: 83 },
  { sample: "SN3", temperature_degC: 25, score: 45 },
]);
