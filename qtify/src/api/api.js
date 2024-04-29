// Api.js
import axios from "axios";

export const BACKEND_ENDPOINT = "https://qtify-backend-labs.crio.do";

export const fetchData = async (endpoint) => {
  try {
    const { data } = await axios.get(`${BACKEND_ENDPOINT}${endpoint}`);
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch data from the server");
  }
};

export const fetchTopAlbums = async () => fetchData("/albums/top");
// export const fetchNewAlbums = async () => fetchData("/albums/new");
// export const fetchSlugAlbums = async (slug) => fetchData(`/albums/${slug}`);
// export const fetchSongs = async () => fetchData("/songs");
// export const fetchFaq = async () => fetchData("/faq");
// export const fetchGenres = async () => fetchData("/genres");
