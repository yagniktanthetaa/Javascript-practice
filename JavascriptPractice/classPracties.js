class myClass {
  constructor(name, surName, age) {
    this.name = name;
    this.surName = surName;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi ${this.name} ${this.surName} your age is ${this.age}`);
  }
}

class userProfile extends myClass {
  userName() {
    console.log(this.name);
  }
  userAge() {
    console.log(this.age);
  }
  userFullName() {
    console.log(`${this.name} ${this.surName}`);
  }
}

const profile = new userProfile("Yagnik", "Vadadoriya", 23);
profile.sayHello();
profile.userName();
profile.userAge();
profile.userFullName();
