import {Address} from "./address.model";
import {Day} from "./day.model";
import {Shift} from "./shift.model";

export interface Place {
  uid: string;
  type: string;
  name: string;
  address: string;
  ratingCount: number;
  ratingAverage: number;
  addresses: Address[];
  days: Day[];
  openingStatus: { open: boolean, time: string };
  ratingStars: [number, number, number, number, number];
  groupedDays: Map<string, Shift[]>;
}
