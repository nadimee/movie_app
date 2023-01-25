import React from 'react'

const DescriptionAndTrailer = ({movies}) => {


  return (
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',marginTop:'10%',backgroundColor:'rgb(19, 23, 31)',width:'100%'}}>
          <iframe width="560" height="315" src={movies[0].trailerURL} title="YouTube video player"
      frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen>
      </iframe>
     <h1 style={{fontSize:'18px',fontFamily:'Arial',color:'rgb(255, 235, 214)',width:"300px",paddingLeft:'50px',textAlign: "right"}}>{movies[0].description}</h1>  
    </div>
  )
}

export default DescriptionAndTrailer


