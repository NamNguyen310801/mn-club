const { default: axiosUrl } = require(".");
const { default: ROUTER_API } = require("../routes");

export const createEventAPI = async (data) => {
  try {
    const res = await axiosUrl.post(ROUTER_API.createEventURL, data);
    return res;
  } catch (error) {
    return error;
  }
};

export const updateEventAPI = async (data) => {
  try {
    const res = await axiosUrl.put(ROUTER_API.updateEventURL, data);
    return res;
  } catch (error) {
    return error;
  }
};

export const getAllEventAPI = async () => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getAllEventURL);
    return res;
  } catch (error) {
    return error;
  }
};
export const getAllEventPublicAPI = async (index = 0) => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getAllEventPublicURL + index, {
      index,
    });
    return res;
  } catch (error) {
    return error;
  }
};
export const getAllPopularEventAPI = async (index = 0) => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getAllPopularEventURL + index, {
      index,
    });
    return res;
  } catch (error) {
    return error;
  }
};
export const getAllEventFeaturedAPI = async () => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getEventFeaturedURL);
    return res;
  } catch (error) {
    return error;
  }
};
export const getEventDetailsAPI = async (id) => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getDetailEventURL + "/" + id);
    return res;
  } catch (error) {
    return error;
  }
};

export const getEventByClubAPI = async (id) => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getEventByClubURL + "/" + id);
  } catch (error) {
    return error;
  }
};

export const deleteEventAPI = async (id) => {
  try {
    const res = await axiosUrl.delete(ROUTER_API.deleteEventURL + "/" + id);
    return res;
  } catch (error) {
    return error;
  }
};
