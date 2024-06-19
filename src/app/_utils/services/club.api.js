const { default: axiosUrl } = require(".");
const { default: ROUTER_API } = require("../routes");

export const createClubAPI = async (data) => {
  try {
    const res = await axiosUrl.post(ROUTER_API.createClubURL, data);
    return res;
  } catch (error) {
    return error;
  }
};

export const updateClubAPI = async (data) => {
  try {
    const res = await axiosUrl.put(ROUTER_API.updateClubURL, data);
    return res;
  } catch (error) {
    return error;
  }
};
