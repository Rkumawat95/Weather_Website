import React from 'react'

function Result(props) {
  const data = props.weather;
  if (!data.rk) {
    return (
      <>
        <div className="card mt-3">
          <div className="card-body">
            <h2 className="card-title">
              <b>Weather Details : </b>
            </h2>
            <ul>
              <li><b>City : {data.name}</b></li>
              <li><b>Temprature : {data.main.temp}</b></li>
              <li><b>Humidity : {data.main.humidity}</b></li>
              <li><b>Wind : {data.wind.speed}</b></li>
              <li><b>Description : {data.weather[0].description}</b></li>
            </ul>
          </div>
        </div>
      </>
    )
  }
}

export default Result
