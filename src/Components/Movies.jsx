import React, { useContext } from 'react'
import Moviecard from './Moviecard'
import context from './Context'

function Movies() {
  const {movies}=useContext(context)
  return (
    <div className='container p-3 d-flex flex-wrap justify-content-around'>
      {
        movies.map((item,index)=>{
          return <Moviecard item={item} index={index}/>
        })
      }
      
     
    </div>
  )
}

export default Movies
