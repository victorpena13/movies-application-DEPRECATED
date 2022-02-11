module.exports = {
  getMovies: () => {
    return fetch('/api/movies')
      .then(response => response.json());
  },
  addMovie: (title, rating) => {
    const movie = {title, rating};
    const options = {
      method: 'POST',
      headers: {
        'Content-Type:': 'application/json',
      },
      body: JSON.stringify(movie),
    };
    return fetch('/api/movies', options)
  }
};
