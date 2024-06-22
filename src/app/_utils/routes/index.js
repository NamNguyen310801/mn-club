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
  getAllUserURL: "/api",
  deleteUserURL: "/",
  updateAccount: "/api/ManageAccount/update-account",
  createAccountAdmin: "api/ManageAccount/create-account-admin",

  //Club
  createClubURL: "/Club/CreateClub",
  updateClubURL: "/Club/UpdateClub",
  getAllClubURL: "/Club/GetAllClub",
  getClubDetailsURL: "/Club/GetClubDetail",
  getAllClubPublicURL: "Club/GetAllClubPublic?startIndex=",
  getClubsByEventType: "Club/GetClubsbyEventtype?eventTypeId=",

  // Event
  createEventURL: "/api/Event/CreateEvent",
  getAllEventURL: "/api/Event/GetAllEvent",
  getAllEventPublicURL: "api/Event/GetAllEvent?startIndex=",
  getEventFeaturedURL: "/api/Event/GetEventfeatured",
  getDetailEventURL: "/api/Event/Detail",
  getEventByClubURL: "/api/Event/GetEventbyClub",

  // News
  createNewsURL: "/",
  getAllNewsURL: "/",
  getDetailNewsURL: "/",

  // Student
  getAllStudentURL: "",
};
export default ROUTER_API;
