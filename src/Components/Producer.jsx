
import axios from 'axios'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
function Producer() {
    const navigate=useNavigate()
     const formik = useFormik({
            initialValues: {
                name:'',
                gender: '',
                dob: '',
                bio: ''
            },
            validate: (values) => {
                let error = {}
              
                return error
            },
            onSubmit: async(values) => {
               await axios.post("https://imdbclone-backend-aiar.onrender.com/addproducer",values)
                navigate('/addmovie')
            }
        })
  return (
    <div className='row mt-4'>
        <div className='d-flex container justify-content-center '>
            <form onSubmit={formik.handleSubmit}>

                <div className="mb-3">
                    <label for="name" className="form-label">Producer</label>
                    <input type="text" className="form-control" id="name" name='name' value={formik.values.name} onChange={formik.handleChange} />
                </div>
              
                <div className="mb-3">
                    <label for="dob" className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" name='dob' value={formik.values.dob} onChange={formik.handleChange} />
                </div>
                <div className="mb-3">
                    <input type="radio" className="form-check-input" name='gender' value="male" onChange={formik.handleChange} />
                    <label  for="exampleCheck1" className='mx-2'>Male</label>
                    <input type="radio" className="form-check-input" name='gender' value="female" onChange={formik.handleChange} />
                    <label  for="exampleCheck2" className='mx-2'>Female</label>
                </div>
                <div className="mb-3">
                    <label for="bio" className="form-label">Role</label>
                    <input type="text" className="form-control" id="bio" name='bio' value={formik.values.bio} onChange={formik.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </div> 
  )
}

export default Producer
