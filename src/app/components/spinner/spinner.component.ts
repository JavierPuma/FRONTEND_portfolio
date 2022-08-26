import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  showSpinner: boolean = false;

  constructor(private spinnerServ: SpinnerService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.spinnerServ.getSpinnerObserver().subscribe(status => {
      this.showSpinner = status === 'start';
      this.cdRef.detectChanges();
    })
  }

}