import { Component } from '@angular/core';
import { RapportService } from '../../shared/services/rapport.service';
import { CommonModule } from '@angular/common';
import html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-rapport',
  imports: [
    CommonModule
  ],
  templateUrl: './rapport.component.html',
  styleUrl: './rapport.component.css'
})
export class RapportComponent {
  rapport: any;

  constructor(private rapportService: RapportService) {}

  ngOnInit(): void {
    const equipementId = 11; // Remplacez par l'ID de l'équipement souhaité
    this.rapportService.getRapport(equipementId).subscribe(data => {
      this.rapport = data;
    });
  }

  // Fonction pour générer le PDF
  generatePDF(): void {
    const element = document.getElementById('rapport-content');
    const options = {
      margin: 10,
      filename: 'rapport_statistique.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(element).set(options).save();
  }
}