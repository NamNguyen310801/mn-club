export const getClubTypeAPI = async () => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getClubTypeURL);
    return res;
  } catch (error) {
    return error;
  }
};

export const getEventTypeAPI = async () => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getEventTypeURL);
    return res;
  } catch (error) {
    return error;
  }
};
