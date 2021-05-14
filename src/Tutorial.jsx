import React from 'react';
import axios from 'axios';

class Tutorial extends React.Component {
    constructor (){
        super();

        this.state = {
            counter: 0 ,
            data: null,
        }
        
        this.increaseCounter = this.increaseCounter.bind(this); //绑定事件
        this.fetchRandomData = this.fetchRandomData.bind(this);
    };
       

    increaseCounter(){
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    }

    fetchRandomData() {
        axios.get('https://randomuser.me/api')
        .then((res) => {
            this.setState ((prevState) => ({
                counter: prevState.counter,
                // data: JSON.stringify(res.data.results[0], null,2) //不加null,2时就只显示内容，不显示按钮和counter
                data: res.data.results[0]
            }))
        })
        .catch((err) => {});
    }

    render() {
        const {counter, data} = this.state;

        return (
            <div style={{display: 'flex', justifyContent: 'center', alignItems:'center',height:'100vh'}}>
                <p>{counter}</p>
                <button onClick={this.increaseCounter}>Increase Counter</button>
                <button onClick={this.fetchRandomData}>Fetch Random Data</button>
                {/* 有data时渲染api到下面div */}
                {data && <div> 
                    <p>{`${data.name.first} ${data.name.last}`}</p>
                    <img src={data.picture.medium}/>
                </div>}
            </div>
        );
    };
}

export default Tutorial;