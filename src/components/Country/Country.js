import React from 'react';
import './Country.css'
const Country = (props) => {
    console.log(props.country);
    const { name, capital, population, flag, region } = props.country;
    return (
        <div className='country'>
            <h3>This is: {name}</h3>
            <img src={flag} alt="" />
            <p> <small>Region: {region}</small></p>
            <p>Capital is: {capital}, Populations is: {population}</p>


        </div>
    );
};

export default Country;