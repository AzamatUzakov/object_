let user = {
    name: 'Azamat',
    surname: 'Uzakov',
    age: '16',
    height: 175,
    adres: 'Motrid',
    phone: 998995846312,
    school: 45,
    status: 'student'
}

let bro = {
    name: "Muhammad",
    SureName: "Hamrakulov",
    LastName: "Shavkatovich",
    age: 16,
    height: 177,
    school: 45,
    address: "Muminiva 3/9",
    county: "Uzbekistan",
    city: "Samarqand",
    Birthday: "23 of April",
    wheight: 60,
    phoneNumber: 933542662,

}

//ТЗ

let one = Object.assign({}, user, { bro })
console.log(one)


let two = Object.keys(one)
console.log(two);

let three = Object.values(one)
console.log(three);

let five = [user].concat([bro])
console.log(five);










