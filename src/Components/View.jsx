
import React, { useContext, useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import context from './Context'
import axios from 'axios'
function View() {

  let params = useParams()

  const [info, setinfo] = useState([])
  const getdata = async () => {
    try {
      const res = await axios.get(`http://localhost:3000/getmovie/${params.id}`)
      setinfo(res.data)
    } catch (error) {
      console.log("something went wrong")
    }
  }
  useEffect(() => {
    getdata()
  }, [])

  return (
    <div className='background'>
      <section class="py-5">
        <div class="container ">
          <div class="row ">
            <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" src={`${info.poster}`} style={{height:'500px'}} alt="..." /></div>
            <div class="col-md-6">
              <h1 class="display-5 fw-bolder">{info.moviename}</h1>
                <h2 class=" fw-bolder">{info.yor}</h2>
                <h2 class=" fw-bolder">{info.producer}</h2>
                <h3 class=" fw-bolder">{info.actors}</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default View
