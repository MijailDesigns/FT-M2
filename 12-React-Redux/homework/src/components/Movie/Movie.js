import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';




class Movie extends React.Component {

    componentDidMount() {
        // usando destructuring
        //const { match: { params: { id }}} = this.props;

        // manera convencional
        const movieId = this.props.match.params.id;
        this.props.movieDetail(movieId)
    }

    render() {
        if (!this.props.movies || !this.props.movies.Ratings) {
            return (
                <h1>Loading...</h1>
            )
        }
        return (
            <div className="movie-detail">
                
                <h2>{this.props.movies.Title}</h2>
                <p>Año: {this.props.movies.Year}</p>
                <p>Fecha de lanzamiento: {this.props.movies.Released}</p>
                <p>Genero: {this.props.movies.Genre}</p>
                <p>Premios: {this.props.movies.Awards}</p>
                <img src={this.props.movies.Poster} alt={this.props.movies.Title}/>
                <p>Resumen {this.props.movies.Plot}</p>
                
                <ul>
                <p>Ratings:</p>
                    {this.props.movies.Ratings.map(c => {
                        return(
                            <li key={c.Value}>Fuente: {c.Source} {c.Value}</li> 
                        )
                    })}
                </ul>
                
            </div>
        );
    }
}


function mapStateToProps(state) {
    return{
      movies: state.movieDetail
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
        movieDetail: id => dispatch(getMovieDetail(id))
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Movie);


//export default (Movie);