import {useEffect, useState} from 'react'
import '../Styles/CardsStyle.css'

function Home(){

    const [data, setdata]= useState([])
    function GetAllCourses(){
        fetch('http://localhost:8123/get-all-courses').then((res)=>res.json()).then((result)=>{
            console.log(result)
            setdata(result.data)
        })
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
            <a href="#" class="btn btn-primary">{el.duration}</a>
          </div>
        </div>
))}
        </>
    )

}

export default Home