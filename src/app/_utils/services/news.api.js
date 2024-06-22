const { default: axiosUrl } = require(".");
const { default: ROUTER_API } = require("../routes");
export const createNewsAPI = async (data) => {
  try {
    const res = await axiosUrl.post(ROUTER_API.createNewsURL, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const getAllNewsAPI = async () => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getAllNewsURL);
    return res;
  } catch (error) {
    return error;
  }
};
export const getNewsDetailsAPI = async (id) => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getDetailNewsURL + "/" + id);
    return res;
  } catch (error) {
    return error;
  }
};
