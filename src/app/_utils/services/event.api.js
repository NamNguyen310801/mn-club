const { default: axiosUrl } = require(".");
const { default: ROUTER_API } = require("../routes");

export const createEventAPI = async (data) => {
  try {
   
    const res = await axiosUrl.post(ROUTER_API.createEventURL, {
      clubId: data?.clubId,
      userId: data?.userId,
      name: data?.name,
      description: data?.description,
      banner: data?.banner,
      startDate: data?.startDate,
      endDate: data?.endDate,
      location: data?.location,
      eventTypeId: data?.eventTypeId
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const updateEventAPI = async (id,data) => {
  
  try {
    const res = await axiosUrl.put(ROUTER_API.updateEventURL+id, {
      clubId: data?.clubId,
      userId: data?.userId,
      name: data?.name,
      description: data?.description,
      banner: data?.banner,
      startDate: data?.startDate,
      endDate: data?.endDate,
      location: data?.location,
      eventTypeId: data?.eventTypeId
    });
    ;
    return res;
  } catch (error) {
    return error;
  }
};

export const getAllEventAPI = async (data) => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getAllEventURL, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const getAllEventPublicAPI = async (data) => {
  const { startIndex = 0, limit = 8 } = data;

  try {
    const res = await axiosUrl.get(
      ROUTER_API.getAllEventPublicURL + startIndex,
      {
        startIndex,
        limit,
      }
    );
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

export const getEventByClubAPI = async (data) => {
  const { id, startIndex, limit } = data;
  try {
    const res = await axiosUrl.get(ROUTER_API.getEventByClubURL + "/" + id, {
      startIndex: startIndex || 0,
      limit: limit || 8,
    });
    return res;
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
