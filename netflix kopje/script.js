const trendingMovies = [
    "https://m.media-amazon.com/images/I/71J6kCKk1QL._AC_SY679_.jpg",
    "https://m.media-amazon.com/images/I/91t4BfFEfvL._AC_SY679_.jpg",
    "https://m.media-amazon.com/images/I/91O+M1Zs1jL._AC_SY679_.jpg"
];

const topRatedMovies = [
    "https://m.media-amazon.com/images/I/71p00UlxJLL._AC_SY679_.jpg",
    "https://m.media-amazon.com/images/I/91nUWx3jjOL._AC_SY679_.jpg",
    "https://m.media-amazon.com/images/I/81y7OBHvx8L._AC_SY679_.jpg"
];

const renderMovies = (movies, elementId) => {
    const container = document.getElementById(elementId);
    movies.forEach(movie => {
        const img = document.createElement('img');
        img.src = movie;
        img.alt = 'Movie Poster';
        img.style.width = '200px';
        img.style.margin = '10px';
        container.appendChild(img);
    });
};

renderMovies(trendingMovies, 'trending');
renderMovies(topRatedMovies, 'top-rated');
