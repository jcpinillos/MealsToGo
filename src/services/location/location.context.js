import React, { createContext, useEffect, useState } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [keyword, setKeyword] = useState('San Francisco');

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
        //console.log(searchKeyword);
    };

    useEffect(() => {
        if (!keyword.length) {
            //don't do anything
            return;
        }
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then((result) => {
                setIsLoading(false);
                setLocation(result);
                //console.log(result);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err);
            });
    }, [keyword]);

    return (
        <LocationContext.Provider
            value={{
                location,
                isLoading,
                error,
                search: onSearch,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
};
