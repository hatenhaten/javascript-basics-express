const createPerson = (name, age) => {
  return {
    name,
    age
  };
};

const getName = object => object.name;

const getProperty = (property, object) => object[property];

const hasProperty = (property, object) => object.hasOwnProperty(property);

const isOver65 = person => person.age > 65;

const getAges = people => people.map(person => person.age);

const findByName = (name, people) => people.find(person => person.name == name);

const findHondas = cars => cars.filter(car => car.manufacturer == 'Honda');

const averageAge = people => {
  const ages = people.map(person => person.age);
  const totalAges = ages.reduce((accumulator, currentVal) => accumulator + currentVal);
  return totalAges / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce() {
      return `Hi Fred, my name is ${name} and I am ${age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
