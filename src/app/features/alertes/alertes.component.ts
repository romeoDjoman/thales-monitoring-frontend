import { Component, OnInit } from '@angular/core';
import { AlerteService } from '../../shared/services/alerte.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alertes',
  imports: [
    CommonModule
  ],
  templateUrl: './alertes.component.html',
  styleUrl: './alertes.component.css'
})
export class AlertesComponent implements OnInit{
  messageAlerte: string | null = null;

  constructor(private alerteService: AlerteService) {}

  ngOnInit(): void {
    const equipementId = 11;
    this.alerteService.verifierAnomalies(equipementId).subscribe(message => {
      this.messageAlerte = message;
    });
  }
}
