const {UserList,MovieList,CarList} = require('../FakeData')
const _ = require('lodash')
const resolvers = {
    Query:{
        // USER RESOLVERS
        users:(parent,args,context)=>{
            if(UserList){
                return UserList
            }
            else{
                return {message:'YO there was an error'}
            }
            
        },
        user:(parent,args)=>{
            const id = args.id
            const user = _.find(UserList,{id:Number(id)})
            return user;

        },
        // MOVIE RESOLVERS
        movies:()=>{
            return MovieList
        },
        movie:(parent,args)=>{
            const name = args.name
            const movie = _.find(MovieList,{name:name})
            return movie;
        },

        // CAR RESOLVERS
        cars:()=>{
            return CarList
        },
        car:(parent,args)=>{
            const make = args.make
            const car = _.find(CarList,{make:make})
            return car
        }
    },
    User:{
        favoriteMovies:(parent)=>{
            console.log(parent)
            return _.filter(MovieList,(movie)=>movie.yearOfPublication>=2010 && movie.yearOfPublication<=2023)
        }
    },
    Mutation:{
        createUser:(parent,args)=>{
            const user = args.input
            const lastId = UserList[UserList.length-1].id
            user.id = lastId+1
            UserList.push(user)
            return user
        },
        updateUsername:(parent,args)=>{
            const id = args.input.id
            const newUsername = args.input.newUsername
            let userUpdated;
            UserList.forEach((user)=>{
                if(user.id===id){
                    user.username = newUsername
                    userUpdated = user
                }
            })
            return userUpdated
            
        },
        deleteUser:(parent,args)=>{
            const id = args.id;
            _.remove(UserList,(user)=>user.id===Number(id))
            return null
        }
    },
    UsersResult:{
        __resolveType(obj){
            if(obj.users){
                return obj.users
            }
            return obj.message
        }
    }
}

module.exports = {resolvers}