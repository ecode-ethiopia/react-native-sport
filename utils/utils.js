const createPromiseForFunction = ({
  func, opt, name,
}) => new Promise((resolve, reject) => {
  const params = [];
  if (opt !== undefined) {
    params.push(opt);
  }
  params.push((err, res) => {
    if (err) {
      console.log('error Healthkit: ', name, err);
      reject(err);
    } else {
      console.log('R E S Healthkit: ', name, res);
      resolve(res);
    }
  });
  console.log(' tworze promisa i wołam z : ', { ...params });
  func(...params);
});
const Utils = {
  createPromiseForFunction,
};
export default Utils;
