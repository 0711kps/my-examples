import { Controller, Get, Inject } from '@nestjs/common';
import { EnrollService } from './enroll.service';

@Controller('enroll')
export class EnrollController {
  constructor(
    @Inject('EnrollService')
    private readonly enrollService: EnrollService
  ){}

  @Get()
  async enroll () {
    return this.enrollService.enroll()
  }
}
