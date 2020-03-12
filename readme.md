# react-native-base-project

Base react native application for scalable projects using Redux + React Navigation v5, + .....

## Note:

[Version for react navigation v4](https://github.com/hungdev/react-native-setup-copy/tree/navigationv4)

## Important dependencies:

- [Redux](http://redux.js.org)
- [React navigation V5](https://reactnavigation.org)
- [axios](https://github.com/axios/axios)
- [lodash](https://lodash.com/docs/)

## Quick start

1. Run `npm install`
2. To run on device emulators, you have to have installed `react-native` npm module, then run `react-native run-ios` or `react-native run-android`. See more on [React Native getting started](https://facebook.github.io/react-native/docs/getting-started.html).


##  Available Command  

| npm run ...         | Description                                           |
| ------------------- | ----------------------------------------------------- |
| adb-reverse         | Reset port ADB to tcp:8081                            |
| adb-forward         | Forward port ADB to tcp:8083                          |
| ios-dev             | Run iOS project with Simulator set to "iPhone X"      |
| ios-bundle          | Bundle with entry file index.ios.js                   |
| ios-build           | Run ios project with “Release” configuration          |
| android-clean       | Fix building android if preDexDebug error             |
| android-build-debug | Build android .apk with “Debug” configuration         |
| android-release     | Build android .apk with “Release” configuration       |
| android-signkey     | Generate keystore android                             |
| android-signer      | To sign app-release-unsigned.apk with random keystore |
| android-bundle      | Bundle with entry file index.android.js               |

## Tips

- Change keys and codes in .env file
- adb reverse tcp:8081 tcp:8081
- adb forward tcp:8083 tcp:8083

## License
MIT