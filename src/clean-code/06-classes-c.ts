(() => {
  // aplicando el principio de responsabilida unica
  // Priorizar la composición frente a la herencia

  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  // ---------------------------------------------

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;

      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  // ---------------------------------------------

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      name,
      gender,
      birthdate,
      email,
      role,
      lastOpenFolder,
      workingDirectory,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ lastOpenFolder, workingDirectory });
    }
  }

  // ----------------------------------------------------

  const newPerson = new Person({
    name: 'Carlos',
    gender: 'M',
    birthdate: new Date('1988-09-28'),
  });

  const newUser = new User({
    email: 'carlosarias2474@gmail.com',
    role: 'dueño',
  });

  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    email: 'carlosarias2474@gmail.com',
    role: 'dueño',
    name: 'Carlos',
    gender: 'M',
    birthdate: new Date('1961-07-20'),
  });

  console.log(newPerson);

  console.log(newUser);

  console.log({ userSettings });
})();
