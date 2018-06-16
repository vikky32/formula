import React from 'react'


import Data from './data.jsx'



export default class Home extends React.Component {
    render() {
        return (
            <div className="container">
               <MainBlock></MainBlock>
                <Data></Data>

            </div>
        )
    }
}

class MainBlock extends React.Component{
    render(){
        return(
            <div className="mainContainer">
                <div className  = "mainInfo">
                    <img id="hotdogLogo" src="images/hotdog.png"/>
                        <div className="mainText">Dirty Dogs serves all-beef, vegan and vegetarian hot dogs. </div>
                        <button id="orderBtn">More Dogs`n Make Em Hot</button>
                </div>
            </div>
        )
}
}

