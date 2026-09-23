import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeDocumentsComponent } from './components/employee-documents/employee-documents.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list',
    component: EmployeeListComponent
  },
  {
    path:'form',
    component: EmployeeFormComponent
  },
  {
    path:'details/:id',
    component: EmployeeDetailsComponent
  },
  {
    path:'documents',
    component: EmployeeDocumentsComponent
  }
]


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,
    EmployeeDetailsComponent,
    EmployeeDocumentsComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class EmployeesModule { }
