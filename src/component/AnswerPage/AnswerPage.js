import React, { useState , useEffect} from 'react'
import './AnswerPage.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from "../Navbar/Navbar"
// import { useSelector } from 'react-redux'

const AnswerPage = () => {
    const navigate= useNavigate();

    // const postStatus = useSelector(state => state.Question.questionList)
    //  console.log(postStatus,"postStatus");
    
    const [getId, setId] = useState(-1);
    const [getForm, setForm] = useState({
      que:"",
      ans:""
    });
    const [getAns, setAns] = useState({})
    const [getList,setList] = useState([]);
    const getListApi = ()=>{
      axios.get('http://localhost:3000/question').then((result)=>{
        console.log(result.data);
        setList(result.data);
      }).catch(()=>{
  
      })
    }
    useEffect(()=>{
      getListApi()
    },[]);


    const clearData = () => {
        setForm({
            ans: "", que:""
        })
    }

    const onChangeHandler = (e) => {
        setAns({ [e.target.name]: e.target.value })

    }

    const linkClick=(index)=>{
        setId(index);
        setForm({
            que:getList[index].que,
            ans:getList[index].ans,
            Author:getList[index].Author,
          })    

    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/question/${getList[getId].id}`, {...getForm, ans:[...getForm.ans, {...getAns, author:sessionStorage.getItem("email").slice(0, -10)}] , email:getList[getId].email}).then(()=>{
            getListApi();
            navigate('/')  
            setId(-1);
            clearData();
            
        }).catch(()=>{

        })
    }


   

    return (
        <div>
               <Navbar/> 
           
        <div className='conatiner my-5'>
            
            <div className='row'>
                <div className='col-md-2'></div>
                <div className='col-md-8' >
                    <div className='row'>
                        <div className='col-md-5'>
                            <div class="card answer-card text-bg-light w-100 my-auto " >

                                <div class="card-body">
                                    <h5 class="card-title fs-4 fw-bold text-center">Select Question</h5>
                                    {getList.map((item, index)=>{
                                return(
                                    <div>
                                        <a class="card-text" onClick={()=>linkClick(index)}>{item.que}</a>
                                    </div>
                                )
                            })}

                                </div>
                            </div>
                        </div>
                        <div className='col-md-7'>
                            <div class="card answer-card text-bg-light w-100 my-auto " >

                                <div class="card-body">
                                  {/* {isClicked } */}
                                  <h5>Question: {getForm.que}</h5>
                                    <h3>Answer:</h3>
                                    <div class="mb-3">
                                        <textarea class="form-control" rows="10" name="answer" onChange={onChangeHandler}></textarea>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="text-end">
                                {/* <button type="submit" className="btn btn-primary btn-danger submit-btn my-4" >Cancel</button> */}
                                <button type="submit" to="" className="btn btn-primary btn-danger submit-btn my-4 ms-2" onClick={submitHandler} >Add Answer</button>

                            </div>
                    </div>


                </div>

                <div className='col-md-2'></div>
            </div>

        </div>
        </div>
    )
}

export default AnswerPage
