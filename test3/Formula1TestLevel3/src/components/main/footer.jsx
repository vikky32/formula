import React from 'react'
import {Link} from 'react-router-dom'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
               <FooterBlock></FooterBlock>
            </footer>
        )
    }
}

class FooterBlock extends React.Component{
    render(){
        return(
            <div className="additions">
                <div id="rightsText">&reg; 2016 Dirty Dogs all right reserved</div>
                <div className="contactInfo">
                    <div className="contactInfoItem address">274 Marconi Bivd. Columbus, Ohio 43215</div>
                    <div className="contactInfoItem" id="coordinates">614538.0095.</div>
                    <div className="contactInfoItem">
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </div>
        )
    }
}