const ROUTER_API = {
  // Auth
  register: "/api/common/Register/register-account",
  signIn: "/api/Common/Login/Login",
  logout: "",
  forgetPasswordURL: "/api/ManageAccount/forgot-password",
  changePasswordURL: "/api/ManageAccount/change-password",
  verifyAccountURL: "/",
  verifyOtpURL: "/",
  refreshTokenURL: "/",

  // User
  getDetailUserURL: "/api",
  editProfileUserURL: "/api",
  getAllUserURL: "/api",
  deleteUserURL: "/",

  //Club
  createClubURL: "/Club/CreateClub",
  updateClubURL: "/Club/UpdateClub",
  getAllClubURL: "/Club/GetAllClub",
  getClubDetailsURL: "/Club/GetClubDetail",

  // Event
  createEventURL: "/api/Event/CreateEvent",
  getAllEventURL: "/api/Event/GetAllEvent",
  getDetailEventURL: "/api/Event/Detail",
  getEventByClubURL: "/api/Event/GetEventbyClub",
};
export default ROUTER_API;
