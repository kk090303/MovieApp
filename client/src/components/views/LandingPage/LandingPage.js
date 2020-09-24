import React, {useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import { API_URL, API_KEY,IMAGE_BASE_URL } from '../../Config';
//config�� ������ ���� API URL�� API KEY�� ����Ͽ� URL�� ������ �� ���ϰ� ���
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
