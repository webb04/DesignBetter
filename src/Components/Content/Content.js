import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const fadeAnimation = keyframes`${fadeInUp}`;

const Section = styled.section`
    padding: 4em 7px;
`;

const Feature = styled.section`
    width: ${props => `calc(100% / ${props.number})`};
    max-width: 33%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 4em;
    animation: .4s ${fadeAnimation};
    border: none;
`;

const Image = styled.img`
    width: 50%;
    height: 50%;
    text-align: center;
`;

const FeatureTitle = styled.div`
    margin: 10px 0;
`;

const FeatureSubtitle = styled.div`
    width: 60%;
    font-weight: 300;
    font-size: 14px;
    text-align: center;
    color: #495367;
`;

const Content = ({ features }) => (
    <Section>
        {
        	features.map(({ image, title, subtitle }, i) => {
        		return (
          			<Feature className="feature" number={3} key={`feature-${i}`}>
            			<Image src={`/Images/${image}`}/>
            			<FeatureTitle>{title}</FeatureTitle>
            			<FeatureSubtitle>{subtitle}</FeatureSubtitle>
          			</Feature>
        		)
      		})
    	}
  	</Section>
)

Content.propTypes = {
    features: PropTypes.arrayOf(PropTypes.shape({
        image: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired
    })).isRequired
}

export default Content;