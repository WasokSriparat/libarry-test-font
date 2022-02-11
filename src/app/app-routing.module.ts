import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAddComponent } from './components/pages/book-add/book-add.component';
import { BookEditComponent } from './components/pages/book-edit/book-edit.component';
import { BookComponent } from './components/pages/book/book.component';
import { BorrowAddComponent } from './components/pages/borrow-add/borrow-add.component';
import { BorrowComponent } from './components/pages/borrow/borrow.component';
import { LoginComponent } from './components/pages/login/login.component';
import { MainComponent } from './components/pages/main/main.component';
import { MemberAddComponent } from './components/pages/member-add/member-add.component';
import { MemberEditComponent } from './components/pages/member-edit/member-edit.component';
import { MemberComponent } from './components/pages/member/member.component';
import { ReturnComponent } from './components/pages/return/return.component';
import { StaffAddComponent } from './components/pages/staff-add/staff-add.component';
import { StaffEditComponent } from './components/pages/staff-edit/staff-edit.component';
import { StaffComponent } from './components/pages/staff/staff.component';

const routes: Routes = [
  { path: "", component: MainComponent},
  { path: "login", component: LoginComponent},
  { path: "book", component: BookComponent},
  { path: "book/add",component: BookAddComponent},
  { path: "book/edit/:id",component: BookEditComponent},
  { path: "member", component: MemberComponent},
  { path: "member/add", component: MemberAddComponent},
  { path: "member/edit/:id", component: MemberEditComponent},
  { path: "staff", component: StaffComponent},
  { path: "staff/add", component: StaffAddComponent},
  { path: "staff/edit/:id", component: StaffEditComponent},
  { path: "borrow", component: BorrowComponent},
  { path: "borrow/add", component: BorrowAddComponent},
  { path: "return/:id", component: ReturnComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
