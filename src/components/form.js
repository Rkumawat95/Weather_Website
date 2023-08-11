import React from 'react';

const Form = (props) => {
    //console.log(props)
    const fromData1 = async (e) => {
        e.preventDefault();
        props.onsubmitHandler(props.state);
    }
    return (
        <>
            <div onSubmit={fromData1} className='container mt-3 mb-3'>
                <form>
                    <label htmlFor="city" className="form-label">
                        <h1><b>Enter Your City</b></h1>
                    </label>
                    <input type="text" value={props.state.city} placeholder='enter city name'
                        onChange={(e) => props.setState({ ...props.state, city: e.target.value })} className="form-control" />
                    <button type="submit" className="mt-3 mb-3 btn btn-primary btn-lg">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form
