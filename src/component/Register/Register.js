import React from 'react'

import './Register.css'
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { postregister } from '../../reducer/authReducer';



const Register = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const initialValues = {
        username: "",
        email: "",
        password: ""
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Required'),
        email: Yup.string().required('Required'),
        password: Yup.string().min(3).max(8).required('Required'),
    });

    const { values, errors, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            dispatch(postregister(values))
            toast.success('Register Succesfully');
                setTimeout(() => {
                    navigate('/login')
                }, 3000)


            // axios.post('http://localhost:3000/register', values).then((result) => {
            //     console.log(result.data);
            //     sessionStorage.setItem('username', values.username);
            //     console.log('username', values.username);
            
            //     toast.success('Register Succesfully');
            //     setTimeout(() => {
            //         navigate('/login')
            //     }, 3000)
            // }).catch((err) => {
            //     console.log(err, "error");
            // })
            //     // action.resetForm();
        }

    })

    // const[register, setRegister]=useState({
    //     username:"" ,
    //     email:"",
    //     password:""
    // })

    // const handleChange = (e) => {
    //     setRegister({...register,[e.target.name]:e.target.value})
    //     console.log(e.target.value);

    // }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     setRegister(register);
    //     console.log(register);

    // }
    return (


        <div className="container">
           
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 register-block px-4 py-4 mt-5">
                    <form onSubmit={handleSubmit}>
                        <h2 className="heading text-center">Register</h2>
                        <hr />
                        <div class="mb-3 row">
                            <label class="col-sm-2 col-form-label">Username</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control ms-4" name="username" value={values.username} onChange={handleChange} />
                                {errors.username && touched.username ? (<p className='form-error'>{errors.username}</p>) : null}
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-sm-2 col-form-label">Email</label>
                            <div class="col-sm-9">
                                <input type="email" class="form-control ms-4" name="email" value={values.email} onChange={handleChange} />
                                {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label class="col-sm-2 col-form-label">Password</label>
                            <div class="col-sm-9">
                                <input type="password" class="form-control ms-4" name="password" value={values.password} onChange={handleChange} />
                                {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>) : null}
                            </div>
                        </div>
                        <div className="text-end">
                            <button type="submit" className="btn btn-primary btn-danger submit-btn my-4" >Back</button>
                            <button type="submit" to="" className="btn btn-primary btn-danger submit-btn my-4 ms-2" >Register</button>
                            <ToastContainer
                                autoClose={2000} />

                        </div>
                        <hr />
                        <div className="bottom d-flex">
                            <p>Already have an account?</p>
                            <Link class=" ms-2" to="/login">Login</Link>

                        </div>
                    </form>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>


    )
}

export default Register
