<div align="center">
  <img 
    src="https://github.com/hxxtae/biojarham-app/assets/79623316/da4f4f3d-d431-4e17-9322-05ff799dac0c"
    alt="biojarham logo"
  />
</div>

<br>

<div align="center">
  <h1>Biojarham App</h1>
</div>

<div align="center">
  <a href="https://github.com/hxxtae/biojarham-app/blob/main/LICENSE">
    <img alt="GitHub License" src="https://img.shields.io/github/license/hxxtae/biojarham-app?style=for-the-badge&labelColor=%23111111&color=%23ffffff">
  </a>
</div>

<br>

> Only User Interface

바이오자람에서 관리되고 사용되는 생명 공학 실험 Iot 앱 입니다.

해당 Repository는 Iot 앱에서 블루투스 기능을 제외한 UI를 테스트 하기 위해 제작되었습니다.

<img alt="biojarham led experiment" src="https://github.com/brave-people/brave-tech-interview/assets/79623316/14e76143-e00d-435f-8e18-27d12437f9b8" style="border-radius: 20px">

## Install & Start

번들로는 `Expo` 템플릿을 사용하였습니다.

```text
npx create-expo-app --template
```

디바이스에 따른 개발 환경 테스트는 Android & Ios가 있습니다.

```text
npm run android
```

```text
npm run ios
```

## Librarys

> nodejs : v20.10.0

### Build

```json
{
  "dependencies": {
    "@expo/vector-icons": "^14.0.0",
    "@react-native-async-storage/async-storage": "^1.21.0",
    "@react-navigation/bottom-tabs": "^6.5.11",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/native-stack": "^6.9.17",
    "expo": "~50.0.6",
    "expo-status-bar": "~1.11.1",
    "immer": "^10.0.3",
    "prop-types": "^15.8.1",
    "react": "18.2.0",
    "react-native": "0.73.4",
    "react-native-gesture-handler": "^2.14.0",
    "react-native-safe-area-context": "^4.8.2",
    "recoil": "^0.7.7",
    "use-immer": "^0.9.0"
  }
}
```

### Dev

```json
{
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "eslint": "^8.56.0",
    "eslint-plugin-react": "^7.33.2"
  }
}
```

## Directories & Files

### Js

```
📦global
 ┣ 📜atom.js
 ┗ 📜colors.js
```

### Components

```
📦components
 ┣ 📂BottomSheet
 ┃ ┗ 📜index.jsx
 ┣ 📂LedControlDetail
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.js
 ┗ 📂LedControlModal
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.js

📦navigation
 ┣ 📂MainNavigator --> Main Nav
 ┃ ┗ 📜index.jsx
 ┣ 📂StackNavigatorIot --> Tab Stack Nav
 ┃ ┗ 📜index.jsx
 ┗ 📂TabNavigator --> Tab Nav
 ┃ ┗ 📜index.jsx

📦page
 ┣ 📂homeComponent --> Page1: Home
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.js
 ┣ 📂IotComponent --> Page2: Iot
 ┃ ┣ 📂IotCard
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.js
 ┣ 📂LedComponent --> Page3: Led
 ┃ ┣ 📂LedDetail
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📂LedPower
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📂LedTotal
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.js
 ┗ 📂PumpComponent --> Page4: Pump
 ┃ ┣ 📂PumpPower
 ┃ ┃ ┣ 📜index.jsx
 ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📜index.jsx
 ┃ ┗ 📜styles.js
```

## App Image

| IotComponent | LEDComponent | PumpComponent |
| ------------ | ------------ | ------------- |
| ![IotPage]   | ![LedPage]   | ![PumpPage]   |
|              | ![LedDetailPage] |           |

[PumpPage]: https://github.com/hxxtae/biojarham-app/assets/79623316/9ef369a0-5e54-47bd-b4d9-1a8e494a01c3
[IotPage]: https://github.com/hxxtae/biojarham-app/assets/79623316/e6c43237-d3ae-4776-877b-af47f573a1ae
[LedPage]: https://github.com/hxxtae/biojarham-app/assets/79623316/2f95ff50-a18b-450d-9b0b-8481d0239007
[LedDetailPage]: https://github.com/hxxtae/biojarham-app/assets/79623316/30f0f841-9918-4657-8f34-8b6d6ee625c8

## Author

[hxxtae](https://github.com/hxxtae)