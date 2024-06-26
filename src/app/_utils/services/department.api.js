const { default: axiosUrl } = require(".");
const { default: ROUTER_API } = require("../routes");
export const getAllDepartmentAPI = async () => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getAllDepartmentURL);
    return res;
  } catch (error) {
    return error;
  }
};

export const createDepartmentAPI = async (data) => {
  try {
    const res = await axiosUrl.post(ROUTER_API.createDepartmentURL, data);
    return res;
  } catch (error) {
    return error;
  }
};

export const deleteDepartmentAPI = async (id) => {
  try {
    const res = await axiosUrl.delete(
      ROUTER_API.deleteDepartmentURL + "/" + id
    );
    return res;
  } catch (error) {
    return error;
  }
};
