import React from 'react';
import './Country.css';
const Country = (props) => {
    console.log(props.country);
    const {name, flags, population, region, timezones} = props.country;
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h3>Country Name: {name.common}</h3>
            <h5>Our Population: {population}</h5>
            <h4>{region} TimeZone: {timezones[0]}</h4>
        </div>
    );
};

export default Country;