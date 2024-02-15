import { atom } from 'recoil';

// ----------------
// LED Control
// ----------------
export const ledStateOfTotal = atom({
  key: 'LedStateOfTotal',
  default: {
    switch: false,
    rgb: {
      R: 0,
      G: 0,
      B: 0
    }
  }
});

export const ledStateOfDetail1 = atom({
  key: 'LedStateOfDetail1',
  default: {
    switch: false,
    rgb: {
      R: 0,
      G: 0,
      B: 0
    }
  }
});

export const ledStateOfDetail2 = atom({
  key: 'LedStateOfDetail2',
  default: {
    switch: false,
    rgb: {
      R: 0,
      G: 0,
      B: 0
    }
  }
});

export const ledStateOfDetail3 = atom({
  key: 'LedStateOfDetail3',
  default: {
    switch: false,
    rgb: {
      R: 0,
      G: 0,
      B: 0
    }
  }
});

export const ledStateOfDetail4 = atom({
  key: 'LedStateOfDetail4',
  default: {
    switch: false,
    rgb: {
      R: 0,
      G: 0,
      B: 0
    }
  }
});