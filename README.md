# react-native-sport

[![npm version](https://badge.fury.io/js/react-native-sport.svg)](https://badge.fury.io/js/react-native-sport) ![Downloads](https://img.shields.io/npm/dm/react-native-sport.svg)

React Native package providing unified access to Apple Health and Google Fit

### Getting started

This package provides a common API for external packages:

https://github.com/iteratorsmobile/react-native-google-fit

and

https://github.com/iteratorsmobile/rn-apple-healthkit

Those are one of few wrappers for native APIs, that cover big spectrum of native functionalities, and have a group of contributors. 
We decided to develop this library aiming to unify, simplify, and extend possibilities of the above.


For now, this library assumes that you add Health and Fit packages to your project yourself. Please refer to install guides for each library. 
After that, you can just 
`$ npm install react-native-sport --save`
or
`$ yarn add react-native-sport`


### USAGE

1. `import Sport from 'react-native-sport';`

2. Authorize:

```javascript

   // This approach is meant to simplify auth process, you either get an initialization error, or a table of base data results; 

    Sport.hello().then(([
      { value: heightValue, ...otherHeightData },
      { value: weightValue, ...otherWeightData },
      { value: birthValue, age },
      { value: sexValue },
    ]) => {
      this.dateOfBirth = moment(birthValue).format('D-M-YY');
    }).catch((err) => {
      console.log('error');
    });
    ```
