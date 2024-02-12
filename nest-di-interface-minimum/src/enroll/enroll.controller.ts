import { Controller, Get, Inject } from '@nestjs/common';
import { EnrollService } from './enroll.service';
import { EnrollServiceInterface } from './enroll.service.interface';

@Controller('enroll')
export class EnrollController {
  constructor(
    @Inject(EnrollServiceInterface)
    private readonly enrollService: EnrollService
  ){}

  @Get()
  async enroll () {
    return this.enrollService.enroll()
  }
}
