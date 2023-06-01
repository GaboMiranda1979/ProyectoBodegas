import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MaterialModule } from 'src/app/material.module';
import { HttpClient } from '@angular/common/http';
import { WineryService } from 'src/app/services/winery.service';
import { Winery } from 'src/app/model/winery';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bodegas',
 templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css']
})

  export class BodegasComponent implements OnInit {

    wineries: Winery[] = [];

    constructor(private wineryService: WineryService) { }

    ngOnInit(): void {
      this.getWineries();
    }

   getWineries(): void {
   this.wineryService.getWineries()
      .subscribe(wineries=> this.wineries = wineries);
     }

}
