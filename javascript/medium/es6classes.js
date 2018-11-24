//before ES6
const user1 = {
    name: "jeff",
    age: 29,
    email: "jeff@gmail.com"
}

const user2 = {
    name: "brad",
    age: 29,
    email: "brad@gmail.com"
}

const user3 = {
    name: "gary",
    age: 29,
    email: "gary@gmail.com"
}

// template for user objects
 function User(name, age, email) {
     this.name = name;
     this.age = age;
     this.email = email;
 }

 const jeff = new User("Jeff", 29,"jeff@gmail.com");
 const brad = new User("brad", 29,"brad@gmail.com");
 const gary = new User("gary", 29,"gary@gmail.com");

 //ES6 classes

 class UserClass {
     constructor(name, age, email) {
        this._name = name;
        this._age = age;
        this._email = email;
     }

     get name() {
         return this._name;
     }

     set name(newName) {
         this._name = newName;
     }

     increaseAge() {
         this.age += 1;
     }

     static staticMethod() {
         console.log('Static Method')
     }
 }

 class Administrator extends User {
     constructor(name, age, email, role) {
        super(name, age, email);
        this._role = newRole;
     }
     get role() {
         return this._role;
     }
     set role(newRole) {
         this._role = newRole;
     }

 }

 const mark = new User("mark", 29,"mark@gmail.com");
 const kris = new User("kris", 29,"kris@gmail.com");
 const dave = new User("dave", 29,"dave@gmail.com");
 const sara = new Administrator("Sara", 30, "sara@gmail.com", "Admin");

mark.increaseAge();
mark.staticMethod(); //return type error
UserClass.staticMethod(); //works 
mark.name = "Jim";
console.log(mark.name); // outputs Jim
console.log(sara.role); // outputs Admin



