import { API } from '../../types';
export interface Data {
  url: string;
  urlsDefault: string[];
}

export type Props = API<Data, Cache>;

export const defaultData: Data = {
  url: '',
  urlsDefault: [],
};
