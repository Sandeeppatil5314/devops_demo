import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { ArchwizardModule } from 'angular-archwizard';
import { SharedModule } from '../../shared/shared.module';
import { BaseInputsComponent } from './form-controls/base-inputs/base-inputs.component';
import { CheckboxRadioComponent } from './form-controls/checkbox-radio/checkbox-radio.component';
import { FormValidationComponent } from './form-controls/form-validation/form-validation.component';
import { InputGroupsComponent } from './form-controls/input-groups/input-groups.component';
import { MegaOptionsComponent } from './form-controls/mega-options/mega-options.component';
import { FormsRoutingModule } from './forms-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { TravelHistoryComponent } from './form-vts/travel-history/travel-history.component';
import { ViolationComponent } from './form-vts/violation/violation.component';
import { GoogleMapComponent } from './form-vts/google-map/google-map.component';
import { AgmCoreModule } from '@agm/core';
import { FleetMasterComponent } from './form-vts/fleet-master/fleet-master.component';
import { SafetyComponent } from './form-vts/safety/safety.component';
import { DistanceTravelComponent } from './form-vts/distance-travel/distance-travel.component';


@NgModule({
  declarations: [
    FormValidationComponent,
    CheckboxRadioComponent,
    InputGroupsComponent,
    MegaOptionsComponent,
    BaseInputsComponent,
  TravelHistoryComponent,
  ViolationComponent,
  GoogleMapComponent,
  FleetMasterComponent,
  SafetyComponent,
  DistanceTravelComponent
  ],

  imports: [
    CommonModule,
    NgxDatatableModule,
    FormsRoutingModule,
    FormsModule,
    HttpClientModule,
    SelectDropDownModule,
    ReactiveFormsModule,
    NgbModule,
    ArchwizardModule,
    SharedModule,
    NgSelectModule,
    Ng2SearchPipeModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDF4zBVABXhLlinuz_7khJPnPeQa3Cmk8o'
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FormModule { }
