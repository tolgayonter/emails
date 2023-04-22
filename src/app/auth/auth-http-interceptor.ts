import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { Observable, filter, tap } from 'rxjs';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // modify or log the outgoing request
    const modifiedReq = req.clone({
      withCredentials: true,
    });

    return next.handle(modifiedReq);
    // to do smt with the different events coming out of our interceptor chain.
    // .pipe(
    //   filter((val) => val.type === HttpEventType.Response),
    //   tap((val) => {
    //     console.log(val);
    //   })
    // );
  }
}
