class User {
  constructor(username, birthdate, age, email, password) {
    this.username = username;
    this.birthdate = birthdate;
    this.age = age;
    this.email = email;
    this.password = password;
    this.valid = false;
  }
}

function workshop5(app) {
  app.post('/api/auth', function (req, res) {
    const { email, password } = req.body;

    const users = [
      new User('Saush', '08/20/2006', '20', 'Saush@fake.com', '12345'),
      new User('user1', '08/20/2003', '23', 'user1@fake.com', 'pass1'),
      new User('user2', '08/20/2000', '26', 'user2@fake.com', 'pass2'),
    ];

    let foundUser = null;
    for (let i = 0; i < users.length; i++) {
      if (email == users[i].email && password == users[i].password) {
        foundUser = users[i];
        break;
      }
    }
    if (foundUser) {
      res.json({
        username: foundUser.username,
        birthdate: foundUser.birthdate,
        age: foundUser.age,
        email: foundUser.email,
        valid: true,
      });
    } else {
      res.json({ valid: false });
    }
  });
}

export { workshop5 };
