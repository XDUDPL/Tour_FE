import { Component, Input, AfterViewInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import {TourChiTietService} from "../../../services/tour-chi-tiet.service";
import {TourChiTiet} from "../../../shared/model/TourChiTiet";
import {Observable} from "rxjs";
import DevExpress from "devextreme";
import data = DevExpress.data;
import CustomStore from "devextreme/data/custom_store";
import {Tour} from "../../../shared/model/Tour";
import {Gia} from "../../../shared/model/Gia";
import {TourgiaService} from "../../../services/tourgia.service";

interface Tab {
  text : string;
}

@Component({
  selector: 'detail-grid1',
  templateUrl: './detail-grid.component.html',
  providers: [TourChiTietService]
})
export class DetailGridComponent implements AfterViewInit {
  isDiaDiemShow : boolean = true;
  dataSource: any = {
    data: [],
    totalCount: 0
  };
  tab : Tab[] = [
    {text : "dia diem"},
    {text : "gia"}
  ];
  // @ts-ignore
  @Input() key : number;
  // @ts-ignore

  tourChiTietDataSource : DataSource;
  // @ts-ignore
  giaDataSource : DataSource;

  tourChiTiet: TourChiTiet[] =[] ;

  gia:Gia[] = [];

  constructor(private service: TourChiTietService , private giaService : TourgiaService) {
    this.service.getTourChiTiet().toPromise().then((data) =>{
      data.forEach(e=>{
        this.tourChiTiet.push(e);
      })
    })

    this.giaService.getAll().toPromise().then((data)=>{
      data.forEach(e=>{
        this.gia.push(e);
      })
    })

  }

  ngAfterViewInit() {

      this.tourChiTietDataSource = new DataSource({
        store: new ArrayStore({
          data: this.tourChiTiet,
          key: "id",
        }),
          filter: ["tour.id", "=", this.key]
      });

    this.giaDataSource = new DataSource({
      store: new ArrayStore({
        data: this.gia,
        key: "id",
      }),
      filter: ["tourId", "=", this.key]
    });
    console.log(this.gia);

  }
  completedValue(rowData : any) {
    return rowData.Status == "Completed";
  }

  selectTab($event: any) {
    this.isDiaDiemShow = !this.isDiaDiemShow;
  }
}
