import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { baseUrl, axiosHeaders } from '../../utils/constants';
import axios from 'axios';
import Details from './Details';


export default function DetailsPage() {
    const params = useParams();
    /**
     * Call server with imdbID
     * URL Format : http://localhost:3001/omdb/imdb/tt0944947
     * const imdbID = params.imdbID;
     */
    const [movie, setMovie] = useState({});

    const uri = `${baseUrl}omdb/imdb/${params.imdbID}`;

    useEffect(() => {
        axios.get(uri, axiosHeaders)
            .then(res => setMovie(res.data))
            .catch(err => console.error(err));
    },[uri])

    return (
        <>
            <Details movie = {movie}/>
        </>
    )
}