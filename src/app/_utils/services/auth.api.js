const { default: axiosUrl } = require(".");
const { default: ROUTER_API } = require("../routes");
// create
export const registerUserAPI = async (data) => {
  try {
    const res = await axiosUrl.post(ROUTER_API.register, data);
    return res;
  } catch (error) {
    return error;
  }
};
// Sign In
export const signInAPI = async (data) => {
  try {
    const res = await axiosUrl.post(ROUTER_API.signIn, data);
    return res;
  } catch (error) {
    return error;
  }
};
// Sign In
export const verifyAccountAPI = async (data) => {
  try {
    const res = await axiosUrl.post(ROUTER_API.verifyAccountURL, data);
    return res;
  } catch (error) {
    return error;
  }
};
export const logoutUserAPI = async () => {
  try {
    const res = await axiosUrl.post(ROUTER_API.logout);
    return res.data;
  } catch (error) {
    return error;
  }
};
// forgetPassword
export const forgetPasswordAPI = async (data) => {
  try {
    const res = await axiosUrl.post(ROUTER_API.forgetPasswordURL, data);
    return res.data;
  } catch (error) {
    return error;
  }
};
// confirmOTP
export const verifyOtpAPI = async (data) => {
  try {
    const res = await axiosUrl.post(ROUTER_API.verifyOtpURL, data);
    return res.data;
  } catch (error) {
    return error;
  }
};
//refreshToken
export const refreshTokenAPI = async (refToken) => {
  try {
    const res = await axiosUrl.post(
      ROUTER_API.refreshTokenURL,
      {},
      {
        headers: {
          Authorization: `Bearer ${refToken}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    return error;
  }
};
