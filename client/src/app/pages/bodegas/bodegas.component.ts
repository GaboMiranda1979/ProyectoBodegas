import { Component, OnInit } from '@angular/core';
import { WineryService } from 'src/app/services/winery.service';
import { Winery } from 'src/app/model/winery';

@Component({
  selector: 'app-bodegas',
  templateUrl: './bodegas.component.html',
  styleUrls: ['./bodegas.component.css'],
})
export class BodegasComponent implements OnInit {
  wineries: Winery[] = [];

  constructor(private wineryService: WineryService) {}

  ngOnInit(): void {
    this.getWineries();
  }

  getWineries(): void {
    this.wineryService
      .getWineries()
      .subscribe((wineries) => (this.wineries = wineries));
  }
}
