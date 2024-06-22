export const getAllStudentAPI = async () => {
  try {
    const res = await axiosUrl.get(ROUTER_API.getAllStudentURL);
    return res;
  } catch (error) {
    return error;
  }
};
