import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageUrl} from '../../Constants/Constant'

export default function RowPost(props) {
  const [movies, setmovies] = useState([])
  useEffect(() => {
    axios.get(props.url).then(response=> {
      console.log(response.data);
      setmovies(response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })
  },[])
  return (
    <div className='row'>
      <h2>{props.title}</h2>  
      <div className="posters">
        {movies.map((obj)=> 

          <img className= {props.isSmall ?'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />

        )}
        
      </div>
    </div>
  )
}
