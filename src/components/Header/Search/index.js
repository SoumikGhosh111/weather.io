import React from 'react'
import { useState, useEffect } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate';
import { GEO_DB_API_URL, options } from '../../../functions/geoDbApi';
import "./styles.css";

function SearchComp({ onSearchChange }) {
    const [search, setSearch] = useState("");
    console.log(typeof(onSearchChange))


    // const customStyles = {
    //     control: (provided, state) => ({
    //         ...provided,
    //         borderRadius: "5rem",
    //         // border: "2px solid #ccc",
    //         boxShadow: state.isFocused ? "none" : provided.boxShadow,
    //         // backgroundColor:"#3c3c3c", 
    //         color: state.isFocused ? "var(--grey)" : "#1b1b1b",
    //         backgroundColor: state.isFocused ? "var(--lightgrey)" : provided.backgroundColor,
    //     }),
    //     option: (provided, state) => ({
    //         ...provided,
    //         // backgroundColor: state.isFocused ? "white" : "black",  
    //         color: state.isFocused ? "black" : null,
    //     }),
    //     menu: (provided, state) => ({
    //         ...provided,
    //         backgroundColor: "var(--grey)",
    //         borderRadius: "10px",
    //         color: state.isFocused ? "black" : provided.color,  
    //     })
    // }
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderRadius: "5rem",
            boxShadow: state.isFocused ? "none" : provided.boxShadow,
            // color: state.isFocused ? "#fff" : "#1b1b1b", // Set color to white when focused
            // backgroundColor: state.isFocused ? "var(--lightgrey)" : provided.backgroundColor,
            // color: "var(--white)", 
            // backgroundColor: "var(--lightgrey)",

        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isFocused ? "black" : null,
            cursor: "pointer",
        }),
        menu: (provided, state) => ({
            ...provided,
            backgroundColor: "var(--grey)",
            borderRadius: "10px",
            color: state.isFocused ? "black" : provided.color,
            
        })
    };

    function handleSearchChange(searchData) {
        setSearch(searchData);
        onSearchChange(searchData);
    }
    console.log(search); 
    const loadOptions = async (inputData) => {
        try {
            const response = await fetch(`${GEO_DB_API_URL}/places?namePrefix=${inputData}`, options);
            const data = await response.json();
            console.log(data); 
            // Assuming data is an array of objects where each object has 'id' and 'name' properties
            const responseOptions = data.data.map(item => ({ value: {lat: item.latitude, long: item.longitude}, label: `${item.name} ${item.regionCode} ${item.country}` }));
            return { options: responseOptions };
        } catch (e) {
            console.error(e);
            return { options: [] };
        }
    };

    return (

        <div className='async-paginate'>
            <AsyncPaginate
            placeholder="Search for city"
            debounceTimeout={600}
            value={search}
            onChange={handleSearchChange}
            className='async-search-func'
            styles={customStyles}
            loadOptions={loadOptions}
        />
        </div>
        
    )
}

export default SearchComp