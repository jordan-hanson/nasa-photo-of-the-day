import React from "react"
import styled from 'styled-components'

const CustomH1 = styled.h1`
    padding-top: 35px;
    padding-bottom: 5px;
`;

function Article(props) {
    console.log(props)
    return (
        <div>
            <div>
                <CustomH1>{props.data.title}</CustomH1>
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