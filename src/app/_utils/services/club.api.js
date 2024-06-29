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
    const res = await axiosUrl.put(ROUTER_API.updateClubURL, {
      clubId: data?.clubId,
      code:data?.code,
      name: data?.name,
      email: data?.email,
      avatar: data?.avatar,
      description: data?.description,
      foundingDate:data?.foundingDate,
      memberCount: data?.memberCount,
      fundAmount:  data?.fundAmount,
      website: data?.website,
      status: data?.status,
      clubCategoryId: data?.setting?.settingId,
      managerId: data?.manager?.userId,
    });
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

export const getAllClubPublicAPI = async (data) => {
  const { startIndex = 0, limit = 8 } = data;
  try {
    const res = await axiosUrl.get(
      ROUTER_API.getAllClubPublicURL + startIndex,
      {
        startIndex: startIndex,
        limit: limit,
      }
    );
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
export const deleteClubAPI = async (id) => {
  try {
    const res = await axiosUrl.delete(ROUTER_API.deleteClubURL + "/" + id);
    return res;
  } catch (error) {
    return error;
  }
};
