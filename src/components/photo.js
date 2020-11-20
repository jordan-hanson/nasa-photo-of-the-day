import React, { useEffect, useState } from "react"

function Photo(props) {
    // const data = props;
    console.log(props)
    // const [photo, setPhoto] = useState([])

    // useEffect((props) => {
    //     fetch(data.url)
    //         .then(res => setPhoto(res))
    //         .catch(err => console.log(err))
    // })

    return (
        <div>
            <img alt="NPOTD" src={props.data.url} />
        </div>
    )
}
export default Photo