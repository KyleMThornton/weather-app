"use client"

import { useState } from "react";

export default function Search() {
    const [searchBar, setSearchBar] = useState('');
    const [location, setLocation] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchBar(event.target.value);
    }

    const handleSubmit = () => {
        setLocation(searchBar)
    }

    return (
      <div className="flex flex-row form-control bg-base-100 justify-center">
        <input
          type="text"
          placeholder="Zip Code"
          className="input input-bordered md:w-1/5"
          id="location"
          onChange={handleInputChange}
        />
        <button className="btn w-auto" onClick={handleSubmit}>Enter</button>
      </div>
    );
}