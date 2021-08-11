// this component will host one individual search result (horizontal)
import React from 'react';
import { BusinessRating } from './businessrating';

export function SearchResult(){
    return (
        <div className="d-flex p-2 bd-highlight"> 
        <img src = " https://via.placeholder.com/150" alt="business"/>
        <div>
            <p className="fs-5">Burger Place</p>
            <BusinessRating />
            <p>$$</p>
            {/*<span class="badge badge-warning">Burgers</span>*/}
            <button type="button" className="btn btn-warning">Burgers</button>
            <button type="button" className="btn btn-warning">Fast food</button>
        </div>
        <div> 
        <p>4085990000</p>
        <p>123 Seaseeme Street</p>
        <p>12345 Berlin </p>
        <p>Germany</p>
        </div>
        </div>
    )
}