import React, { useState, useEffect } from 'react'
import './Home.css'
import axios from 'axios'
import Navbar from "../Navbar/Navbar"
// import { useDispatch, useSelector } from 'react-redux';
// import { getQuestions } from '../../reducer/questionReducer';


const Home = () => {

    // const dispatch = useDispatch();
    // const postStatus = useSelector(state => state.Question.questionList)
    

    const [storeList, setStoreList] = useState([])
   

    const getQuestionListAPI = () => {

        // dispatch(getQuestions(""))
        axios.get('http://localhost:3000/question').then((result) => {
            console.log(result.data);
            setStoreList(result.data)
        }).catch((err) => {
            console.log(err, "err");
        })
    }

    useEffect(() => {
        getQuestionListAPI();
    }, [])

    

    return (
        <div>
            <Navbar login={`${sessionStorage.getItem('email') ? "false" : 'true'}`}/>
            <div className='container mt-5'>

                <div className='row '>

                    <div className='col-md-6 px-5 '>
                        {storeList.map((item) => {
                            return (
                                <div class="card text-bg-light mb-3 h-50" >
                                    <div class="card-header bg-danger">Hey {item.Author}</div>
                                    <div class="card-question ms-3">
                                        Q.{item.que}

                                        <hr />
                                        {item.ans?.map((ele) => {
                                            return (
                                            <div className='d-flex'>
                                              <p class="card-text">A:{ele.answer}</p> 
                                              <div className='text-end'>Ans by:{ele.author}</div>
                                             </div>
                                                
                                            )

                                        })}
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className='col-md-6 px-5'>
                        <div class=" home-card text-bg-light mb-3 mx-auto " >

                            <div class="card-body">
                                <h5 class="card-title text-center fs-4 fw-bold">Question-list</h5>
                                {storeList.map((item) => {
                                    return (
                                        <p>{item.que}</p>
                                    )
                                })}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Home
