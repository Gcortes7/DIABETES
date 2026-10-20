import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonTextarea, 
  IonAccordionGroup, 
  IonAccordion, 
  IonCheckbox, 
  IonSelect, 
  IonSelectOption, 
  IonButton 
} from '@ionic/angular';

@Component({
  selector: 'app-exploracion-fisica',
  templateUrl: './exploracion-fisica.component.html',
  styleUrls: ['./exploracion-fisica.component.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonAccordionGroup,
    IonAccordion,
    IonCheckbox,
    IonSelect,
    IonSelectOption,
    IonButton
  ]
})
export class ExploracionFisicaComponent implements OnInit {
  @Input() datosIniciales?: any;
  @Output() formSubmit = new EventEmitter<any>();

  exploracionForm!: FormGroup;

  escalaEscalar = [
    { value: 0, label: '0 - Ausente / Sin contracción' },
    { value: 1, label: '1 - Hipoactivo / Contracción con movimiento' },
    { value: 2, label: '2 - Normal / Movimiento sin gravedad' },
    { value: 3, label: '3 - Hiperactivo / Movimiento contra gravedad' },
    { value: 4, label: '4 - Hiperactivo con clono / Movimiento contra resistencia' },
    { value: 5, label: '5 - Fuerza máxima' }
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();

    if (this.datosIniciales) {
      this.exploracionForm.patchValue(this.datosIniciales);
    }
  }

  private initForm() {
    this.exploracionForm = this.fb.group({
      peso: ['', Validators.required],
      talla: ['', Validators.required],
      fc: [''],
      fr: [''],
      ta: [''],
      temperatura: [''],
      sistNervioso: [''],
      sistCardioRespiratorio: [''],
      sistDigestivo: [''],
      pruebas: this.fb.group({
        spurlingIzq: [false],
        spurlingDer: [false],
        bragardIzq: [false],
        bragardDer: [false],
        observacionesPruebas: ['']
      }),
      reflejos: this.fb.group({
        bicepsIzq: [2],
        bicepsDer: [2]
      })
    });
  }

  emitirDatos() {
    if (this.exploracionForm.valid) {
      this.formSubmit.emit(this.exploracionForm.value);
    }
  }
}
