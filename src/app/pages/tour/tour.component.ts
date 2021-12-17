import { NgModule,Component, OnInit,enableProdMode } from '@angular/core';
import {TourService} from "../../services/tour.service";
import CustomStore from "devextreme/data/custom_store";
import {TourLoaiService} from "../../services/tour-loai.service";
import {Tour_Loai} from "../../shared/model/Tour_Loai";
import {Tour} from "../../shared/model/Tour";

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements OnInit {
  dataSource: any = {
    data: [],
    totalCount: 0
  };

  LoaiTour : Tour_Loai[] = [];

  tour :Tour[] = [];
  constructor(private tourService: TourService , private tourLoaiService: TourLoaiService  ) {
    this.tourLoaiService.getTourLoais().toPromise().then((data)=>{
      this.LoaiTour = data;
    })
    this.tourService.getAll().toPromise().then((data)=>{
      data.forEach(e=>{
        this.tour.push(e)
      })
    })
  }
  getData() : void {
    this.dataSource = new CustomStore({
      key :["id"],
      load: ()=>{
        return this.tourService.getAll().toPromise().then((data)=>{
          return {
            data: data,
            totalCount: data.length
          }
        })
      }, insert: (values) => {
        delete values.__KEY__;
        return values;
      }, update: (values) => {
        return values;
      }, onUpdated: (key, values) => {
        this.tourService.update({...key, ...values}).subscribe();
      }, onInserted: (key, values) => {
        this.tourService.create({...values}).subscribe();
      }, remove: (values)=>{
        return values;
      }, onRemoved: (values)=>{
        this.tourService.delete(values).subscribe();
      }
    });
  }

  ngOnInit(): void {
    this.getData();
  }

}
