import React, { useState } from 'react'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom';
function Addmovie() {
    const prod=['aaa','bbbb']
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            moviename: '',
            yor: '',
            poster: '',
            producer: '',
            actors: []
        },
        validate: (values) => {
            let error = {};
            return error
        },
        onSubmit: (values) => {
            console.log(values)
            navigate('/')
        }
    })
    return (
        <div className=' row '>
            <div className='d-flex justify-content-center'>
                <form className=' mt-5' onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Movie Name</label>
                        <input type="text" className="form-control" name="moviename" placeholder="Movie Name" value={formik.values.moviename} onChange={formik.handleChange} />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlInput1">Year Of Release</label>
                        <input type="date" className="form-control" name="yor" value={formik.values.yor} onChange={formik.handleChange} />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlInput1">Poster</label>
                        <input type="text" className="form-control" name="poster" value={formik.values.poster} onChange={formik.handleChange} />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="exampleFormControlInput1">Producer</label>
                        <input type="text" className="form-control" name="producer" placeholder="Name of the producer" value={formik.values.producer} onChange={formik.handleChange} />
                        <Link className="btn btn-primary mt-1" to='/addproducers'>New Producer</Link>
                    </div>
                    <div className="form-group mt-2 ">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Actors</label>
                        <input type="text" className="form-control" name="producer" placeholder="Name of the Actor" value={formik.values.actors} onChange={formik.handleChange} />
                        <Link className="btn btn-primary mt-1" to="/addactor" >New Actor</Link>
                    </div>
                    <button type='submit' className='btn btn-primary mt-2'>Add Movie</button>
                </form>
            </div>
        </div>
    )
}

export default Addmovie
