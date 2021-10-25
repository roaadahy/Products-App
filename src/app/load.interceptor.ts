import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent,HttpInterceptor,} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadService } from './load.service';
@Injectable()
export class LoadInterceptor implements HttpInterceptor {
  constructor(private loadService: LoadService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.loadService.setIsLoading(true);
    return next.handle(request).pipe(
      finalize(() => {
        this.loadService.setIsLoading(false);
      })
    );
  }
}
