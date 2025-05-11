import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const accessKey = "H9VnuT8659YRCYFlooYtHBVe5Zb-M7HMbU6b8CAQo_0";

export const fetchGallery = async (topic, currentPage) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      page: currentPage,
      query: topic,
      client_id: accessKey,
    },
  });
  return response.data;
};
