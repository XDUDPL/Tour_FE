import { Component, OnInit } from '@angular/core';
import {TourService} from "../../services/tour.service";
import CustomStore from "devextreme/data/custom_store";
import {TourLoaiService} from "../../services/tour-loai.service";

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

  LoaiTour: object[] = [
    {
      "id": 1,
      "tenLoai": "2 năm",
      "moTaLoai":" đi đến già "
    },
    {
      "id": 2,
      "tenLoai": "1 năm",
      "moTaLoai":" đi đến gần già "
    },
    {
      "id": 3,
      "tenLoai": "ngắn ngày",
      "moTaLoai":" đi phí tiền "
    },
  ]


  constructor(private tourService: TourService ) { }

  getData() : void {
    this.dataSource = new CustomStore({
      load: ()=>{
        return this.tourService.getAll().toPromise().then((data)=>{
          return {
            data: data,
            totalCount: data.length
          }
        })
      }
    });
  }
  ngOnInit(): void {
    this.getData();
  }

}
