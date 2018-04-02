import React from 'react'
import Header from './Header'
import Footer from './Footer'
class Layout extends React.Component{
    constructor(){
        super()
        this.state = {title : 'Will'}
    }
    render(){
        setTimeout(() => {
            this.setState({
                title: 'welcome will!'
            })
        }, 1000);
        return (
            <div>
                <Header title={this.state.title}/>
                <Footer />
            </div>
        )
    }
}
export default Layout