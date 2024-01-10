import axios from "axios"

export const getAllShows = (page) => {
    return axios.get(`https://api.tvmaze.com/shows?page=${page}`);
}

export const getShowInfoById = (showId) => {
    return axios.get(`https://api.tvmaze.com/shows/${showId}`);
}

export const getShowEpisodes = (showId) => {
    return axios.get(`https://api.tvmaze.com/shows/${showId}/episodes`);
}

export const getShowCast = (showId) => {
    return axios.get(`https://api.tvmaze.com/shows/${showId}/cast`);
}

export const getStreamingByCountry = (date, country) => {
    return axios.get(`https://api.tvmaze.com/schedule/web?date=${date}&country=${country}`);
}

export const getActorByQuery = (actorName) => {
    return axios.get(`https://api.tvmaze.com/search/people?q=${actorName}`);
}

export const getActorById = (actordId) => {
    return axios.get(`https://api.tvmaze.com/people/${actordId}`);
}

export const getActorCastcredits = (actordId) => {
    return axios.get(`https://api.tvmaze.com/people/${actordId}/castcredits?embed=show`);
}

export const getShowByQuery = (showTitle) => {
    return axios.get(`https://api.tvmaze.com/search/shows?q=${showTitle}`);
}

export const getShowBackgroundById = (showId) => {
    return axios.get(`https://api.tvmaze.com/shows/${showId}/images`);
}
