import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { firstValueFrom, lastValueFrom, Observable } from 'rxjs';
import { LocalStorage } from '../enums/localstorage';
import { LocalStorageService } from '../services/local-store.service';
import { User } from '../interfaces/Auth';
import { isNotEmptyObj } from '../utils/checkers';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
      
    return this.checkCanActivate().then();
  }
  constructor(private localS: LocalStorageService) {}
  async checkCanActivate() {
    const adminCred = await firstValueFrom(
      this.localS.get<User>(LocalStorage.USER)
    );
    return adminCred && isNotEmptyObj(adminCred) && adminCred.role === 'admin';
  }
}
