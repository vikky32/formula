import React from 'react'
import {Link} from 'react-router-dom'



export default class Header extends React.Component {
    render() {
        return (
        <header className="header">
            <HeaderGrid></HeaderGrid>
            <NavList></NavList>

        </header>
        )
    }
}

class HeaderGrid  extends React.Component{
    render(){
        return(
            <div className="photoGrid">
                <img className="hotdogPhoto"  src = '/images/photo1.png'/>
                <img className="hotdogPhoto"  src = '/images/photo2.png'/>
                <img className="hotdogPhoto"  src = '/images/photo3.png'/>
                <img className="hotdogPhoto"  src = '/images/photo4.png'/>
                <img className="hotdogPhoto"  src = '/images/photo5.png'/>
                <img className="hotdogPhoto"  src = '/images/photo2.png'/>
                <img className="hotdogPhoto"  src = '/images/photo7.png'/>
                <img className="hotdogPhoto"  src = '/images/photo8.png'/>
                <img className="hotdogPhoto"  src = '/images/photo9.png'/>
                <img className="hotdogPhoto"  src = '/images/photo10.png'/>
                <img className="hotdogPhoto"  src = '/images/photo11.png'/>
                <img className="hotdogPhoto"  src = '/images/photo8.png'/>
            </div>
        )
    }
}

class NavList extends React.Component {
    render() {
        return (
            <nav className="topMenu">
                <ul className="topMenuLIst">

                    <Link to = {'/'}>
                        <li className="classItem">MENU</li>
                    </Link>
                    <Link to = {'/'}>
                        <li className="classItem">CATERING</li>
                    </Link>
                    <Link to = {'/'}>
                        <li className="classItem">ABOUT US</li>
                    </Link>
                    <Link to={'/contact'}>
                        <li className="classItem">CONTACT</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}
