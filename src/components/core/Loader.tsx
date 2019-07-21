import React from 'react'
import styled from 'styled-components'

import LoaderImg from '../../assets/images/loader.gif'

export const Loader:React.FC = () => {
    return (
        <LoaderWrapper>
            <img src={LoaderImg} alt="" width={200} />
        </LoaderWrapper>
    )
}

const LoaderWrapper = styled.section`
    position:fixed;
    width:100%;
    height:100%
    background:rgba(255,255,255, .5);
    display:flex;
    justify-content:center;
    align-items:center
`