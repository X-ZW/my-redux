import React from "react";
import { MyContext } from './context.jsx'


export class Provider extends React.Component {
    render() {
        let { children, store } = this.props
        return (
            <MyContext.Provider value={store}>
                {children}
            </MyContext.Provider>
        )
    }
}

export function connect(mapStateToProps, mapDispatchToProps) {
    return function (Component) {
        return class Temp extends React.Component {
            constructor(props, context) {
                super(props, context)
                this.state = mapStateToProps(context.getState())
                this.dispatch = mapDispatchToProps(context.dispatch)
            }
            static contextType = MyContext
            componentDidMount() {
                this.context.subscribe(() => {
                    console.log(mapStateToProps(this.context.getState()), 'xzw');
                    this.setState(mapStateToProps(this.context.getState()))
                })
            }
            render() {
                return <Component {...this.props} {...this.state} {...this.dispatch}/>    
            }
        }
    }
}