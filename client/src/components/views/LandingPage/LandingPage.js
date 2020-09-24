import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY,IMAGE_BASE_URL } from '../../Config';
//config에 저장해 놓은 API URL과 API KEY를 사용하여 URL을 연결할 떄 편하게 사용
import MainImage from './Sections/Mainimage';
import axios from 'axios';

function LandingPage() {

	const [Movies, setMovies] = useState([])
    const [MainMovieImage, setMainMovieImage] = useState(null)

	useEffect(()=>{
		 const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

		fetch(endpoint)
		.then(response => response.json())
		.then(response => {

			console.log(response)
		
			setMovies([...response.results])
			setMainMovieImage(response.results[0])
			})

	},[])




    return (
        <>
           <div style={{width : '100%', margin : '1rem auto'}}>
				{/*Main Image*/}

				{MainMovieImage &&
				<MainImage
				 image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                 title={MainMovieImage.original_title}
                 text={MainMovieImage.overview}
				 />
				 }
				<h2>Movie by Latest</h2>
				<hr />

				{/*Movie Grid Cards*/}

				</div>

				<div style={{display : 'flex',justifyContent: 'center'}}>
					<button> Load more</button>
				</div>
        </>
    )
}

export default LandingPage
