const { default: axiosUrl } = require(".");
const { default: ROUTER_API } = require("../routes");
// create
export const getDetailUserAPI = async (id, access_token) => {
  try {
    const res = await axiosUrl.get(`${ROUTER_API.getDetailUserURL}/${id}`, {
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
// update
export const updateUserAPI = async (id, data, access_token) => {
  try {
    const res = await axiosUrl.put(
      `${ROUTER_API.editProfileUserURL}/${id}`,
      data,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};

//getAllUser
export const getAllUserAPI = async () => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getAllUserURL);
    return res.data;
  } catch (error) {
    return error;
  }
};
// deleteUser
export const deleteUser = async (id, access_token) => {
  try {
    const res = await axiosUrl.delete(`${ROUTER_API.deleteUserURL}/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return res.data;
  } catch (error) {
    return error;
  }
};
