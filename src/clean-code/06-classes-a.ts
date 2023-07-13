(() => {
  // No aplicando el principio de responsabilida unica

  type Gender = 'M' | 'F';
  class Person {
    // public name: string;
    // public gender: Gender;
    // public birthdate: Date;

    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;
    constructor(
      public email: string,
      public role: string,

      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const newPerson = new Person('Carlos', 'M', new Date('1988-09-28'));

  const newUser = new User(
    'carlosarias2474@gmail.com',
    'dueño',
    'Carlos',
    'M',
    new Date('1961-07-20')
  );

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'carlosarias2474@gmail.com',
    'dueño',
    'Carlos',
    'M',
    new Date('1961-07-20')
  );

  console.log(newPerson);
  console.log(newUser);
  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
})();
