"use client"

import { useState } from "react";
import Forecast from "./Forecast";

export default function Search() {
    const [searchBar, setSearchBar] = useState('');
    const [location, setLocation] = useState<number>();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBar(event.target.value);
    }

    const handleSubmit = () => {
        setLocation(parseInt(searchBar));
    }

    return (
<div>
        <div className="flex flex-row form-control bg-base-100 justify-center">
          <input
            type="number"
            min={5}
            max={5}
            placeholder="Zip Code"
            className="input input-bordered md:w-1/5"
            id="location"
            onChange={handleInputChange}
          />
          <button className="btn w-auto" onClick={handleSubmit}>Enter</button>
        </div>
        {/* <Forecast zipCode={location} /> */}
</div>
    );
}