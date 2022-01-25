import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServersService } from './protected/servers/servers.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './AuthGuard.service';
import { CanDeactivateGuard } from './protected/servers/edit-server/can-deactivate-guard.service';
import { ServerResolver } from './protected/servers/server/server-resolver.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import swal from 'sweetalert';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ServersService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
