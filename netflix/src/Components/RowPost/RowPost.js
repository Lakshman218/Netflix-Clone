import React,{useState,useEffect} from 'react'
import './RowPost.css'
import Youtube from 'react-youtube'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/Constant'
import YouTube from 'react-youtube'

export default function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [urlId, serUrlId] = useState('')
  useEffect(() => {
    axios.get(props.url).then(response=> {
      console.log(response.data);
      setmovies(response.data.results)
    }).catch(err=>{
      // alert('Network Error')
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length !==0) {
        serUrlId(response.data.results[0])
      }
    })
  }
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>  
      <div className="posters">
        {movies.map((obj)=> 
          <img onClick={()=>handleMovie(obj.id)} className= {props.isSmall ?'smallPoster' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" /> 
        )}
        
      </div>
      {urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  )
}
