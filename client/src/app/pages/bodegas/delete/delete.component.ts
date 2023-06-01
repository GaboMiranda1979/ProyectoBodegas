import { Component, OnInit } from '@angular/core';
import { WineryService } from 'src/app/services/winery.service';
import { Winery } from 'src/app/model/winery';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  wineries: Winery[] = [];
  selectedWinery!: Winery;
  constructor(
    private wineryService: WineryService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getWineries();
  }

  getWineries(): void {
    this.wineryService
      .getWineries()
      .subscribe((wineries) => (this.wineries = wineries));
  }

  deleteWinery(_id: any): void {
    console.log(this.selectedWinery);
    this.wineryService.deleteWinery(this.selectedWinery).subscribe(() => {
      this.getWinery(_id);
    });
    this.toastr.error(
      'La Bodega fue eliminada con Exito!!!',
      'Bodega Eliminada'
    );
    this.router.navigate(['/']);
  }
  getWinery(_id: any) {
    throw new Error('Error');
  }
}
