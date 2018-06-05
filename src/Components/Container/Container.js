import 'intersection-observer';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import options from '../../options';
import debounce from '../../utils';

import Option from '../Option/Option';
import Content from '../Content/Content';
import MobileView from '../MobileView/MobileView';

const DesktopView = styled.section`
    padding: 2em 6em;
    @media (max-width: 968px) {
        padding: 2em;
    }
`;

const StyledOption = styled.div`
    width: ${props => `calc(99% / ${props.number})`};
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
`;

class Container extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: 0,
            progress: 0,
            automaticSwap: true,
            pauseProgress: false
        }
        this.resize = debounce(this.resize.bind(this));
    }

    componentDidMount() {
        this.startLoop();
        this.resize();
        this.createObserver();
        window.addEventListener('resize', this.resize);
    }
    
    createObserver() {
        const io = new IntersectionObserver(
            entries => {
                if (!this.state.mobile) {
                    this.setState({ pauseProgress: !entries[0].isIntersecting });
                }
            }
        );

        const element = document.getElementById('option-wrapper');
        if (element) {
            io.observe(element);
        }
    }

    resize() {
        this.setState({ mobile: window.innerWidth <= 768 });
    }

    componentWillUnmount(){
        clearInterval(this.state.interval);
        window.removeEventListener('resize', this.resize);
    }

    startLoop() {
        const interval = setInterval(() => {
            const { progress, automaticSwap, selected, pauseProgress } = this.state;
            if (pauseProgress) return;
            if (progress > 100) {
                const updated = automaticSwap 
                    ? selected === 2 ? 0 : selected + 1
                    : selected

                this.setState({ progress: automaticSwap ? 0 : 100, selected: updated })
            } else {
                this.setState({ progress: progress + this.props.increment })
            }
        }, 16);
        this.setState({ interval })
    }

    selectOption(selected) {
        this.setState({ selected, progress: 0, automaticSwap: false });
    }

    render() {
        const { selected, progress, mobile } = this.state;
        return mobile 
            ? <MobileView options={options}/>
            : <DesktopView>
                <span id="option-wrapper">
                    {
                        options.map(({ title, subtitle }, i) => {
                            const onClick = this.selectOption.bind(this, i);
                            return (
                                <StyledOption type="button" className="option" number={options.length} key={`option-${i}`}>
                                    <Option 
                                        onClick={onClick} 
                                        selected={i === selected}
                                        title={title}
                                        subtitle={subtitle}
                                        progress={progress}
                                    />
                                </StyledOption>
                            )
                        })
                    }
                </span>
                <Content features={options[selected].features} />
            </DesktopView>
    }
}

Container.propTypes = {
    increment: PropTypes.number
}

Container.defaultProps = {
    increment: 0.15
}

export default Container;
