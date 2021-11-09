import {Tour_Loai} from "./Tour_Loai";

export interface Tour{
  id?: number;
  tourTen: string;
  tourMota: string;
  tour_Loai : Tour_Loai;
}
