# nativeReactStudy
Base on React 0.47

## 本地运行
#####(in project directory) mkdir android/app/src/main/assets react-native bundle --platform android --dev false --entry-file index.android.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res

##### react-native run-android

## 远程调试
##### (in project directory) npm start
##### adb shell input keyevent 82
##### adb reverse tcp:8081 tcp:8081
