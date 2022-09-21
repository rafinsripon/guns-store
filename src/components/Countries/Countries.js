import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';
const Countries = () => {
    //step:-1 useState use korte hobe
    const [countries, setCountries] = useState([]);
    //step:-2 useEffect use korte hobe
    useEffect( () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    }, [])
    return (
        <div>
            <h1>All Countries Here:: {countries.length}</h1>
            <div className="contries_container">
                {
                    countries.map(country => <Country 
                        country={country}
                        key= {country.cca3}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;











