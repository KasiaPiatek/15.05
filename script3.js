const average = (...rest) => rest.reduce((a,b) => a + b, 0)/rest.length;
average();
