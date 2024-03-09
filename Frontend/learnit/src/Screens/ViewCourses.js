import {useLocation} from 'react-router-dom'


function ViewCourses(){
    const{state} =useLocation()
    console.log(state)

    return(
        

            <div class="card" style={{width: '300px'}}>
              <img src={state.video} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">{state.name}</h5>
                <p class="card-text">{state.description}</p>
                {/* <a onClick={()=>handleViewMore(el)} class="btn btn-primary">View More</a> */}
              </div>
            </div>

    )
}
export default ViewCourses