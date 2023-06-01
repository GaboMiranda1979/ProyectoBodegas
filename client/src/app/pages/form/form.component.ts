import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WineryService } from 'src/app/services/winery.service';
import { Winery } from 'src/app/model/winery';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  wineryForm: FormGroup;
  titulo = 'Create Winery';
  id: string | null;
  winery: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _wineryService: WineryService,
    private aRouter: ActivatedRoute
  ) {
    this.wineryForm = this.fb.group({
      name: ['', Validators.required],
      zone: ['', Validators.required],
    });
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {}

  addWinery() {
    console.log(this.wineryForm);

    console.log(this.wineryForm.get('name')?.value);

    const WINERY: Winery = {
      name: this.wineryForm.get('name')?.value,
      zone: this.wineryForm.get('zone')?.value,
    };
    this._wineryService.saveWinery(WINERY).subscribe(
      (data) => {
        this.toastr.success(
          'Bodega Registrada con Exito!',
          'Bodega Registrada!'
        );
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
        this.wineryForm.reset();
      }
    );
  }
}
