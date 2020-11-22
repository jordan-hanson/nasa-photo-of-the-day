import React from "react"

function Photo(props) {

    return (
        <div>
            <img alt="NPOTD" src={props.data.url} />
        </div>
    )
}
export default Photo