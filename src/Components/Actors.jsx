import axios from 'axios'
import { useFormik } from 'formik'
import {useNavigate} from 'react-router-dom'

function Actors() {
    const navigate=useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            gender: '',
            dob: '',
            bio: ''
        },
        validate: (values) => {
            let error = {}
            if (values.name == '' ) {
                error.name = "Enter a valid name"
            }
            if (values.name == '' || values.name.length <= 3) {
                error.name = "Enter a valid name"
            }
            return error
        },
        onSubmit: async(values) => {
        await axios.post("http://localhost:3000/addactor",values)
           navigate('/addmovie')
        }
    })
    return (
        <div className='row mt-4'>
        <div className='d-flex container justify-content-center '>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Actor Name</label>
                    <input type="text" className="form-control" name="name" value={formik.values.name} onChange={formik.handleChange}  />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="exampleInputPassword1" name='dob' value={formik.values.dob} onChange={formik.handleChange} />
                </div>
                <div className="mb-3">
                    <input type="radio" className="form-check-input" name='gender' value="male" onChange={formik.handleChange} />
                    <label  for="exampleCheck1" className='mx-2'>Male</label>
                    <input type="radio" className="form-check-input" name='gender' value="female" onChange={formik.handleChange} />
                    <label  for="exampleCheck2" className='mx-2'>Female</label>
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Role</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" name='bio' value={formik.values.bio} onChange={formik.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div>
    )
}

export default Actors
