const ROUTER_API = {
  // Auth
  register: "/api/common/Register/register-account",
  signIn: "/api/Common/Login/login",
  logout: "",
  forgetPasswordURL: "/api/ManageAccount/forgot-password",
  verifyOtpURL: "/",
  changePasswordURL: "/api/ManageAccount/change-password",
  verifyAccountURL: "/",
  refreshTokenURL: "/",

  // User
  getDetailUserURL: "/api/Common/Login/GetUserDetail",
  getAllUserURL: "/api",
  deleteUserURL: "/",
  updateAccount: "/api/ManageAccount/update-account",
  createAccountAdmin: "api/ManageAccount/create-account-admin",

  //Club
  createClubURL: "/Club/CreateClub",
  updateClubURL: "/Club/UpdateClub",
  getAllClubURL: "/Club/GetAllClub",
  getClubDetailsURL: "/Club/GetClubDetail",
  getAllClubPublicURL: "/Club/GetAllClubPublic?startIndex=",
  getClubsByEventType: "/Club/GetClubsbyEventtype?eventTypeId=",
  deleteClubURL: "/",

  // Event
  createEventURL: "/api/Event/CreateEvent",
  // getAllEventURL: "/api/Event/GetAllEvent",
  getAllEventURL: "/api/Event/GetAllEventAdmin",  
  getAllEventPublicURL: "/api/Event/GetAllEvent?startIndex=",
  getAllPopularEventURL: "/api/Event/GetEventFeatured",
  getEventFeaturedURL: "/api/Event/GetEventFeatured",
  getDetailEventURL: "/api/Event/Detail",
  getEventByClubURL: "/api/Event/GetEventbyClub",
  deleteEventURL: "",

  // News
  createNewsURL: "/",
  getAllNewsURL: "/",
  getDetailNewsURL: "/",
  getAllNewsPublicURL: "",
  deleteNewsURL: "",

  // Student
  getAllStudentURL: "",
  // Setting
  getClubTypeURL: "/api/Setting/GetClubType",
  getEventTypeURL: "/api/Setting/GetEventType",
  // Department
  getAllDepartmentURL: "",
  createDepartmentURL: "",
  deleteDepartmentURL: "",
};
export default ROUTER_API;
