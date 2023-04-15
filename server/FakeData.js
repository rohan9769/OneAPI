const UserList = [
    {
        id:1,
        name:'John',
        username:'John',
        age:20,
        nationality:'CANADA',
        friends:[
            {
                id:2,
                name:'Gavi',
                username:'GaviAnderson',
                age:21,
                nationality:'SPAIN'
            },
            {
                id:3,
                name:'21Savage',
                username:'Savage',
                age:20,
                nationality:'USA'
            },
        ]
    },
    {
        id:2,
        name:'Gavi',
        username:'GaviAnderson',
        age:21,
        nationality:'SPAIN',
        friends:[
            {
                id:3,
                name:'21Savage',
                username:'Savage',
                age:20,
                nationality:'USA'
            },
        ]
    },
    {
        id:3,
        name:'21Savage',
        username:'Savage',
        age:20,
        nationality:'USA',
        friends:[
            {
                id:3,
                name:'21Savage',
                username:'Savage',
                age:20,
                nationality:'USA'
            },
        ]
    },
    {
        id:4,
        name:'Aubrey',
        username:'Drake',
        age:25,
        nationality:'INDIA',
        friends:[
            {
                id:3,
                name:'21Savage',
                username:'Savage',
                age:20,
                nationality:'USA'
            },
        ]
    },
]

const MovieList = [
    {
        id:1,
        name:'Avatar',
        yearOfPublication:2021,
        isInTheaters:true
    },
    {
        id:2,
        name:'Avengers',
        yearOfPublication:2019,
        isInTheaters:false
    },
    {
        id:3,
        name:'Love Death Robots',
        yearOfPublication:2016,
        isInTheaters:true
    },
    {
        id:4,
        name:'Despicable Me',
        yearOfPublication:2015,
        isInTheaters:false
    },
]

const CarList = [
    {
        id:1,
        make:'Honda',
        yearofRelease:2023,
        isAutomatic:false
    },
    {
        id:2,
        make:'Toyota',
        yearofRelease:2022,
        isAutomatic:true
    },
    {
        id:3,
        make:'Maruti',
        yearofRelease:2023,
        isAutomatic:false
    },
]

module.exports = {UserList,MovieList,CarList}