import { RecoilRoot } from 'recoil';
import MainNavigator from './src/navigation/MainNavigator';

export default function App() {
  return (
    <RecoilRoot>
      <MainNavigator />
    </RecoilRoot>
  );
}

