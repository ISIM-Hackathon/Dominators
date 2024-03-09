import {useEffect, useState} from 'react'
import '../Styles/CardsStyle.css'
import { useNavigate } from 'react-router-dom'

function Home(){
    const navigate = useNavigate([]) 

    const [data, setdata]= useState([])
    function GetAllCourses(){
        fetch('http://localhost:8123/get-all-courses').then((res)=>res.json()).then((result)=>{
            console.log(result)
            setdata(result.data)
        })
    }

    function handleViewMore(el){
        console.log(el)
        navigate('/viewCourses/' +el._id ,{state : el})


    }

    useEffect(()=>{
        GetAllCourses()
    },[])

    return(
        <>
        {data.map((el,i)=>(

        <div class="card" style={{width: '300px'}}>
          <img src={el.image} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h5 class="card-title">{el.name}</h5>
            <p class="card-text">{el.description}</p>
            <a onClick={()=>handleViewMore(el)} class="btn btn-primary">View More</a>
          </div>
        </div>
))}
        </>
    )

}

export default Home