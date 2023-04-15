const {gql} = require('apollo-server')

const typeDefs = gql`
    type User{
        id:ID!
        name:String!
        username:String!
        age:Int!
        nationality:Nationality!
        friends:[User]!
        favoriteMovies:[Movie]
    }
    

    type Movie{
        id:ID!
        name:String!
        yearOfPublication:Int!
        isInTheaters:Boolean!
    }

    type Car{
        id:ID!
        make:String!
        yearOfRelease:Int!
        isAutomatic:Boolean!
    }

    type Query{
        users:[User!]!
        user(id:ID!):User!
        movies:[Movie!]
        movie(name:String!):Movie!
        cars:[Car!]
        car(make:String!):Car!
    }

    input CreateUserInput{
        name:String!
        username:String!
        age:Int!
        nationality:Nationality=BRAZIL
    }
    input UpdateUsernameInput{
        id:ID!
        newUsername:String!
    }
    type Mutation{
        createUser(input:CreateUserInput!):User
        updateUsername(input:UpdateUsernameInput!):User
        deleteUser(id:ID!):User
    }


    enum Nationality{
        CANADA,
        BRAZIL,
        INDIA,
        SPAIN,
        USA
    }

    type UserSuccessfulResult{
        users:[User!]!
    }
    type UserErrorResult{
        message:String!
    }
    union UsersResult = UserSuccessfulResult| UserErrorResult
`;

module.exports = {typeDefs}