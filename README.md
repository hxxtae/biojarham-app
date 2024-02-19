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

바이오자람에서 관리되고 사용되는 생명 공학 실험 Iot 앱 입니다.

해당 Repository는 Iot 앱에서 블루투스 기능을 제외한 UI를 테스트 하기 위해 제작되었습니다.

> Only User Interface

## 설치 및 시작

기본 구성으로 `Expo` 템플릿을 사용하였습니다.

```text
npx create-expo-app --template
```

디바이스에 따른 개발 환경 테스트 Android & Ios가 있습니다.

```text
npm run android
```

```text
npm run ios
```

## 라이브러리

### Build

```json
{
  "dependencies": {
    "@expo/vector-icons": "^14.0.0",
    "@react-native-async-storage/async-storage": "^1.21.0",
    "@react-navigation/native": "^6.1.9",
    "@react-navigation/native-stack": "^6.9.17",
    "expo": "~50.0.6",
    "expo-status-bar": "~1.11.1",
    "immer": "^10.0.3",
    "prop-types": "^15.8.1",
    "react": "18.2.0",
    "react-native": "0.73.2",
    "react-native-gesture-handler": "^2.15.0",
    "react-native-safe-area-context": "^4.9.0",
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

> nodejs : v20.10.0