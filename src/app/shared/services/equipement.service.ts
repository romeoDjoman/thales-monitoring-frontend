// equipement.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipementService {
  private apiUrl = 'http://localhost:8080/api/equipements';

  constructor(private http: HttpClient) {}

  // Récupérer tous les équipements
  getAllEquipements(): Observable<any> {
    return this.http.get(`${this.apiUrl}/all`);
  }

  // Ajouter un équipement
  addEquipement(equipement: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/add`, equipement);
  }

  // Récupérer un équipement par son ID
  getEquipementById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // Mettre à jour un équipement
  updateEquipement(id: number, equipement: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, equipement);
  }

  // Supprimer un équipement
  deleteEquipement(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}