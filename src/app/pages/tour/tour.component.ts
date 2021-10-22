import { Component, OnInit } from '@angular/core';
import {TourService} from "../../services/tour.service";
import CustomStore from "devextreme/data/custom_store";

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
      "tenLoai": "Nữ",
      "moTaLoai":" ALo "
    },
    {
      "id": 2,
      "tenLoai": "Nam",
      "moTaLoai":" phát "
    },
    {
      "id": 3,
      "tenLoai": "vl",
      "moTaLoai":" gay "
    },
  ]

  Tasks: object[] = [
    {
      "id": 1,
      "tenLoai": "Nữ",
      "moTaLoai":" ALo "
    },
    {
      "id": 2,
      "tenLoai": "Nam",
      "moTaLoai":" phát "
    },
    {
      "id": 3,
      "tenLoai": "vl",
      "moTaLoai":" gay "
    },
  ]

  constructor(private tourService: TourService) { }
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
