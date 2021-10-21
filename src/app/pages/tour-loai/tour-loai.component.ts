import { NgModule, Component, enableProdMode,OnInit } from '@angular/core';
import CustomStore from 'devextreme/data/custom_store';
import {TourLoaiService} from "../../services/tour-loai.service";
@Component({
  selector: 'app-tour-loai',
  templateUrl: './tour-loai.component.html',
  styleUrls: ['./tour-loai.component.scss']
})
export class TourLoaiComponent implements OnInit {
  dataSource: any = {
    data: [],
    totalCount: 0
  };

  constructor(private tourLoaiService: TourLoaiService) { }
  getTourLoai() : void {
    this.dataSource = new CustomStore({
      load: ()=>{
        return this.tourLoaiService.getTourLoais().toPromise().then((data)=>{
          return {
            data: data,
            totalCount: data.length
          }
        })
      }
    });
  }
  ngOnInit(): void {
    this.getTourLoai();
  }

}
