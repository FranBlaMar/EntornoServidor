
import { Observable } from "rxjs";

export interface canComponentDeactivate{
    canDeactivate(): Observable<boolean> | Promise<boolean> | boolean
}