import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { UsersComponent } from "./users/users.component";
import { ToDosComponent } from "./to-dos/to-dos.component";
import { NgwWowModule } from "ngx-wow";
import { AboutComponent } from "./about/about.component";

import { A11yModule } from "@angular/cdk/a11y";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { PortalModule } from "@angular/cdk/portal";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkStepperModule } from "@angular/cdk/stepper";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatBadgeModule } from "@angular/material/badge";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatChipsModule } from "@angular/material/chips";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDividerModule } from "@angular/material/divider";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSliderModule } from "@angular/material/slider";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatTreeModule } from "@angular/material/tree";
import { HttpServicesService } from "./http-services.service";

import { HttpClientModule } from "@angular/common/http";
import { SearchFilterPipe } from "./search-filter.pipe";
import { SearchUserComponent } from "./search-user/search-user.component";
import { ViewUserComponent } from "./view-user/view-user.component";
import { AddUserComponent } from "./add-user/add-user.component";
import {NgxPaginationModule} from 'ngx-pagination';
import { GithubUsersComponent } from './github-users/github-users.component';
const routers: Routes = [
  {
    path: "",
    component: UsersComponent,
    pathMatch:'full'
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "todo",
    component: ToDosComponent
  },
  {
    path: "view/:id",
    component: ViewUserComponent
  },
  {
    path: "add-user",
    component: AddUserComponent
  },
  {
    path: "github-users",
    component: GithubUsersComponent
  }
];

@NgModule({
  imports: [
    NgxPaginationModule,
    HttpClientModule,
    A11yModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    BrowserModule,
    FormsModule,
    NgwWowModule,
    RouterModule.forRoot(routers),
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    UsersComponent,
    ToDosComponent,
    AboutComponent,
    SearchFilterPipe,
    SearchUserComponent,
    ViewUserComponent,
    AddUserComponent,
    GithubUsersComponent
  ],
  bootstrap: [AppComponent],
  providers: [HttpServicesService]
})
export class AppModule {}
