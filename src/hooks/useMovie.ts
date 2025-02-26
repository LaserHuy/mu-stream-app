import { use, useEffect, useState } from "react";
import { useDebounce } from "react-use";
import { MovieProps } from "../types/Mu";

const API_BASE_URL = 'https://api.themoviedb.org/3'
const API_KEY = import.meta.env.VITE_IMDB_API_KEY as string

const API_OPTIONS = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    },
}

//search movies
export const useMovieSearch = () => {
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
    const [searchTerm, setSearchTerm] = useState('');
    const [movies, setMovies] = useState<MovieProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useDebounce(() => {
        setDebouncedSearchTerm(searchTerm)
    }
    , 500, [searchTerm])

    const fetchMovies = async (query = "") => {
        setIsLoading(true);
        setError(null);
        try {
            const endpoint = query
                ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
                : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
            const response = await fetch(endpoint, API_OPTIONS)

            if (!response.ok) {
                throw new Error('Failed to fetch movies')
            }

            const data = await response.json()
            setMovies(data.results as MovieProps[] || [])

            
        } catch (error) {
            console.error(`Error fetching movies: ${error}`)
            setError('Error fetching movies. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
            fetchMovies(debouncedSearchTerm)
    }, [debouncedSearchTerm])

    return { searchTerm, setSearchTerm, movies, isLoading, error }
}

//get movie details
export const useMovie = (id: number) => {
    const [movie, setMovie] = useState<MovieProps | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMovie = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}/movie/${id}`, API_OPTIONS)

            if (!response.ok) {
                throw new Error('Failed to fetch movie')
            }

            const data = await response.json()
            setMovie(data as MovieProps)

        } catch (error) {
            console.error(`Error fetching movie: ${error}`)
            setError('Error fetching movie. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMovie()
    }, [id])

    return { movie, isLoading, error, refetch: fetchMovie }
}

//get trending movies
export const useTrendingMovies = () => {
    const [trending, setTrending] = useState<MovieProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchTrendingMovies = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`${API_BASE_URL}/trending/movie/week?language=en-US`, API_OPTIONS)

            if (!response.ok) {
                throw new Error('Failed to fetch trending movies')
            }

            const data = await response.json()
            setTrending(data.results as MovieProps[] || [])

        } catch (error) {
            console.error(`Error fetching trending movies: ${error}`)
            setError('Error fetching trending movies. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchTrendingMovies()
    }, [])

    return { trending, isLoading, error }
}

//get movie cast

export const useMovieCast = (id: number) => {
    const [cast, setCast] = useState<MovieProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMovieCast = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}/movie/${id}/credits`, API_OPTIONS)

            if (!response.ok) {
                throw new Error('Failed to fetch movie cast')
            }

            const data = await response.json()
            setCast(data.cast as MovieProps[] || [])

        } catch (error) {
            console.error(`Error fetching movie cast: ${error}`)
            setError('Error fetching movie cast. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchMovieCast()
    }, [id])

    return { cast, isLoading, error, refetch: fetchMovieCast }
}

//get related movies by genre and only show 5
export const useRelatedMovies = (id: number) => {
    const [relatedMovies, setRelatedMovies] = useState<MovieProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchRelatedMovies = async () => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch(`${API_BASE_URL}/movie/${id}/similar`, API_OPTIONS)

            if (!response.ok) {
                throw new Error('Failed to fetch related movies')
            }

            const data = await response.json()
            setRelatedMovies(data.results.slice(0, 5) as MovieProps[] || [])

        } catch (error) {
            console.error(`Error fetching related movies: ${error}`)
            setError('Error fetching related movies. Please try again later.')
        } finally {
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchRelatedMovies()
    }, [id])

    return { relatedMovies, isLoading, error, refetch: fetchRelatedMovies }
}