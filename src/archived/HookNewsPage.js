import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';

export const HookNewsPage = () => {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('react hooks');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const searchInputRef = useRef();

    useEffect(() => {
        getResults();
    }, []);

    const getResults = async () => {
        setLoading(true);
        try{
            const response = await axios
            .get(`http://hn.algolia.com/api/v1/search?query=${query}`);
            setResults(response.data.hits);
        } catch(err) {
            setError(err);
        }
        setLoading(false);
    }

    const handleSearch = event => {
        event.preventDefault();
        getResults();
    };
    
    const handleClearSearch = () => {
        setQuery("");
        searchInputRef.current.focus();
    };

    return(
        <>
        <div className="container max-w-md mx-auto p-4 m-2 bg-purple-100 shadow-lg rounded">
            <h1 className="text-grey-900 font-thin">Hooks news</h1>
            <form onSubmit={handleSearch} className="mb-2">
                <input 
                    type="text" 
                    onChange={event => setQuery(event.target.value)}
                    value={query}
                    ref={searchInputRef}
                    className="border p-1 rounded"
                />
                <button 
                    type="submit" 
                    className="bg-orange-500 rounded m-1 p-1"
                >
                    Search
                </button>
                <button 
                    type="button" 
                    onClick={handleClearSearch}
                    className="bg-teal-500 rounded text-white m-1 p-1"
                >
                    Clear
                </button>
            </form>

            {loading ? 
                (
                    <div className="font-bold text-orange-400">Loading results...</div>
                ) : (
                        <ul className="list-reset leading-normal"> 
                            {results.map(result => (
                                <li 
                                    key={result.objectID}
                                    className="
                                        text-indigo-400 
                                        hover:text-indigo-600"
                                >
                                    <a href={result.url}>{result.title}</a>
                                </li>
                            ))}
                        </ul>
                    )
            }

            {error && <div className="text-red-600 font-bold">{error.message}</div>}
        </div>
        </>
    )
}