import { Component } from '@angular/core';
import { EquipementService } from '../../shared/services/equipement.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-equipement',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './manage-equipement.component.html',
  styleUrl: './manage-equipement.component.css'
})
export class ManageEquipementComponent {
  equipements: any[] = [];
    equipementForm: FormGroup;
    selectedEquipement: any = null;
  
    constructor(
      private fb: FormBuilder,
      private equipementService: EquipementService
    ) {
      this.equipementForm = this.fb.group({
        nom: ['', Validators.required],
        type: ['', Validators.required],
        dateInstallation: ['', Validators.required]
      });
    }
  
    ngOnInit(): void {
      this.loadEquipements();
    }
  
    loadEquipements(): void {
      this.equipementService.getAllEquipements().subscribe(data => {
        this.equipements = data;
      });
    }
  
    addEquipement(): void {
      if (this.equipementForm.valid) {
        this.equipementService.addEquipement(this.equipementForm.value).subscribe(() => {
          this.loadEquipements();
          this.equipementForm.reset();
        });
      }
    }
  
    selectEquipement(equipement: any): void {
      this.selectedEquipement = { ...equipement };
      this.equipementForm.patchValue(equipement);
    }
  
    updateEquipement(): void {
      if (this.equipementForm.valid) {
        this.equipementService.updateEquipement(this.selectedEquipement.id, this.equipementForm.value).subscribe(() => {
          this.loadEquipements();
          this.selectedEquipement = null;
          this.equipementForm.reset();
        });
      }
    }
  
    deleteEquipement(id: number): void {
      this.equipementService.deleteEquipement(id).subscribe(() => {
        this.loadEquipements();
      });
    }
}
