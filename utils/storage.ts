import { MMKV } from "react-native-mmkv";

const mkv = new MMKV();

const storage = {
  setItem: (key: any, value: any) => {
    mkv.set(key, value);
    return Promise.resolve(true);
  },
  getItem: (key: string) => {
    const value = mkv.getString(key);
    return Promise.resolve(value);
  },
  removeItem: (key: string) => {
    mkv.delete(key);
    return Promise.resolve();
  },
};

export default storage;
