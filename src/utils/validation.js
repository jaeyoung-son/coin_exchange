export const checkMaxLength = (val) => {
  const reg = /^\d*[.]\d{9}$/;

  return reg.test(val) ? false : true;
};

export const checkFirstNum = (val) => {
  const reg = /^[0]/;

  return reg.test(val) ? false : true;
};
