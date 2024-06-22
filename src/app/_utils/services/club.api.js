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

export const getAllClubAPI = async () => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getAllClubURL);
    return res;
  } catch (error) {
    return error;
  }
};

export const getAllClubPublicAPI = async (index = 0) => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getAllClubPublicURL + index, {
      index,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getClubsByEventTypeAPI = async (index = 0) => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getClubsByEventType + index, {
      eventTypeId: index,
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const getClubDetailsAPI = async (id) => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getClubDetailsURL + "/" + id);
    return res;
  } catch (error) {
    return error;
  }
};
