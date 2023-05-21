import React from 'react'
import './Login.css'
import { useFormik } from 'formik'
import * as Yup from "yup";
import axios from 'axios'
import { useNavigate , Link} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { getRegister } from '../../reducer/authReducer';

const Login = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { registerList } = useSelector((state) => state.Auth)
    console.log("registerList",registerList);

    const initialValues = {
         email:"",
         password:""
    }

        const validationSchema = Yup.object().shape({
          email: Yup.string().required('Required'),
          password: Yup.string().min(3).max(8).required('Required'),
        });

    const {values, errors,touched, handleChange, handleSubmit}=useFormik({
        initialValues:initialValues,
        validationSchema,
        onSubmit : (values)=>{
            dispatch(getRegister(values))
            if(registerList && registerList.length>0){
                sessionStorage.setItem('email', values.email);
                toast.success('Login Succesfully');
                setTimeout(()=>{
                navigate('/')
                }, 3000) 
                
            }else{
                alert("email and password not match")
            }

        //     axios.get(`http://localhost:3000/register?email=${values.email}&password=${values.password}`).then((result)=>{
        //     if(result.data && result.data.length>0){
        //         sessionStorage.setItem('email', values.email);
        //         console.log("email", values.email);
        //         toast.success('Login Succesfully');
        //        setTimeout(()=>{
        //         navigate('/')
        //        }, 3000) 
                
        //     }else{
        //         alert("email and password not match")
        //     }
            
        //   }).catch((err)=>{
        //         console.log(err, "error");
        //   })
         //  action.resetForm();
        }
        
    })

    // const[login, setLogin]=useState({
    //     email:"",
    //     password:""
    // })

    // const handleChange = (e) => {
    //     setLogin({...login,[e.target.name]:e.target.value})
    //     console.log(e.target.value);

    // }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     setLogin(login);
    //     console.log(login);
        
    // }
  return (
    <div className="container">
    <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 login-block px-4 py-4 mt-5">
            <form onSubmit={handleSubmit}>
                <h2 className="heading text-center">Login</h2>
                <hr />
            
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-9">
                        <input type="email" class="form-control ms-4" name="email" value={values.email} onChange={handleChange} />
                        {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>):null}

                    </div>
                </div>
                <div class="mb-3 row">
                    <label  class="col-sm-2 col-form-label">Password</label>
                    <div class="col-sm-9">
                        <input type="password" class="form-control ms-4" name="password" value={values.password} onChange={handleChange}/>
                        {errors.password && touched.password ? (<p className='form-error'>{errors.password}</p>):null}

                    </div>
                </div>
                <div className="text-end">
                    <button type="submit" className="btn btn-primary btn-danger submit-btn my-4" >Back</button>
                    <button type="submit" className="btn btn-primary btn-danger submit-btn my-4 ms-2" >Login</button>

                </div>
                <ToastContainer
                autoClose={2000}/>
                <hr />
                <div className="bottom d-flex">
                    <p>Don't have an account?</p>
                    <Link class=" ms-2" to="/register">Register</Link>

                </div>
            </form>
        </div>
        <div className="col-md-4"></div>
    </div>
</div>
  )
}

export default Login
