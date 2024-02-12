import { Injectable } from '@nestjs/common';
import { EnrollServiceInterface } from './enroll.service.interface';

@Injectable()
export class EnrollService implements EnrollServiceInterface  {
  enroll() {
    return 'enrolled'
  }
}
