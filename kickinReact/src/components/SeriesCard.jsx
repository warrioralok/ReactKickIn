import PropTypes from 'prop-types';
export const SeriesCard = ({index}) =>{

   const {name, imageUrl,rating, description,cast,genre, watchUrl} = index;
   
    return(
        <div className="container" key={name}>
        <img src={imageUrl} alt="img/poster.jpg" height="30%" width="40%"/>
        <div>
          <h3>Name: {name}</h3>
          <h4>Rating : {rating}</h4>
          <p className='des'>{description}</p>
          <p>Cast: {cast}</p>
          <p>Category : {genre}</p>
          {/* { age >= 18  && <div className="watchButton">Watch Now</div> } */}
          <a href={watchUrl} target='_blank'><div className="watchButton">Watch Now</div></a>
        </div>
    </div>
    )
}

//Define prop types for validation
SeriesCard.propTypes = {
    index: PropTypes.shape({
      imageUrl: PropTypes.string,
      name: PropTypes.string,
      rating: PropTypes.string,
      description: PropTypes.string,
      cast: PropTypes.string,
      genre: PropTypes.string,
      watchUrl: PropTypes.string,
    }).isRequired,
  };