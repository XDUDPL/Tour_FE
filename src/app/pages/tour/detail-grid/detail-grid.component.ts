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

@Component({
  selector: 'detail-grid1',
  templateUrl: './detail-grid.component.html',
  providers: [TourChiTietService]
})
export class DetailGridComponent implements AfterViewInit {
  dataSource: any = {
    data: [],
    totalCount: 0
  };
  // @ts-ignore
  @Input() key : number;
  // @ts-ignore

  tourChiTietDataSource : DataSource;

  tourChiTiet: TourChiTiet[] =[] ;

  constructor(private service: TourChiTietService) {
    this.service.getTourChiTiet().toPromise().then((data) =>{
      data.forEach(e=>{
        this.tourChiTiet.push(e);
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
    console.log(this.tourChiTietDataSource)
    console.log(this.key)
  }
  completedValue(rowData : any) {
    return rowData.Status == "Completed";
  }
}
