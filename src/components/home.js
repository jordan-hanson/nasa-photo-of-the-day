import React, { useState, useEffect } from "react"
// import NavBar from "./navbar"
import Photo from "./photo"

function HomePage() {

    const [data, setData] = useState([])

    // const [urlPhoto, setUrlPhoto] = useState("")
    // const [date, setDate] = useState("")


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
        <div>
            {/* <NavBar /> */}
            <Photo data={data} />
        </div>
    )
}
export default HomePage