import React from 'react'

const style ={
    height : '100vh',
    color: 'white',
    background: `linear-gradient(black,gray)`,
    padding: '20px',
    border: 'black'

}

class Container extends React.Component{
    render(){
        const {children} = this.props
        return(
            <div style={style}>
                {children}
            </div>
        )
    }
}
export default Container