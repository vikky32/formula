import React from 'react';
const URL =  'https://formula-test-api.herokuapp.com/menu';
 export default class Data extends React.Component{
    constructor(props) {
        super(props);
          this.state = {
            hotdogs: [],
        };
    }
    componentWillMount(){
        this.loadHotdogs();
    }
    loadHotdogs(){
        fetch(URL)
            .then(response => {
                if (!response.ok){
                    if(response.status >=400 && response.status < 500){
                        return response.json().then(data =>{
                           let err = {errMessage: data.message};
                           throw err;
                        })
                    } else {
                        let err =  {errMessage:'Something went wrong'};
                        throw err;
                    }
            }
            return response.json();
            })
            .then(hotdogs => this.setState({hotdogs}));

 }

    render(){
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth()+1;
        let year = today.getFullYear();
        if(day<10) {
            day = '0'+day
        }
        if(month<10) {
            month = '0'+month
        }
        today = month+ '-' + day + '-' +year;

        const hotdogArr = this.state.hotdogs.filter((item, index) => item.expirationDate> today );

        const itemsList = hotdogArr.map((item, index) =>(

            <div className="hotdogGridItemWrapper" key={index}>
                <div className="hotdogGridItem">
                    <div className="hotdogBlock">
                        <div className="line"> </div>
                        <div className="textWrap">
                            <div className="hotDogName">{item.name}</div>
                            <div className="hotDogDescription">
                                {item.description}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="imageContainer">
                    <img className="hotdogGridItem hotDogImg" src={item.backgroundURL}/>
                </div>
            </div>
        ));

        return(
            <div className= "hotdogGrid">
                    {itemsList}
            </div>
        )
    }

}




