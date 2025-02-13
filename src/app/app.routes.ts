import { Routes } from '@angular/router';
import { AdminComponent } from '@templates/admin/admin.component';
import { AuthComponent } from '@templates/auth/auth.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthComponent,
        children: [
            {
                path: '',
                redirectTo: '/auth/sign-in',
                pathMatch: 'full',
            },
            {
                path: 'sign-in',
                loadComponent: () => import('./pages/auth/sign-in/sign-in.component').then(component => component.SignInComponent),
                title: 'Entrar na minha conta'
            },
        ]
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            {
                path: '',
                redirectTo: '/admin/dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                loadComponent: () => import('./pages/admin/components/dashboard/container/dashboard.component').then(component => component.DashboardComponent),
                title: 'Dashboard'
            },
            {
                path: 'electronic-medical-record',
                loadComponent: () => import('./pages/admin/components/electronic-medical-record/container/electronic-medical-record.component').then(component => component.ElectronicMedicalRecordComponent),
                children: [
                    {
                        path: '',
                        redirectTo: '/admin/electronic-medical-record/index',
                        pathMatch: 'full'
                    },
                    {
                        path: 'index',
                        loadComponent: () => import('./pages/admin/components/electronic-medical-record/views/index/electronic-medical-record-index.component').then(component => component.ElectronicMedicalRecordIndexComponent),
                        title: 'Lista de prontuários electrónicos'
                    },
                    {
                        path: 'create',
                        loadComponent: () => import('./pages/admin/components/electronic-medical-record/views/create/create-electronic-medical-record.component').then(component => component.CreateElectronicMedicalRecordComponent),
                        title: 'Criar um prontuário electrónico'
                    },
                    {
                        path: 'edit',
                        loadComponent: () => import('./pages/admin/components/electronic-medical-record/views/edit/edit-electronic-medical-record.component').then(component => component.EditElectronicMedicalRecordComponent),
                        title: 'Editar um prontuário electrónico'
                    },
                ]
            },
            {
                path: 'schedulings',
                loadComponent: () => import('./pages/admin/components/scheduling/container/scheduling.component').then(component => component.SchedulingComponent),
                children: [
                    {
                        path: '',
                        redirectTo: '/admin/schedulings/index',
                        pathMatch: 'full'
                    },
                    {
                        path: 'index',
                        loadComponent: () => import('./pages/admin/components/scheduling/views/index/schedulings-index.component').then(component => component.SchedulingsIndexComponent),
                        title: 'Lista de agendamentos'
                    },
                    {
                        path: 'create',
                        loadComponent: () => import('./pages/admin/components/scheduling/views/create/create-scheduling.component').then(component => component.CreateSchedulingComponent),
                        title: 'Criar agendamento'
                    },
                    {
                        path: 'edit/:id',
                        loadComponent: () => import('./pages/admin/components/scheduling/views/edit/edit-scheduling.component').then(component => component.EditSchedulingComponent),
                        title: 'Editar agendamento'
                    },
                ]
            },
            {
                path: 'colaborators',
                loadComponent: () => import('./pages/admin/components/colaborators/container/colaborators.component').then(component => component.ColaboratorsComponent),
                children: [
                    {
                        path: '',
                        redirectTo: '/admin/colaborators/index',
                        pathMatch: 'full'
                    },
                    {
                        path: 'index',
                        loadComponent: () => import('./pages/admin/components/colaborators/views/index/colaborators-index.component').then(component => component.ColaboratorsIndexComponent),
                        title: 'Lista de funcionários'
                    },
                    {
                        path: 'create',
                        loadComponent: () => import('./pages/admin/components/colaborators/views/create/create-colaborator.component').then(component => component.CreateColaboratorComponent),
                        title: 'Criar um funcionário'
                    },
                    {
                        path: 'edit/:id',
                        loadComponent: () => import('./pages/admin/components/colaborators/views/edit/edit-colaborator.component').then(component => component.EditColaboratorComponent),
                        title: 'Editar funcionáro'
                    }
                ]
            },
            {
                path: 'departaments',
                loadComponent: () => import('./pages/admin/components/departaments/container/departaments.component').then(component => component.DepartamentsComponent),
                children: [
                    {
                        path: '',
                        redirectTo: '/admin/departaments/index',
                        pathMatch: 'full'
                    },
                    {
                        path: 'index',
                        loadComponent: () => import('./pages/admin/components/departaments/views/index/departaments-index.component').then(component => component.DepartamentsIndexComponent),
                        title: 'Listar os departamentos'
                    },
                    {
                        path: 'create',
                        loadComponent: () => import('./pages/admin/components/departaments/views/create/create-departament.component').then(component => component.CreateDepartamentComponent),
                        title: 'Criar departamento' 
                    },
                    {
                        path: 'edit/:id',
                        loadComponent: () => import('./pages/admin/components/departaments/views/edit/edit-departament.component').then(component => component.EditDepartamentComponent),
                        title: 'Editar departamento'
                    }
                ]
            },
            {
                path: 'agreements-and-insurance',
                loadComponent: () => import('./pages/admin/components/agreements-and-insurance/container/agreements-and-insurance.component').then(component => component.AgreementsAndInsuranceComponent),
                children: [
                    {
                        path: '',
                        redirectTo: '/admin/agreements-and-insurance/index',
                        pathMatch: 'full'
                    },
                    {
                        path: 'index',
                        loadComponent: () => import('./pages/admin/components/agreements-and-insurance/views/index/agreements-and-insurance-index.component').then(component => component.AgreementsAndInsuranceIndexComponent),
                        title: 'Lista de convênios e seguros'
                    },
                    {
                        path: 'create',
                        loadComponent: () => import('./pages/admin/components/agreements-and-insurance/views/create/create-agreements-and-insurance.component').then(component => component.CreateAgreementsAndInsuranceComponent),
                        title: 'Criar convênio ou seguro'
                    },
                    {
                        path: 'edit/:id',
                        loadComponent: () => import('./pages/admin/components/agreements-and-insurance/views/edit/edit-agreements-and-insurance.component').then(component => component.EditAgreementsAndInsuranceComponent),
                        title: 'Lista de convênios e seguros'
                    },
                ]
            },
            {
                path: 'billing-and-finance',
                loadComponent: () => import('./pages/admin/components/billing-and-finance/container/billing-and-finance.component').then(component => component.BillingAndFinanceComponent),
                children: [
                    {
                        path: '',
                        redirectTo: '/admin/billing-and-finance/index',
                        pathMatch: 'full'
                    },
                    {
                        path: 'index',
                        loadComponent: () => import('./pages/admin/components/billing-and-finance/views/index/billing-and-finances-index.component').then(component => component.BillingAndFinancesIndexComponent),
                        title: 'Lista de faturamentos e financeiro'
                    },
                    {
                        path: 'create',
                        loadComponent: () => import('./pages/admin/components/billing-and-finance/views/create/create-billing-and-finance.component').then(component => component.CreateBillingAndFinanceComponent),
                        title: 'Criar faturamento'
                    },
                    {
                        path: 'edit/:id',
                        loadComponent: () => import('./pages/admin/components/billing-and-finance/views/edit/edit-billing-and-finance.component').then(component => component.EditBillingAndFinanceComponent),
                        title: 'Editar faturamento'
                    },
                ]
            }
        ]
    }
];
