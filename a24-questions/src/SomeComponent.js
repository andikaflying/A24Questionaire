import React, { Component } from 'react'
import withSetHeight from './withSetHeight'

class SomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0 };
        this.updateWidth = this.updateWidth.bind(this);
    }
      
    componentDidMount() {
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth);
    }
      
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    }
      
    updateWidth() {
        this.setState({ width: window.innerWidth});
    }
    
    render() { 
        const { height, updateHeight } = this.props

        let divStyle = {
            border: 'black 1px solid',
            height: height,
            backgroundColor: 'red'
        };

        return ( 
            <div style={divStyle} >
                Width : {this.state.width} <br />
                <input type='text' onKeyPress={updateHeight} /> <br />
                <span> Example height type : 600px and with spacing </span>
            </div>
        );
    }
}

export default withSetHeight(SomeComponent, 400);

