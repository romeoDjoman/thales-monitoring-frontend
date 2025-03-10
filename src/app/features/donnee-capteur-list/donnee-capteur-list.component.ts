import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { DonneeCapteurService } from '../../shared/services/donnee-capteur.service';
import { CommonModule } from '@angular/common';
import { PerformanceChartComponent } from '../../pages/performance-chart/performance-chart.component';

@Component({
  selector: 'app-donnee-capteur-list',
  imports: [
    CommonModule,
    
  ],
  templateUrl: './donnee-capteur-list.component.html',
  styleUrl: './donnee-capteur-list.component.css'
})
export class DonneeCapteurListComponent implements OnInit{
  donneesCapteur: any[] = [];
  chartData: any = {
    datasets: [
      {
        data: [],
        label: 'Valeurs des Capteurs'
      }
    ],
    labels: []
  };

  constructor(private donneeCapteurService: DonneeCapteurService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.loadDonneesCapteur();
  }

  loadDonneesCapteur(): void {
    this.donneeCapteurService.getAllDonneesCapteur().subscribe(data => {
      this.donneesCapteur = data;
      this.updateChart(data);  // Met à jour le graphique
    });
  }

  updateChart(donneesCapteur: any[]): void {
    this.chartData.datasets[0].data = donneesCapteur.map(d => d.valeur);
    this.chartData.labels = donneesCapteur.map(d => new Date(d.dateCollecte).toLocaleDateString());
    this.cdr.detectChanges(); 
  }

  getStatusColor(valeur: number): string {
    if (valeur > 60) return 'green';
    if (valeur >= 30) return 'orange';
    return 'red';
  }
  
  getStatusLabel(valeur: number): string {
    if (valeur > 60) return 'Récent';
    if (valeur >= 30) return '< 60min';
    return '> 60min';
  }
  
  
}