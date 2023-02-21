import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseInputsComponent } from './form-controls/base-inputs/base-inputs.component';
import { CheckboxRadioComponent } from './form-controls/checkbox-radio/checkbox-radio.component';
import { FormValidationComponent } from './form-controls/form-validation/form-validation.component';
import { InputGroupsComponent } from './form-controls/input-groups/input-groups.component';
import { MegaOptionsComponent } from './form-controls/mega-options/mega-options.component';
import { TravelHistoryComponent } from './form-vts/travel-history/travel-history.component';
import { ViolationComponent } from './form-vts/violation/violation.component';
import { GoogleMapComponent } from './form-vts/google-map/google-map.component';
import { TestSocketComponent } from './form-vts/test-socket/test-socket.component'
import { FleetMasterComponent } from './form-vts/fleet-master/fleet-master.component';
import { SafetyComponent } from './form-vts/safety/safety.component';
import { DistanceTravelComponent } from './form-vts/distance-travel/distance-travel.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: "travelHistory",
        component: TravelHistoryComponent
      },
      {
        path: "google-map",
        component: GoogleMapComponent
      },
      {
        path: "violation",
        component: ViolationComponent
      },
      {
        path: "FleetMaster",
        component:FleetMasterComponent
      },
      {
        path: "Safety",
        component: SafetyComponent
      },
      {
        path: "DistanceTravel",
        component:DistanceTravelComponent
      },
      {
        path: 'socket',
        component: TestSocketComponent
      },
      {
        path: "form-controls",
        children: [
          {
            path: 'validation',
            component: FormValidationComponent
          },
          {
            path: 'inputs',
            component: BaseInputsComponent
          },
          {
            path: 'checkbox-radio',
            component: CheckboxRadioComponent
          },
          {
            path: 'input-groups',
            component: InputGroupsComponent
          },
          {
            path: 'mega-options',
            component: MegaOptionsComponent
          },
        ]
      },
      {
        path: "pipeline",
        children: [
         
          {
            path: "source",
            children:[
            ]      
          },
          {
            path: "destination",
            children: [
            ]
          },
        ]
      },
      {
        path: "form-widgets",
        children: [

        ]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
