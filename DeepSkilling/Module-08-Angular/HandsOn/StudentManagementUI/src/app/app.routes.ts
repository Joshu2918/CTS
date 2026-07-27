import { Routes } from '@angular/router';

import { Home } from './components/home/home';
import { StudentList } from './components/student-list/student-list';
import { StudentAdd } from './components/student-add/student-add';
import { StudentEdit } from './components/student-edit/student-edit';
import { PageNotFound } from './components/page-not-found/page-not-found';

export const routes: Routes = [

    { path: '', component: Home },

    { path: 'students', component: StudentList },

    { path: 'add-student', component: StudentAdd },

    { path: 'edit-student/:id', component: StudentEdit },

    { path: '**', component: PageNotFound }

];