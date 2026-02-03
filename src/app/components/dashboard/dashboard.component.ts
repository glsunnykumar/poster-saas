import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TemplateService } from '../../services/template.service';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

   templates$: any;
  
  constructor(private templateService: TemplateService) {}

  ngOnInit(): void {
    this.templates$ = this.templateService.getTemplates();
  }
}
