import { Injectable } from '@angular/core';
import { cameraList } from '../../app.constants';

@Injectable({
  providedIn: 'root',
})
export class SecondService {
  constructor() {}

  checkCamera(
    minLightLevel: string | null,
    maxLightLevel: string | null,
    minSubjectDistance: string | null,
    maxSubjectDistance: string | null
  ): any {
    let result: boolean = false;
    let cameraName = '';

    cameraList.forEach((item) => {
      console.log(item);
      if (
        parseInt(minLightLevel || '0') >= item.minLightLevel &&
        parseInt(minLightLevel || '0') <= item.maxLightLevel &&
        parseInt(maxLightLevel || '0') >= item.minLightLevel &&
        parseInt(maxLightLevel || '0') <= item.maxLightLevel &&
        parseInt(minSubjectDistance || '0') >= item.minSubjectDistance &&
        parseInt(minSubjectDistance || '0') <= item.maxSubjectDistance &&
        parseInt(maxSubjectDistance || '0') >= item.minSubjectDistance &&
        parseInt(maxSubjectDistance || '0') <= item.maxSubjectDistance
      ) {
        result = true;
        cameraName = item.name;
      }
    });
    return { result, cameraName };
  }
}
