import React from 'react'
class Title extends React.Component{
    
    render(){
        return (
            <div>
                <header>{this.props.title}</header>
            </div>
            
        )
    }
}
export default Title