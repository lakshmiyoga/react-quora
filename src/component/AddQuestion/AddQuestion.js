import React, { useState } from 'react'
import './AddQuestion.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../Navbar/Navbar"
// import { useDispatch } from 'react-redux';
// import { postQuestions } from '../../reducer/questionReducer';


const AddQuestion = () => {

    const navigate = useNavigate();
    // const dispatch = useDispatch();

    const [getQusetion, setQuestion] = useState({})


    const onChangeHandler = (e) => {
        setQuestion({ ...getQusetion, [e.target.name]: e.target.value, ans:[] })

    }

    const submitHandler = (e) => {
        e.preventDefault();
        // dispatch(postQuestions( { ...getQusetion, email: sessionStorage.getItem('email') }))
        // toast.success('Question Added');
        //     setTimeout(() => {
        //         navigate('/')
        //     }, 3000)
        //     clearData();


        axios.post('http://localhost:3000/question',
         { ...getQusetion, 
            email: sessionStorage.getItem('email'),
             Author: sessionStorage.getItem('email').slice(0,-10) }).then((result) => {
            console.log(result.data);
            toast.success('Question Added');
            setTimeout(() => {
                navigate('/')
            }, 3000)
            

        }).catch()
    }

    return (
        <div>
            <Navbar/>
        
        <div className="container my-5">
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <div className="add-search-form mx-auto">
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" name="que" placeholder="Questions:" onChange={onChangeHandler} />
                        </form>
                    </div>

                    <div className='buttons text-end my-3'>
                        {/* <Link class="btn btn-danger" href="#">Cancel</Link> */}
                        <button class="btn btn-danger ms-2" to="/" onClick={submitHandler}>Add question</button>
                        <ToastContainer
                            autoClose={2000} />

                    </div>
                </div>

                <div className="col-md-2"></div>

            </div>
        </div>
        </div>




    )
}

export default AddQuestion
