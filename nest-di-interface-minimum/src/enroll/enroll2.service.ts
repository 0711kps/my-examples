import { Injectable } from '@nestjs/common';
import { EnrollServiceInterface } from './enroll.service.interface';

@Injectable()
export class Enroll2Service implements EnrollServiceInterface  {
  enroll() {
    return 'enrolled2'
  }
}
