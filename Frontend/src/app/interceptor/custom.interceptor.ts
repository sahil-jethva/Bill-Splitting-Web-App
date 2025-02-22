import { HttpInterceptorFn } from '@angular/common/http';
import { StorageKeys } from '../Enums/enum';

export const customInterceptor: HttpInterceptorFn = (req, next) => {

    const myToken = sessionStorage.getItem(StorageKeys.TOKEN)
    const request = req.clone({
        setHeaders: {
            authorization: `'Bearer' ${myToken}`
        }
    });
    return next(request)
};
