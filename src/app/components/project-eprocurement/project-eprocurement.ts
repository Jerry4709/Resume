import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-eprocurement',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './project-eprocurement.html',
  styleUrls: ['./project-eprocurement.css']
})
export class ProjectEprocurementComponent {
}
