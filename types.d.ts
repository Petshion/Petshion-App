declare module 'react-viro';
declare module 'react-native-screen-capture-secure';

function createRef<T>(): RefObject<T>;

interface RefObject<T> {
  // immutable
  readonly current: T | null;
}
