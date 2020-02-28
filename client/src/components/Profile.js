import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'

 class Profile extends Component {
  constructor() {
    super()
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      wea: '',
      // icon: '',
      cname: '',
      tempr: '',
      loading: true,
      errors: {}
    }
  }
  

  async componentDidMount() {
    const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    const url = "http://api.openweathermap.org/data/2.5/weather?q=bhubaneswar&units=metric&appid=d63118e8ac2935718b2309705759a9a0";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      wea: data.weather[0].main,
      // icon: data.weather[0].icon,
      cname: data.name,
      tempr: data.main.temp,
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
      loading: false
      
    });
    //  console.log(data.weather[0].main);
  }

  render() {
    const data1 = this.state.wea;
    const data2 = this.state.cname;
    const data3 = this.state.tempr;
    // const data4 = this.state.icon;
    console.log(data3);
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">PROFILE</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>Fist Name</td>
                <td>{this.state.first_name}</td>
              </tr>
              <tr>
                <td>Last Name</td>
                <td>{this.state.last_name}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{this.state.email}</td>
              </tr>
            </tbody>
          </table>
          <br/>
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Weather Details</h1>
          </div>
          <table className="table col-md-6 mx-auto">
            <tbody>
              <tr>
                <td>City Name</td>
                <td>{ data2 ? <div><h5>{data2}</h5></div> : <div>Loading Weather...</div>}</td>
              </tr>
              <tr>
                <td>Temprature(C)</td>
                <td>{ data3 ? <div><h5>{data3}</h5></div> : <div>Loading Weather...</div>}</td>
              </tr>
              <tr>
                <td>Weather</td>
                <td>{ data1 ? <div><h5>{data1}</h5></div> : <div>Loading Weather...</div>}</td>
              </tr>
            </tbody>
          </table>
          <div>
              {/* {this.state.loading || !this.state.weather ? (
                <div>Loading Weather</div>
              ) : (
              <div>{this.state.weather[0].main}</div>
              )} */}
              
              {/* {
                data2 ? <div><h3>{data2}</h3></div> : <div>Loading Weather...</div>
              }
              {
                data1 ? <div><h3>{data1}</h3></div> : <div>Loading Weather...</div>
              }
              {
                data3 ? <div><h3>{data3}</h3></div> : <div>Loading Weather...</div>
              } */}
          </div>

        </div>
      </div>
    )
  }
}

export default Profile