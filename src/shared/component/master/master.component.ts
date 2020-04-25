import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.scss']
})
export class MasterComponent implements OnInit {

  @Input() full : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
