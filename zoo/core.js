const data = require('./data');

function entryCalculator (entrants) {
  if (!entrants) return 0;
  let price = 0.0;
  for (const entry in entrants) {
    price += data.prices[entry] * entrants[entry];
  }
  return price;
};

function schedule (dayName) {
  const result = {};
  for (const day in data.hours) {
    if (!dayName || day === dayName) {
      if (data.hours[day].open === 0) {
        result[day] = "CLOSED";
      } else {
        result[day] = `Open from ${data.hours[day].open}am until ${data.hours[day].close - 12}pm`;
      }
    }
  }
  return result;
};

function animalCount (species) {
  if (species) {
    return data.animals.find(animal => animal.name === species).residents.length;
  } else {
    const result = {};
    for (let i = 0; i < data.animals.length; i++) {
      const animal = data.animals[i];
      result[animal.name] = animal.residents.length;
    }
    return result;
  }
};

function animalMap (options) {
  const result = {
    NE: [],
    NW: [],
    SE: [],
    SW: []
  };
  for (const animal of data.animals) {
    if (options && options.includeNames) {
      result[animal.location].push({ [animal.name]: animal.residents.filter(y => options.sex ? options.sex === y.sex : true).map(x => x.name) });
    } else {
      result[animal.location].push(animal.name);
    }
  }
  return result;
};

function animalPopularity (rating) {
  let results = {};
  result = data.animals.reduce((obj, {name, popularity}) => {
    if (obj[popularity]) {
      obj[popularity].push(name);
    } else {
      obj[popularity] = [name];
    }
    return obj;
  }, {});
  if (rating) {
    return result[rating];
  }
  return result;
};

function animalsByIds (ids) {
  if (!ids) return [];
  if (!Array.isArray(ids)) {
    ids = [ids];
  }

  const result = [];
  for (let id of ids) {
    result.push(data.animals.find(x => x.id === id));
  }
  return result;
};

function animalByName (animalName) {
  if (!animalName) return {};
  let result;
  for (let animal of data.animals) {
    if (result = animal.residents.find(y => y.name === animalName)) {
      result.species = animal.name;
      break;
    }
  }
  return result;
};

function employeesByIds (ids) {
  if (!ids) return [];
  if (!Array.isArray(ids)) {
    ids = [ids];
  }

  const result = [];
  for (let id of ids) {
    result.push(data.employees.find(x => x.id === id));
  }
  return result;  
};

function employeeByName (employeeName) {
  if (!employeeName) return {};
  let result = data.employees.find(x => x.firstName === employeeName);
  if (!result) {
    result = data.employees.find(x => x.lastName === employeeName);
  }
  return result;
};

function managersForEmployee (idOrName) {
  let [employee] = employeesByIds(idOrName);
  if (!employee) employee = employeeByName(idOrName);
  let managers = employee.managers.map(x => {
    let [manager] = employeesByIds(x);
    return manager.firstName + ' ' + manager.lastName
  });
  employee.managers = managers;
  return employee;
};

function fullName(employee) {
  return employee.firstName + " " + employee.lastName;
}

function employeeCoverage (idOrName) {
  if (idOrName) {
    let [employee] = employeesByIds(idOrName);
    if (!employee) employee = employeeByName(idOrName);
    let result = {};
    result[fullName(employee)] = animalsByIds(employee.responsibleFor).map(x => x.name);
    return result;
  } else {
    let result = {};
    for (let employee of data.employees) {
      result[fullName(employee)] = animalsByIds(employee.responsibleFor).map(x => x.name);
    }
    return result;
  }
};


module.exports = {
  entryCalculator: entryCalculator,
  schedule: schedule,
  animalCount: animalCount,
  animalMap: animalMap,
  animalPopularity: animalPopularity,
  animalsByIds: animalsByIds,
  animalByName: animalByName,
  employeesByIds: employeesByIds,
  employeeByName: employeeByName,
  managersForEmployee: managersForEmployee,
  employeeCoverage: employeeCoverage
}