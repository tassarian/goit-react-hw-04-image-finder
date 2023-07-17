import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }
    ul{
    list-style: none ;
    padding: 0;
    }
    img{
        display: block;
    }
`;

export const Container = styled.div`
	display: block;
`;

export const Section = styled.div`
	width: ${props => props.w || '1160px'};
	height: ${props => props.h || 'auto'};
	margin: ${props => props.m || 'auto'};
`;
