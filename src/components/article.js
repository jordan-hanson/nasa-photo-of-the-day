import React from "react"

function Article(props) {
    console.log(props)
    return (
        <div>
            <div>
                <h1>{props.data.title}</h1>
            </div>
            <div>
                <p>
                    {props.data.explanation}
                </p>
            </div>
        </div>
    )
}
export default Article