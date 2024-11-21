from flask import Flask, jsonify, request
from flask_cors import CORS
import pandas as pd
app = Flask(__name__)
CORS(app)

movie_complete_data = pd.read_csv(r'movie_data.csv')

# @app.route('/api/year')
# def get_movie_by_year():
#     year = request.args.get('year')
#     print(year)
#     movies_data = []

#     if year:
#         filtered_df = movie_complete_data[movie_complete_data['year'] == int(
#             year)]
#         movies_data = filtered_df.to_dict(orient='records')
#     print(movies_data)
#     return jsonify(movies_data)   


# @app.route('/api/genre')
# def get_movie_by_genre():
#     print("hello")
#     genre = request.args.get('genre')
#     print(genre)
#     movie_data = []
#     if genre:
#         filtered_df = movie_complete_data[movie_complete_data['genre'].str.contains(
#             genre, case=False)]
#         movies_data = filtered_df.to_dict(orient='records')
#     print(movies_data)
#     return jsonify(movies_data[:10])

@app.route('/api/movies')
def get_movies_by_year_and_genre():import logging

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# ...

@app.route('/api/movies')
def get_movies_by_year_and_genre():
    logging.info('Received request for /api/movies')
    year = request.args.get('year')
    genre = request.args.get('genre')
    
    movies_data = []

    if year and genre:
        filtered_df = movie_complete_data[(movie_complete_data['year'] == int(year)) & (movie_complete_data['genre'].str.contains(genre, case=False))]
        logging.info(f'Filtered movies by year {year} and genre {genre}')
    elif year:
        filtered_df = movie_complete_data[movie_complete_data['year'] == int(year)]
        logging.info(f'Filtered movies by year {year}')
    elif genre:
        filtered_df = movie_complete_data[movie_complete_data['genre'].str.contains(genre, case=False)]
        logging.info(f'Filtered movies by genre {genre}')
    else:
        filtered_df = movie_complete_data
        logging.info('Returned all movies')

    movies_data = filtered_df.to_dict(orient='records')
    logging.info('Returned movies data')
    return jsonify(movies_data)

# ...

@app.route('/api/casts')
def get_movie_by_cast():
    logging.info('Received request for /api/casts')
    casts = request.args.get('casts')
    print(casts)
    movie_data = []
    if casts:
        filtered_df = movie_complete_data[movie_complete_data['casts'].str.contains(casts, case=False)]
        logging.info(f'Filtered movies by cast {casts}')
        movies_data = filtered_df.to_dict(orient='records')
    print(movies_data)
    logging.info('Returned movies data')
    return jsonify(movies_data)

# ...

@app.route('/api/rating')
def get_movie_by_rating():
    logging.info('Received request for /api/rating')
    rating = request.args.get('rating')
    movie_data = []
    if rating:
        lower_bound = float(rating)
        upper_bound = lower_bound + 1.0

        filtered_df = movie_complete_data[
            (movie_complete_data['rating'] >= lower_bound) &
            (movie_complete_data['rating'] < upper_bound)
        ]
        logging.info(f'Filtered movies by rating {rating}')
        movies_data = filtered_df.to_dict(orient='records')
    logging.info('Returned movies data')
    return jsonify(movies_data)

# ...

@app.route('/api/movies')
def get_movies_data():
    logging.info('Received request for /api/movies')
    search_query = request.args.get('search_query')
    if search_query:
        filtered_df = movie_complete_data[movie_complete_data['name'].str.contains(search_query, case=False)]
        logging.info(f'Filtered movies by search query {search_query}')
        movies_data = filtered_df.to_dict(orient='records')
    else:
        movies_data = movie_complete_data.to_dict(orient='records')
        logging.info('Returned all movies')
    logging.info('Returned movies data')
    return jsonify(movies_data)

# ...

@app.route('/get_top_5')
def get_top_5():
    logging.info('Received request for /get_top_5')
    top_5_data = movie_complete_data.head().to_dict(orient='records')
    logging.info('Returned top 5 movies')
    return jsonify(top_5_data)

# ...

if __name__ == '__main__':
    logging.info('Server started')
    app.run(debug=True)
    year = request.args.get('year')
    genre = request.args.get('genre')
    
    movies_data = []

    if year and genre:
        filtered_df = movie_complete_data[(movie_complete_data['year'] == int(year)) & (movie_complete_data['genre'].str.contains(genre, case=False))]
            
    elif year:
        filtered_df = movie_complete_data[movie_complete_data['year'] == int(year)]
    elif genre:
        filtered_df = movie_complete_data[movie_complete_data['genre'].str.contains(genre, case=False)]
    else:
        filtered_df = movie_complete_data

    movies_data = filtered_df.to_dict(orient='records')
    return jsonify(movies_data)


@app.route('/api/casts')
def get_movie_by_cast():
    casts = request.args.get('casts')
    print(casts)
    movie_data = []
    if casts:
        filtered_df = movie_complete_data[movie_complete_data['casts'].str.contains(casts, case=False
                                                                                    )]
        movies_data = filtered_df.to_dict(orient='records')
    print(movies_data)
    return jsonify(movies_data)


@app.route('/api/rating')
def get_movie_by_rating():
    rating = request.args.get('rating')
    movie_data = []
    if rating:
        lower_bound = float(rating)
        upper_bound = lower_bound + 1.0

        filtered_df = movie_complete_data[
            (movie_complete_data['rating'] >= lower_bound) &
            (movie_complete_data['rating'] < upper_bound)
        ]
        movies_data = filtered_df.to_dict(orient='records')
    return jsonify(movies_data)


@app.route('/api/movies')
def get_movies_data():
    search_query = request.args.get('search_query')
    if search_query:
        filtered_df = movie_complete_data[movie_complete_data['name'].str.contains(
            search_query, case=False)]
        movies_data = filtered_df.to_dict(orient='records')
    else:
        movies_data = movie_complete_data.to_dict(orient='records')
    return jsonify(movies_data)


@app.route('/get_top_5')
def get_top_5():
    top_5_data = movie_complete_data.head().to_dict(orient='records')
    # print(jsonify(top_5_data))
    return jsonify(top_5_data)


if __name__ == '__main__':
    app.run(debug=True)
    print('Server started')
