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
    return res;
  } catch (error) {
    return error;
  }
};
// update
export const updateUserAPI = async (id, data, access_token) => {
  try {
    const res = await axiosUrl.put(`${ROUTER_API.updateAccount}/${id}`, data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

//getAllUser
export const getAllUserAPI = async () => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getAllUserURL);
    return res;
  } catch (error) {
    return error;
  }
};
// deleteUser
export const deleteUserAPI = async (id, access_token) => {
  try {
    const res = await axiosUrl.delete(`${ROUTER_API.deleteUserURL}/${id}`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};

// create
export const createUserAPI = async (data, access_token) => {
  try {
    const res = await axiosUrl.post(ROUTER_API.createAccountAdmin, data, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    return res;
  } catch (error) {
    return error;
  }
};
