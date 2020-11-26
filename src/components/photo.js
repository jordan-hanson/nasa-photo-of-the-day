import React from "react"
import styled from 'styled-components'

const CustomPhoto = styled.img`
    width: 100%;
`;

function Photo(props) {

    return (
        <div>
            <CustomPhoto alt="NPOTD" src={props.data.url} />
        </div>
    )
}
export default Photo