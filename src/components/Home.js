import React, { useState } from 'react'
import Form from './form';
import Result from './result';
import stl from './result.module.css'

function Home() {
    function weatherBalloon(city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4efe1415e973cd13c9f7cc8f4dc5398b`)
                .then(function (resp) { return resp.json() }) // Convert data to json
                .then(function (data) {
                    setState({ ...state, weather: Object.assign(state.weather, data) })
                    setState({ ...state, weather: Object.assign(state.weather, { rk: false }) })
            })
    }

    const [state, setState] = useState({ city: "", weather: { rk: true } })
    const onsubmitHandler = async (state) => {
        weatherBalloon(state.city);
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-3">
                <div className="container-fluid">
                    <h1 className="navbar-brand ml-3"><b>Whether</b></h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">
                                    <h5>Home</h5>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div id={stl.wide}>
                <Form onsubmitHandler={onsubmitHandler} state={state} setState={setState} />
                <Result weather={state.weather} state={state} setState={setState} />
            </div>
        </>
    )
}

export default Home
