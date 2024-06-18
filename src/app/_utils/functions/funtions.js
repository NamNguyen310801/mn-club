export const getBase64 = (file) => {
  const data = new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
  return data;
};
export const isDateBeforeToday = (date) => {
  const inputDateTime = new Date(date);
  const currentDate = new Date();
  const fiveYearsAgo = new Date();
  fiveYearsAgo.setFullYear(currentDate.getFullYear() - 5);
  return inputDateTime < fiveYearsAgo;
};
export function validatePhoneNumber(phone) {
  const re = getRegexPhoneNumber();
  return re?.test(String(phone)?.toLowerCase());
}
export function getRegexPhoneNumber() {
  const re = /^(\+84|84|0)+(9|3|7|8|5)+([0-9]{8})\b/g;
  return re;
}
export function validateEmail(email) {
  const re = getRegexEmail();
  return re?.test(String(email)?.toLowerCase());
}

export function getRegexEmail() {
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
  return re;
}
