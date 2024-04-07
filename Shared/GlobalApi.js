const { default: axios } = require("axios");

const getGooglePlace = (category, radius, lat = 30, lng = 40) =>
  axios.get(
    "/api/google-place?" +
      "category=" +
      category +
      "&radius=" +
      radius +
      "&lat=" +
      lat +
      "&lng=" +
      lng
  );

export default {
  getGooglePlace,
};
