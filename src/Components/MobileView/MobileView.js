import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.section`
	margin-left: 20px;
`;

const Images = styled.section`
	display: flex; 
	width: 100%;
	overflow: scroll;
`;

const Feature = styled.div`
	margin-bottom: 60px;
	letter-spacing: 0.2px;
`;

const Image = styled.img`
	height: 150px;
	margin-right: 20px;
`;

const Subtitle = styled.div`
	margin: 5px 0 10px 0;
	font-weight: 300;
	color: #8A959E;
	font-size: 12px;
`;

const ImageTitle = styled.span`
	font-size: 14px;
`;

export const getMobileUrl = url => `/Images/${url.replace('.png', '--mobile.png')}`;

const MobileView = ({ options }) => (
	<Wrapper>
    	{
        	options.map(({ title, subtitle, features }, i) => {
            	return (
                	<Feature key={`mobile-feature-${i}`}>
                    	<div>{title}</div>
                    	<Subtitle>{subtitle}</Subtitle>
                    	<Images>
                        	{
                            	features.map(({ image, title }, i) => {
                            		return (
                                		<div key={`mobile-image-${i}`} className="image">
                                    		<Image src={getMobileUrl(image)}/>
                                    		<ImageTitle>{title}</ImageTitle>
                                		</div>
                                	)
                        		})
                        	}
                    	</Images>
                	</Feature>
            	)
        	})
        }
    </Wrapper>
)

MobileView.propTypes = {
	options: PropTypes.arrayOf(PropTypes.shape({
    	title: PropTypes.string.isRequired,
		subtitle: PropTypes.string.isRequired,
		features: PropTypes.arrayOf(PropTypes.shape({
			title: PropTypes.string.isRequired,
			image: PropTypes.string.isRequired,
		})).isRequired
    })).isRequired
}

export default MobileView;