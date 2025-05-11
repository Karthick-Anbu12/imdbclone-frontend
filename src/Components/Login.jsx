import axios from 'axios';
import { useFormik } from 'formik'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import context from './Context';

function Login() {
    const navigate = useNavigate()
    const { getdata, setloggedin } = useContext(context)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validate: (values) => {
            let error = {};
            return error;
        },
        onSubmit: async (values) => {
            try {
                const response = await axios.post("http://localhost:3000/login",values)
                if (response.status == 200) {
                    window.localStorage.setItem("mytoken", response.data.message)
                    navigate('/')
                    setloggedin(true)
                    getdata()
                }
            } catch (error) {

            }

        }
    })
    return (
        <div className='row mt-5'>
            <div className='container d-flex  justify-content-center align-item-center'>
                <form onSubmit={formik.handleSubmit}>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="email" name='email' value={formik.values.name} onChange={formik.handleChange} />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name='password' value={formik.values.password} onChange={formik.handleChange} />
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>

            </div>

        </div>
    )
}

export default Login
