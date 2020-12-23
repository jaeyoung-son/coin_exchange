const toLocaleFunc = (val, num = 2) => {
  if (val)
    return val.toLocaleString(undefined, {
      maximumFractionDigits: num,
    });

  return '0';
};

export default toLocaleFunc;
