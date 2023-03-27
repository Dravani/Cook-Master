import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipesComponent } from './recipes/recipes.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { PostfeedComponent } from './postfeed/postfeed.component';
import { EmailVerificationComponent } from './email-verification/email-verification.component';

const routes: Routes = [
{path: '', component:HomeComponent},
{path: 'recipes', component:RecipesComponent},
{path: "postfeed", component: PostfeedComponent},
{path: 'login', component:LoginComponent},
{path: "emailVerification", component:EmailVerificationComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
