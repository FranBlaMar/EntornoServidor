import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthService } from "./auth/service/auth.service";
 
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    private baseUrl: string = environment.baseUrl; 
    constructor(private authService: AuthService, private router:Router, private http: HttpClient){};

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const url = `${this.baseUrl}/tokenCheck`;

        const httpOptions ={
            headers: new HttpHeaders ({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${JSON.parse(<string>localStorage.getItem('jwt')).access_token}`
            })
        };
        let resultado: boolean = false;
        this.http.get(url,httpOptions)
        .subscribe(res =>  {
            if(res) {
                resultado  = true;
            }
            else{
                this.router.navigateByUrl('login');
            }
        })
        return resultado;
    }
    
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.canActivate(route, state);
    }


}
