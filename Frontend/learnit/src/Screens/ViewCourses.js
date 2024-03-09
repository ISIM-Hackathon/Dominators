import {useLocation} from 'react-router-dom'




function ViewCourses(){
    // const{state} =useLocation()
    // console.log(state)

    const dirs = RNFetchBlob.fs.dirs
    const filePath = `${dirs.DownloadDir}/C:/Users/anjal/OneDrive/Documents/pexels.mp4`;

    return(
        

            <div class="card" style={{width: '300px'}}>
            



<video source={{uri: filePath }}
          volume={50}
          resizeMode="cover"
  />
            </div>

            // <video>
            //     <source src={require(`src/Screens/pexels_videos_1321208 (2160p).mp4`)} type='video/mp4'/>
            // </video>

    )
}
export default ViewCourses;