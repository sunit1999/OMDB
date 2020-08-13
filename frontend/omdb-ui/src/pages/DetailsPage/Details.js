import React from 'react';
import './Details.css';

export default function Details(props) {
    const movie = props.movie;
   
    return (
        <div className="container">
            <div className="card mb-3 mx-auto" >
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img src={movie.Poster} className="card-img" alt="poster" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title mx-auto">{movie.Title}</h5>
                            <table className="table table-borderless">
                                <thead>
                                    <tr>
                                        <small className="text-muted">
                                            <th scope="col-auto">Year: {movie.Year}</th>
                                            <th scope="col-auto">Time: {movie.Runtime}</th>
                                            <th scope="col-auto">Type: {movie.Type}</th>
                                            <th scope="col-auto">Language: {movie.Language}</th>
                                            <th scope="col-auto">Rating: {movie.imdbRating}</th>
                                        </small>
                                    </tr>
                                </thead>
                            </table>

                            <table className="table table-borderless" >
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <th scope="row">Cast</th>
                                        <td>{movie.Actors}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Director</th>
                                        <td>{movie.Director}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Writer</th>
                                        <td>{movie.Writer}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Genre</th>
                                        <td>{movie.Genre}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Plot</th>
                                        <td>{movie.Plot}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Awards</th>
                                        <td>{movie.Awards}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">BoxOffice</th>
                                        <td>{movie.BoxOffice}</td>
                                    </tr>

                                    <tr>
                                        <th scope="row">Production</th>
                                        <td>{movie.Production}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}