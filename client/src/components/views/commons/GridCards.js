// JavaScript source code

//다른 파일에서도 재사용할 수 있기 때문에 commons라는 폴더에 생성
import React from 'react'
import { Col } from 'antd';



function GridCards(props) {

    if (props.landingPage) {
        return (
            <Col lg={6} md={8} xs={24}>		//사이즈에 따라 지정
                <div style={{ position: 'relative' }}>
                    <a href={`/movie/${props.movieId}`} >
                        <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.movieName} />
                    </a>
                </div>
            </Col>
        )
    } else {
        return (
            <Col lg={6} md={8} xs={24}>
                <div style={{ position: 'relative' }}>

                    <img style={{ width: '100%', height: '320px' }} src={props.image} alt={props.characterName} />

                </div>
            </Col>
        )
    }

}

export default GridCards