// const userOne = {
//     name:"Brett",
//     age: 29,
//     email: "brett@email.com"
// }

// const userTwo = {
//     name:"boony",
//     age: 19,
//     email: "boony@email.com"
// }



// below is the section to use



// function User(name, age, email){
//     this.name = name
//     this.age = age
//     this.email = email
// }

// this also works

class User {
    constructor(name, age, email){
        this.name = name
        this.age = age
        this.email = email 
    }
    // adding a method
ageByOne(){
    this.age +=1
}
}




const brett = new User("brett", 29,"brett@email.com")
const boony = new User("boony", 19, "boony@email.com")

brett.ageByOne
console.log(boony.email)

