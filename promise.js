// Veri tabanindaki verileri kullanici bazli filtrelemek

let users = [
    {
        id: 1,
        userName: "admin",
        password: "123456",
        isAdmin: true,

    },
    {
        id: 2,
        userName: "mustafa",
        password: "123456",
        isAdmin: false,
    },
    {
        id: 3,
        userName: "ahmet",
        password: "123456",
        isAdmin: false,
    }
]

let data = [
    {
        title: "Data-1",
        ownerID: 2,
    },
    {
        title: "Data-2",
        ownerID: 2,
    },
    {
        title: "Data-3",
        ownerID: 3,
    },
    {
        title: "Data-4",
        ownerID: 3,
    }
]
// Kullanici login islemi
function loginUser(userName, password) {
    console.log("Checking user")
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.userName === userName && user.password === password);
        if (user)
            resolve(user)

        else
            reject("Kullanici bulunumadi")
    })
}
//Kullanici bazli filtreleme
function getDataByUser(user) {
    console.log("Getting data for user : " + user.userName)
    setTimeout(() => {
        if (user.isAdmin)
            console.log(data)
        else
            console.log(data.filter(dt => dt.ownerID === user.id))

    }, 2000);
}

loginUser('admin', "123456")
    // loginUser('mustafa', "123456")
    // loginUser('ahmet', "123456")
         //// User not found :
    // loginUser('mert', "123456")
    .then(user => getDataByUser(user))
    .catch(error => console.log(error))