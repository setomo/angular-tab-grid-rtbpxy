import {Component,OnInit,ViewChild} from '@angular/core';
import {orderDetails} from '../data'
import { GridComponent } from '@syncfusion/ej2-angular-grids';


/**
 * @title Basic use of the tab group
 */
@Component({
  selector: 'tab-group-basic-example',
  templateUrl: 'tab-group-basic-example.html',
  styleUrls: ['tab-group-basic-example.css'],
})
export class TabGroupBasicExample {
    public data: Object[];
    @ViewChild('grid')
    public grid: GridComponent;
    @ViewChild('grid1')
    public grid1: GridComponent;

   ngOnInit(): void {
        this.data = orderDetails;
    }
    rowSelected(args: any) {
      debugger
        let rowHeight: number = this.grid.getRows()[this.grid.getSelectedRowIndexes()[0]].scrollHeight;
        this.grid.getContent().children[0].scrollTop = rowHeight * this.grid.getSelectedRowIndexes()[0];
    }
        rowSelected1(args: any) {
          debugger
        let rowHeight: number = parseInt(this.grid1.getRowHeight() as any);
        this.grid1.getContent().children[0].scrollTop = rowHeight * this.grid1.getSelectedRowIndexes()[0];
    }
}


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */