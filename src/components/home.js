import React, { useState, useEffect } from "react"
import NavBar from "./navbar"
import Photo from "./photo"
import Article from './article'
import { BrowserRouter as Router } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import "../style/home.css"
import styled from 'styled-components'


const Layout = styled.col`
    width: 100%;
`;

// const CustomArt = styled.article`
//     width: 100%;
// `;

function HomePage() {

    const [data, setData] = useState([])

    useEffect(() => {
        async function getUrlPhoto() {
            await fetch("https://api.nasa.gov/planetary/apod?api_key=aBlQYbpW9BZXFaEsXvHLBiGxcvEA6tbPh4m95ftY")
                .then((res) => res.json())
                .then((data) => {
                    setData({
                        url: data.url,
                        title: data.title,
                        date: data.date,
                        explanation: data.explanation
                    });
                    console.log(data)
                })
                .catch((err) => console.log(err))
        }
        getUrlPhoto()
    }, [])

    return (
        <Router>
            <div className="nav">
                <NavBar />
            </div>

            <Container>
                <Row className="row">
                    <Col>
                        <Photo data={data} />
                    </Col>
                    <Col>
                        <Article data={data} />
                    </Col>
                </Row>
            </Container>

        </Router>
    )
}
export default HomePage