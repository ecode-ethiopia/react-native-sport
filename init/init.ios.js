import AppleHealthKit from 'rn-apple-healthkit';
import Utils from '../utils/utils';

const options = {
  permissions: {
    read: ['Height', 'Weight', 'StepCount', 'DateOfBirth', 'BodyMassIndex', 'ActiveEnergyBurned', 'EnergyConsumed'],
    write: ['Height', 'Weight'],
  },
};
export default () => {
  console.log('ioit ios');
  const { createPromiseForFunction } = Utils;
  return createPromiseForFunction({
    func: AppleHealthKit.isAvailable,
    name: 'isAvailable',
  }).then(result => createPromiseForFunction({
    func: AppleHealthKit.initHealthKit,
    opt: options,
    name: 'initHealthKit',
  })).then(res => Promise.all([
    createPromiseForFunction({
      func: AppleHealthKit.getLatestHeight,
      opt: null,
      name: 'getLatestHeight',
    }),
    createPromiseForFunction({
      func: AppleHealthKit.getLatestWeight,
      opt: { unit: 'kg' },
      name: 'getLatestWeight',
    }),
    createPromiseForFunction({
      func: AppleHealthKit.getDateOfBirth,
      name: 'getDateOfBirth',
      opt: null,
    }),
    createPromiseForFunction({
      func: AppleHealthKit.getBiologicalSex,
      name: 'getBiologicalSex',
      opt: null,
    }),
  ])).catch((err) => {
    console.log('error: ', err);
    throw err;
  });
};
