import React from 'react';
import { render } from 'react-dom';
import { connect} from './reactRedux/index.jsx'

class Demo extends React.Component {
    changeColor = () => {
        let a = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        let c = Math.floor(Math.random() * 255)
        this.props.dispatch({
            type: 'changeColor',
            color: `rgb(${a},${b},${c})`
        })
    }
    render() {
        console.log(this.props);
        return (
        <div>
            <h2 style={{color: this.props.color}}>xzw</h2>
            <button onClick={this.changeColor}>变换颜色</button>
        </div>
    )
    }
    
}

export default connect((state)=>({color: state.color}), (dispatch) => ({dispatch}))(Demo)