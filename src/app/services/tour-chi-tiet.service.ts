import { Injectable } from '@angular/core';
import {Task} from "../shared/model/Task";
let tasks:  Task[] = [{
  "ID": 1,
  "Subject": "Prepare 2013 Financial",
  "StartDate": "2013/01/15",
  "DueDate": "2013/01/31",
  "Status": "Completed",
  "Priority": "High",
  "Completion": 100,
  "TourID": 1
},
  {
    "ID": 2, "Subject": "Prepare 3013 Marketing Plan",
    "StartDate": "2013/01/01",
    "DueDate": "2013/01/31",
    "Status": "Completed",
    "Priority": "High",
    "Completion": 100,
    "TourID": 1
  }]
@Injectable({
  providedIn: 'root'
})

export class TourChiTietService {


  constructor() { }

  getTasks(){
    return tasks;
  }
}
