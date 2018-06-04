import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    background: none;
    font-family: "Maison Neue";
    width: 100%;
    letter-spacing: 0.2px;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translate(0px, -5px);
        cursor: pointer;
    }

    &:active, &:focus {
        outline: 0;
        color: inherit;
    }
`;

const Title = styled.h3`
    margin-bottom: 5px;
`

const Subtitle = styled.h4`
    color: #8A959E;
    font-weight: 300;
    margin-top: 5px;
`

const Progress = styled.div`
    width: 100%;
    background: rgb(222, 224, 227);
    height: 1px;
    border-radius: 3px;
`

const Bar = styled.div.attrs({
    style: ({ selected, progress }) => ({
        display: selected ? 'block' : 'none',
        width: `${progress}%`,
    })
})`
    background: #FF3366;
    height: 1px;
    border-radius: 3px;
`

const Option = ({ onClick, title, subtitle, progress, selected }) => (
    <StyledButton onClick = {onClick}>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Progress>
            <Bar className="bar" progress={progress} selected={selected}/>
        </Progress>
    </StyledButton>
)

Option.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    progress: PropTypes.number.isRequired,
    selected: PropTypes.bool.isRequired,
}

export default Option;