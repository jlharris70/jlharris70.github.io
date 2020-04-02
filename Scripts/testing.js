var filter = {
    address: 'England',
    name: 'Mark'
  };
  var users = [{
      name: 'John',
      email: 'johnson@mail.com',
      age: 25,
      address: 'USA'
    },
    {
      name: 'Tom',
      email: 'tom@mail.com',
      age: 35,
      address: 'England'
    },
    {
      name: 'Mark',
      email: 'mark@mail.com',
      age: 28,
      address: 'England'
    }
  ];
  
  users= users.filter(function(item) {
    for (var key in filter) {
      if (item[key] === undefined || item[key] != filter[key])
        return false;
    }
    return true;
  });
  
  console.log(users)