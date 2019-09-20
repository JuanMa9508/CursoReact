import React , {Component} from "react"
import {connect} from "react-redux"


const styleLink = {
    margin: '2px',
   
  };


class Header extends Component {
    render(){
        let {links} = this.props
        return(
            <header>
                <h1>SPA</h1>
                <nav>
                {links.map(link=>
                    <a href="#"key={link} style={styleLink}>{link}</a>
                )}
                </nav>
            </header>
        )
    }
}

let mapStateToProps = store  =>{
    return {links: store.links}
}
export default connect(mapStateToProps,null)(Header)