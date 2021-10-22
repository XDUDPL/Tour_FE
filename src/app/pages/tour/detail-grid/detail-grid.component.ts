import { Component, Input, AfterViewInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import ArrayStore from 'devextreme/data/array_store';
import {Task} from "../../../shared/model/Task";
import {TourChiTietService} from "../../../services/tour-chi-tiet.service";

@Component({
  selector: 'detail-grid1',
  templateUrl: './detail-grid.component.html',

  providers: [TourChiTietService]
})
export class DetailGridComponent implements AfterViewInit {

  // @ts-ignore
  @Input() key1 : number;
  // @ts-ignore
  tasksDataSource : DataSource;
  tasks: Task[];

  constructor(private service: TourChiTietService) {
    this.tasks = service.getTasks();
  }
  ngAfterViewInit() {
    this.tasksDataSource = new DataSource({
      store: new ArrayStore({
        data: this.tasks,
        key: "ID"
      }),
      filter: ["TourID", "=", this.key1]
    })
  }
  completedValue(rowData : any) {
    return rowData.Status == "Completed";
  }
}
