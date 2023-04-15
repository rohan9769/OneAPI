import { useQuery,gql,useLazyQuery, useMutation } from "@apollo/client";
import React, { useState } from "react";

const QUERY_ALL_USERS = gql`
    query GetAllUsers{
        users{
            id
            name
            username
            age
            nationality
        }
    }
`

const QUERY_ALL_MOVIES = gql`
    query GetAllMovies{
        movies {
            name
            
        }
    }
`

const GET_MOVIE_BY_NAME = gql`
    query Movie($name:String!){
        movie(name:$name){
            name
            yearOfPublication
        }
    }
`

const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input:CreateUserInput!){
        createUser(input:$input){
            name
            id
        }
    }
`

export const DiplayData = () =>{
    const [movieSearched,setMovieSearched] = useState('')

    //Create User states
    const [name,setName] = useState('')
    const [username,setUsername] = useState('')
    const [age,setAge] = useState(0)
    const [nationality,setNationality] = useState('')

    

    const {data,loading,refetch} = useQuery(QUERY_ALL_USERS)
    const {data:movieData , loading:movieLoading} = useQuery(QUERY_ALL_MOVIES)
    const [fetchMovie,{data:movieSearchedData,error:movieError}] = useLazyQuery(GET_MOVIE_BY_NAME)

    const [createUser] = useMutation(CREATE_USER_MUTATION)
    
    return(
        <>
            <div>
                <input onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name"></input>
                <input onChange={(e)=>{setUsername(e.target.value)}} type="text" placeholder="Username"></input>
                <input onChange={(e)=>{setAge(e.target.value)}} type="number" placeholder="Age"></input>
                <input onChange={(e)=>{setNationality(e.target.value.toUpperCase())}} type="text" placeholder="Nationality"></input>
                <button onClick={()=>{
                    createUser({variables:{input:{name,username,age:21,nationality}}})
                    refetch()
                }}>Create a user</button>
            </div>
            {data && data.users.map((user)=>{
                return (
                <div>
                    <h1>Name : {user.name}</h1>
                    <h2>Username : {user.username}</h2>
                    <h3>Age : {user.age}</h3>
                </div>)
            })}
            
            {movieData && movieData.movies.map((movie)=>{
                return <h1>Name of Movie  = {movie.name}</h1>
            })}

            <div>
                <input type="text" placeholder="Interstellar" onChange={(e)=>setMovieSearched(e.target.value)}></input>
                <button onClick={()=>fetchMovie({variables:{
                    name:movieSearched
                }})}>Search</button>
                <div>
                    {movieSearchedData && <div><h1>Moviename : {movieSearchedData.movie.name}</h1></div>}
                </div>
            </div>
        </>
    )
}